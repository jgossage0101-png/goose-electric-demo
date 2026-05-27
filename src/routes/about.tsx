import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

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
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title="Two brothers, one community" />
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Goose Electric is a local, family-built electrical service brand created by two brothers with deep roots in the
            Dundalk area. We started this company with one long-term goal: build a dependable residential electrical
            company that treats neighbors the way we'd want our own family treated.
          </p>
          <p>
            That means showing up when we say we will, talking through projects in plain terms, and standing behind the
            work we do. From a single outlet swap to outfitting a room with new lighting, we approach every visit the same
            way — with care, focus, and respect for your home.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { k: "Local", v: "Baltimore County" },
            { k: "Built by", v: "Two Brothers" },
            { k: "Focus", v: "Residential" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{s.k}</div>
              <div className="mt-1 text-sm font-bold text-primary">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">Request a Callback</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
