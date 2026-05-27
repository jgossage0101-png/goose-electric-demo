import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, PhoneCall, Plug, Lightbulb, Wrench, Sun, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { whyPoints } from "@/lib/site-data";
import logo from "@/assets/goose-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goose Electric — Residential Electrician in Dundalk & Baltimore County" },
      {
        name: "description",
        content:
          "Local family-built residential electrical service in Dundalk and Baltimore County. Outlets, fixtures, ceiling fans, troubleshooting and more.",
      },
      { property: "og:title", content: "Goose Electric — Local Residential Electrician" },
      {
        property: "og:description",
        content: "Dependable residential electrical help for homeowners in Dundalk and surrounding Baltimore County communities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChoose />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[oklch(0.16_0.05_260)] text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Zap className="h-3.5 w-3.5 text-secondary" />
            Serving Dundalk & Baltimore County
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Residential Electrical Help for <span className="text-secondary">Everyday Home Projects</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            Goose Electric provides dependable local electrical service for homeowners in Dundalk and surrounding Baltimore County communities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
              <Link to="/contact">
                <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Local Residential Service", "Straightforward Communication", "Dependable Work"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-8">
          <div className="absolute -inset-2 rounded-3xl bg-secondary/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Goose Electric" className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/15" />
                <div>
                  <div className="text-sm font-bold text-white">Goose Electric</div>
                  <div className="text-xs text-white/60">Family-Built · Local</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Now Booking
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { icon: Plug, label: "Outlet & switch work" },
                { icon: Lightbulb, label: "Fixtures & ceiling fans" },
                { icon: Wrench, label: "Troubleshooting & repairs" },
                { icon: Sun, label: "Outdoor & smart lighting" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                      <row.icon className="h-4 w-4" />
                    </span>
                    {row.label}
                  </div>
                  <Check className="h-4 w-4 text-secondary" />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-secondary px-4 py-3 text-secondary-foreground">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Phone className="h-4 w-4" /> Typical callback within 1 business day
              </div>
              <Zap className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Goose Electric"
          title="A local team you can count on"
          description="Built on the belief that homeowners deserve respectful, clear, and dependable electrical service."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Talk to us about your project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
