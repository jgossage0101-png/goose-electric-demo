import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Zap,
  Plug,
  Lightbulb,
  Fan,
  Wrench,
  Sun,
  Smartphone,
  Home,
  PhoneCall,
  MapPin,
  Mail,
  ShieldCheck,
  Users,
  MessageSquare,
  Handshake,
  Check,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/goose-logo.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Plug, title: "Outlets & Switches", desc: "Replace, upgrade, or add new outlets and switches around the home." },
  { icon: Lightbulb, title: "Light Fixtures", desc: "Install or swap interior fixtures, pendants, vanities, and more." },
  { icon: Fan, title: "Ceiling Fans", desc: "Mount and wire new ceiling fans or replace tired existing units." },
  { icon: Wrench, title: "Troubleshooting", desc: "Track down flickering lights, dead outlets, and other quirks." },
  { icon: Sun, title: "Outdoor Lighting", desc: "Porch, security, and landscape lighting that lasts season after season." },
  { icon: Smartphone, title: "Smart Devices", desc: "Smart switches, dimmers, doorbells, and connected home upgrades." },
  { icon: Home, title: "Small Repairs", desc: "Honest help with the small residential fixes that pile up over time." },
  { icon: PhoneCall, title: "Service Calls", desc: "General visits for whatever's on your home electrical to-do list." },
];

const whyPoints = [
  { icon: MapPin, title: "Local to Baltimore County", desc: "Born and raised right here. We know the neighborhoods we serve." },
  { icon: Users, title: "Family-Built Company", desc: "Two brothers building something dependable for our community." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Plain talk, honest timelines, no jargon and no surprises." },
  { icon: Handshake, title: "Fair, Straightforward Service", desc: "Straight pricing and respectful work, every visit." },
];

const areas = [
  "Dundalk",
  "Essex",
  "Sparrows Point",
  "Edgemere",
  "Middle River",
  "Rosedale",
  "Baltimore County",
  "Surrounding Communities",
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Dundalk, Essex, Sparrows Point, Edgemere, Middle River, Rosedale, and surrounding Baltimore County communities.",
  },
  {
    q: "What types of electrical work do you handle?",
    a: "Residential work like outlets, switches, light fixtures, ceiling fans, outdoor lighting, smart device installs, troubleshooting, and general service calls.",
  },
  {
    q: "How do I request a callback?",
    a: "Fill out the Request a Callback form on this page with a little detail about what's going on, and we'll reach out to learn more.",
  },
  {
    q: "Do you handle small residential projects?",
    a: "Yes — small home projects are a big part of what we do. No job is too small to talk about.",
  },
  {
    q: "Can I ask about a project not listed?",
    a: "Absolutely. If you have something on your mind that isn't on our service list, send it our way and we'll talk it through.",
  },
  {
    q: "How soon will someone reach out?",
    a: "We aim to follow up within one business day of receiving your request.",
  },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <ServiceArea />
        <CallbackForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (o: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            smoothScroll(e, "#home");
            setMenuOpen(false);
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Goose Electric logo" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-lg font-extrabold tracking-tight text-primary">
            GOOSE <span className="text-secondary">ELECTRIC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="text-sm font-semibold text-foreground/80 transition hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm"
          >
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
              <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  smoothScroll(e, l.href);
                  setMenuOpen(false);
                }}
                className="rounded-md px-3 py-3 text-base font-semibold text-foreground/90 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  smoothScroll(e, "#contact");
                  setMenuOpen(false);
                }}
              >
                <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[oklch(0.16_0.05_260)] text-primary-foreground"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Zap className="h-3.5 w-3.5 text-secondary" />
            Serving Dundalk & Baltimore County
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Residential Electrical Help for{" "}
            <span className="text-secondary">Everyday Home Projects</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            Goose Electric provides dependable local electrical service for homeowners in
            Dundalk and surrounding Baltimore County communities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
            >
              <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
                <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#services" onClick={(e) => smoothScroll(e, "#services")}>
                View Services
              </a>
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Local Residential Service",
              "Straightforward Communication",
              "Dependable Work",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm font-medium text-white/85"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero card */}
        <div className="relative lg:pl-8">
          <div className="absolute -inset-2 rounded-3xl bg-secondary/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Goose Electric"
                  className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/15"
                />
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
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
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

