import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Goose Electric" },
      {
        name: "description",
        content:
          "Goose Electric is a family-built residential electrical company started by two brothers in Dundalk, Maryland.",
      },
      { property: "og:title", content: "About — Goose Electric" },
      {
        property: "og:description",
        content: "Two brothers building a dependable local electrical company for Baltimore County homeowners.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const trustPills = [
    "Local: Dundalk & Baltimore County",
    "Built by: Two Brothers",
    "Focus: Residential Electrical Work",
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[30px] border border-border bg-card p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              <Zap className="h-3.5 w-3.5" /> About Goose Electric
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Two brothers, one community.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Goose Electric is a local, family-built electrical service brand created by two brothers with roots in the
              Dundalk area. We’re building it around dependable residential electrical work, clear communication, and respect
              for every home we step into.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              From outlet swaps and lighting upgrades to ceiling fans and troubleshooting, the goal is simple: show up,
              explain the work plainly, and do the job the right way.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/contact">Request a Callback</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border bg-background text-foreground hover:bg-secondary/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </article>

          <aside className="rounded-[30px] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="rounded-[26px] border border-secondary/20 bg-gradient-to-br from-white via-secondary/5 to-primary/5 p-6 shadow-inner">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Goose Electric</p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">Built for local homes.</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 rounded-[24px] border border-border bg-background/90 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <BadgeCheck className="h-4 w-4 text-secondary" /> Residential service
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Dundalk / Baltimore County · practical, dependable electrical help.</p>
              </div>

              <div className="mt-4 rounded-[24px] border border-dashed border-secondary/30 bg-white p-5 text-sm text-muted-foreground">
                A simple, local brand focused on care, clarity, and quality residential work.
              </div>
            </div>
          </aside>
        </section>

        <section className="flex flex-wrap gap-3">
          {trustPills.map((pill) => (
            <span key={pill} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
              {pill}
            </span>
          ))}
        </section>
      </div>
    </section>
  );
}
