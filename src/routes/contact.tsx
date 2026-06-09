import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneCall, Phone, Mail, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/section-header";
import { businessContact, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Goose Electric" },
      {
        name: "description",
        content:
          "Request a callback from Goose Electric. Local residential electrical service in Dundalk and Baltimore County.",
      },
      { property: "og:title", content: "Contact — Goose Electric" },
      {
        property: "og:description",
        content: "Tell us what's going on and we'll reach out — typically within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <CallbackForm />
      <FAQ />
    </>
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
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.need.trim()) e.need = "Tell us a little about what you need.";
    if (!form.contact) e.contact = "Pick a preferred contact method.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    const subject = `Goose Electric callback request from ${form.name.trim()}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email ? `Email: ${form.email.trim()}` : "Email: not provided",
      form.city ? `City / neighborhood: ${form.city.trim()}` : "City / neighborhood: not provided",
      `Need help with: ${form.need.trim()}`,
      `Preferred contact: ${form.contact}`,
      form.details ? `Details: ${form.details.trim()}` : "Details: none provided",
    ].join("\n");

    window.location.href = `mailto:${businessContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section className="bg-background py-20 sm:py-24">
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
                { icon: Phone, label: "Phone", value: businessContact.phone, href: businessContact.phoneHref },
                { icon: Mail, label: "Email", value: businessContact.email, href: businessContact.emailHref },
                { icon: MapPin, label: "Based In", value: businessContact.city, href: "" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-bold text-primary hover:text-secondary">{c.value}</a>
                    ) : (
                      <div className="text-sm font-bold text-primary">{c.value}</div>
                    )}
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
                  <h3 className="mt-6 text-2xl font-extrabold text-primary">Thanks — your request has been received.</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Goose Electric will reach out soon. We typically follow up within one business day.
                  </p>
                  <Button
                    className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", city: "", need: "", contact: "", details: "" });
                    }}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" required error={errors.name}
                      input={<Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />} />
                    <Field label="Phone number" required error={errors.phone}
                      input={<Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(410) 555-0123" />} />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" error={errors.email}
                      input={<Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />} />
                    <Field label="City / neighborhood"
                      input={<Input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Dundalk, Essex, etc." />} />
                  </div>

                  <Field label="What do you need help with?" required error={errors.need}
                    input={<Input value={form.need} onChange={(e) => update("need", e.target.value)} placeholder="e.g. Install two ceiling fans" />} />

                  <Field label="Preferred contact method" required error={errors.contact}
                    input={
                      <Select value={form.contact} onValueChange={(v) => update("contact", v)}>
                        <SelectTrigger><SelectValue placeholder="Choose one" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone call</SelectItem>
                          <SelectItem value="text">Text message</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    } />

                  <Field label="Additional details"
                    input={<Textarea value={form.details} rows={4} onChange={(e) => update("details", e.target.value)} placeholder="Anything else that would help us understand your project." />} />

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">We respect your time. No spam, no pressure.</p>
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
        <SectionHeader eyebrow="FAQ" title="Common questions" description="A few quick answers. Don't see yours? Reach out anytime." />
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