function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary`}
      >
        <Zap className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Residential electrical work, done right"
          description="A snapshot of the everyday home electrical projects we help with. Don't see yours? Reach out — we likely handle it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
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
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
              Talk to us about your project
            </a>
          </Button>
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
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="About"
            title="Two brothers, one community"
            center={false}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Goose Electric is a local, family-built electrical service brand created by
              two brothers with deep roots in the Dundalk area. We started this company
              with one long-term goal: build a dependable residential electrical company
              that treats neighbors the way we'd want our own family treated.
            </p>
            <p>
              That means showing up when we say we will, talking through projects in plain
              terms, and standing behind the work we do. From a single outlet swap to
              outfitting a room with new lighting, we approach every visit the same way —
              with care, focus, and respect for your home.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Local", v: "Baltimore County" },
              { k: "Built by", v: "Two Brothers" },
              { k: "Focus", v: "Residential" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {s.k}
                </div>
                <div className="mt-1 text-sm font-bold text-primary">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/15 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-[oklch(0.17_0.05_260)] p-8 text-primary-foreground shadow-xl sm:p-10">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Goose Electric"
                className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/10"
              />
              <div>
                <div className="text-lg font-extrabold">Goose Electric</div>
                <div className="text-sm text-white/70">Family-built · Locally rooted</div>
              </div>
            </div>

            <blockquote className="mt-8 border-l-4 border-secondary pl-5 text-lg italic leading-relaxed text-white/90">
              "We're building Goose Electric the way we'd want a contractor to work in
              our own homes — straightforward, on time, and easy to talk to."
            </blockquote>
            <div className="mt-4 text-sm font-semibold text-secondary">
              — The Goose Electric Team
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, label: "Respectful work" },
                { icon: MessageSquare, label: "Clear updates" },
                { icon: Handshake, label: "Fair pricing" },
                { icon: MapPin, label: "Truly local" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/85"
                >
                  <t.icon className="h-4 w-4 text-secondary" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="service-area" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Area"
          title="Proudly serving Baltimore County"
          description="Based in Dundalk and serving the surrounding communities we know best."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-bold text-primary">Coverage</div>
                  <div className="text-xs text-muted-foreground">Dundalk & surrounding</div>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium text-primary"
                  >
                    <Zap className="h-3.5 w-3.5 text-secondary" /> {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Not sure if you're in our area? Send a message — we're happy to take a
                look.
              </p>
            </div>
          </div>

          {/* Stylized map card */}
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-72 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-[oklch(0.17_0.05_260)] p-8 text-primary-foreground shadow-sm">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Pretend roads */}
              <svg
                viewBox="0 0 400 280"
                className="absolute inset-0 h-full w-full opacity-30"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M0 200 C100 180 200 220 400 160" />
                <path d="M50 0 C70 100 120 140 180 280" />
                <path d="M400 60 C300 90 260 150 220 280" />
                <path d="M0 90 L400 110" strokeDasharray="4 6" />
              </svg>

              {/* Pins */}
              {[
                { top: "32%", left: "38%", label: "Dundalk", main: true },
                { top: "18%", left: "70%", label: "Rosedale" },
                { top: "55%", left: "60%", label: "Edgemere" },
                { top: "70%", left: "30%", label: "Sparrows Point" },
                { top: "28%", left: "85%", label: "Middle River" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: p.top, left: p.left }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white/30 ${
                        p.main ? "bg-secondary" : "bg-white/15"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="rounded bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {p.label}
                    </span>
                  </div>
                </div>
              ))}

              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Home Base
                </div>
                <div className="mt-1 text-2xl font-extrabold">Dundalk, MD</div>
                <div className="mt-1 text-sm text-white/70">
                  Serving Baltimore County homeowners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    need: "",
    contact: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7)
      e.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.need.trim()) e.need = "Tell us a little about what you need.";
    if (!form.contact) e.contact = "Pick a preferred contact method.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Get In Touch"
              title="Request a Callback"
              description="Tell us what's going on and we'll reach out to learn more. No pressure — just a conversation."
              center={false}
            />
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(410) 555-0142",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@gooseelectric.com",
                },
                {
                  icon: MapPin,
                  label: "Based In",
                  value: "Dundalk, Baltimore County, MD",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-bold text-primary">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-primary">
                    Thanks — your request has been received.
                  </h3>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Goose Electric will reach out soon. We typically follow up within one
                    business day.
                  </p>
                  <Button
                    className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        need: "",
                        contact: "",
                        details: "",
                      });
                    }}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      error={errors.name}
                      input={
                        <Input
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Your full name"
                        />
                      }
                    />
                    <Field
                      label="Phone number"
                      required
                      error={errors.phone}
                      input={
                        <Input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="(410) 555-0123"
                        />
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Email"
                      error={errors.email}
                      input={
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@example.com"
                        />
                      }
                    />
                    <Field
                      label="City / neighborhood"
                      input={
                        <Input
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder="Dundalk, Essex, etc."
                        />
                      }
                    />
                  </div>

                  <Field
                    label="What do you need help with?"
                    required
                    error={errors.need}
                    input={
                      <Input
                        value={form.need}
                        onChange={(e) => update("need", e.target.value)}
                        placeholder="e.g. Install two ceiling fans"
                      />
                    }
                  />

                  <Field
                    label="Preferred contact method"
                    required
                    error={errors.contact}
                    input={
                      <Select
                        value={form.contact}
                        onValueChange={(v) => update("contact", v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone call</SelectItem>
                          <SelectItem value="text">Text message</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    }
                  />

                  <Field
                    label="Additional details"
                    input={
                      <Textarea
                        value={form.details}
                        rows={4}
                        onChange={(e) => update("details", e.target.value)}
                        placeholder="Anything else that would help us understand your project."
                      />
                    }
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    We respect your time. No spam, no pressure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  required,
  error,
}: {
  label: string;
  input: React.ReactNode;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-semibold text-primary">
        {label}
        {required && <span className="ml-1 text-secondary">*</span>}
      </Label>
      {input}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="A few quick answers. Don't see yours? Reach out anytime."
        />
        <div className="mt-12 rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-4 py-4 text-left text-base font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Goose Electric"
                className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/15"
              />
              <span className="text-lg font-extrabold tracking-tight">
                GOOSE <span className="text-secondary">ELECTRIC</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Local family-built residential electrical service for homeowners across
              Dundalk and Baltimore County.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-secondary">
              Service Area
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {["Dundalk", "Essex", "Sparrows Point", "Edgemere", "Middle River", "Rosedale"].map(
                (a) => (
                  <li key={a}>{a}</li>
                ),
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-secondary">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" /> (410) 555-0142
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" /> hello@gooseelectric.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" /> Dundalk, MD
              </li>
            </ul>

            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-secondary">
              Navigate
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => smoothScroll(e, l.href)}
                    className="hover:text-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Goose Electric. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-secondary" /> Built for homeowners in Baltimore County
          </div>
        </div>
      </div>
    </footer>
  );
}
