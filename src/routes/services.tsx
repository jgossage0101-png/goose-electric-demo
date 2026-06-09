import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Goose Electric" },
      {
        name: "description",
        content:
          "Residential electrical services in Dundalk and Baltimore County: outlets, switches, fixtures, ceiling fans, outdoor lighting, smart devices, and troubleshooting.",
      },
      { property: "og:title", content: "Services — Goose Electric" },
      {
        property: "og:description",
        content: "Everyday residential electrical projects, done right by a local family team.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const location = useLocation();
  const isGalleryRoute = location.pathname !== "/services" && location.pathname.startsWith("/services/");

  if (isGalleryRoute) {
    return <Outlet />;
  }

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Residential electrical work, done right"
          description="A snapshot of the everyday home electrical projects we help with. Don't see yours? Reach out — we likely handle it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-secondary group-hover:text-secondary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div
                aria-hidden
                className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-secondary/0 transition group-hover:bg-secondary/10"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">Talk to us about your project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
