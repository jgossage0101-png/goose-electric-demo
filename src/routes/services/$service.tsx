import { createFileRoute, Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$service")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.service);

    return {
      meta: [
        { title: `${service?.title ?? "Service"} — Goose Electric` },
        {
          name: "description",
          content:
            service?.desc ??
            "Browse our residential electrical service gallery for examples of the work we do.",
        },
        { property: "og:title", content: `${service?.title ?? "Service"} — Goose Electric` },
        {
          property: "og:description",
          content:
            service?.desc ??
            "Browse our residential electrical service gallery for examples of the work we do.",
        },
      ],
    };
  },
  component: ServiceGalleryPage,
});

type ServicePhoto = {
  id: string;
  title: string;
  src?: string;
  employeeId?: string;
};

const ALLOWED_EMPLOYEE_IDS = ["05192005", "05052007"];

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Unable to read the selected image file."));
    reader.readAsDataURL(file);
  });
}

function getStorageKey(service: string) {
  return `goose-electric-gallery:${service}`;
}

function readStoredPhotos(service: string): ServicePhoto[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.sessionStorage.getItem(getStorageKey(service));
    return raw ? (JSON.parse(raw) as ServicePhoto[]) : [];
  } catch {
    return [];
  }
}

function ServiceGalleryPage() {
  const { service } = Route.useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const currentService = services.find((item) => item.slug === service);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [photos, setPhotos] = useState<ServicePhoto[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [employeeId, setEmployeeId] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [uploadService, setUploadService] = useState(service);
  const [employeeError, setEmployeeError] = useState("");
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    setUploadService(service);
    setPhotos(readStoredPhotos(service));
  }, [service]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.sessionStorage.setItem(getStorageKey(service), JSON.stringify(photos));
  }, [photos, service]);

  if (!currentService) {
    return (
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-primary">Service not found</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The requested service gallery could not be found. Please choose a service from the main
            services page.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const displayedPhotos = photos;

  const handleFiles = async (files: File[], titleOverride = "") => {
    if (!files.length) return;

    if (!employeeId || !employeeId.trim()) {
      setEmployeeError("Employee ID is required to upload photos.");
      return;
    }

    if (!ALLOWED_EMPLOYEE_IDS.includes(employeeId.trim())) {
      setEmployeeError(`Employee ID "${employeeId}" is not authorized to upload photos. Only authorized employees can add to the gallery.`);
      return;
    }

    try {
      const srcs = await Promise.all(files.map((file) => fileToDataUrl(file)));
      const uploaded = srcs.map((src, index) => ({
        id: `upload-${Date.now()}-${index}`,
        title: titleOverride || files[index]?.name || "Uploaded project photo",
        src,
        employeeId: employeeId.trim(),
      }));

      setPhotos((current) => [...uploaded, ...current]);
      setSelectedFiles([]);
      setEmployeeError("");
      setUploadError("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch {
      setUploadError("Unable to read one or more selected image files.");
    }
  };

  const handleAdminUpload = () => {
    if (!employeeId.trim()) {
      setUploadError("Employee ID is required.");
      return;
    }

    if (!ALLOWED_EMPLOYEE_IDS.includes(employeeId.trim())) {
      setEmployeeError(`Employee ID "${employeeId}" is not authorized to upload photos.`);
      return;
    }

    if (!selectedFiles.length) {
      setUploadError("Choose at least one photo to upload.");
      return;
    }

    void handleFiles(selectedFiles, projectTitle.trim() || undefined);
    setProjectTitle("");
  };

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="rounded-[28px] border border-border bg-card/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Project Gallery</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Real residential electrical work, shown clearly.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{currentService.desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button asChild variant="outline" className="border-border bg-background text-foreground hover:bg-secondary/10">
                <Link to="/services">Back to services</Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-border bg-background text-foreground hover:bg-secondary/10">Admin Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Admin project upload</DialogTitle>
                    <DialogDescription>Keep uploads organized by service and employee ID.</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Employee ID</label>
                      <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Enter employee ID" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project title</label>
                      <Input value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} placeholder="Optional project title" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service category</label>
                      <select
                        value={uploadService}
                        onChange={(e) => setUploadService(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm shadow-sm outline-none transition focus:border-primary"
                      >
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Upload photos</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        className="block w-full rounded-2xl border border-dashed border-border bg-background px-3 py-2 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-secondary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-secondary hover:file:bg-secondary/20"
                        onChange={(e) => {
                          setUploadError("");
                          setSelectedFiles(Array.from(e.target.files ?? []));
                        }}
                      />
                    </div>
                    {uploadError ? <p className="text-sm text-destructive">{uploadError}</p> : null}
                    {employeeError ? <p className="text-sm text-destructive">{employeeError}</p> : null}
                    <Button onClick={handleAdminUpload} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Upload photos</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Choose a service</p>
            <div className="mt-4">
              <label className="sr-only" htmlFor="service-select">Choose a service</label>
              <select
                id="service-select"
                value={service}
                onChange={(event) => navigate({ to: "/services/$service", params: { service: event.target.value } })}
                className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm shadow-sm outline-none transition focus:border-primary"
              >
                {services.map((item) => (
                  <option key={item.slug} value={item.slug}>{item.title}</option>
                ))}
              </select>
            </div>
          </article>

          <aside className="rounded-[28px] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Projects showcased</p>
                <p className="mt-3 text-4xl font-semibold text-foreground">{displayedPhotos.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">Current service: {currentService.title}</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                {(() => {
                  const CurrentIcon = currentService.icon;
                  return <CurrentIcon className="h-7 w-7" />;
                })()}
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {displayedPhotos.length === 0 ? (
            <article className="col-span-full rounded-[28px] border border-dashed border-border bg-card p-10 text-center shadow-sm sm:p-14">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">+</div>
              <h2 className="mt-5 text-2xl font-semibold text-foreground">No projects uploaded for this service yet.</h2>
              <p className="mt-3 text-sm text-muted-foreground">Check back soon or explore another service to see more of our recent work.</p>
              <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/services">View all services</Link>
              </Button>
            </article>
          ) : (
            displayedPhotos.map((photo) => (
              <article
                key={photo.id}
                className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition duration-200 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-slate-950">
                  {photo.src ? (
                    <img src={photo.src} alt={photo.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="flex h-64 items-center justify-center bg-secondary/10 p-6 text-center text-sm text-muted-foreground">
                      <p>{photo.title}</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-foreground">{photo.title}</p>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">{currentService.title}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{photo.employeeId ? `Uploaded by ${photo.employeeId}` : "Project photo from our residential gallery"}</p>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="mt-16 rounded-[2rem] border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Like what you see?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">Start your premium installation with a quick callback.</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Share a photo, describe your space, or request a custom estimate for a {currentService.title.toLowerCase()} project.</p>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90"><Link to="/contact">Request a callback</Link></Button>
              <Button asChild size="lg" className="border border-border bg-background text-foreground hover:bg-secondary/10"><Link to="/services">Back to services</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
