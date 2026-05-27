import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin, Zap } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import logo from "@/assets/goose-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Goose Electric" className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/15" />
              <span className="text-lg font-extrabold tracking-tight">
                GOOSE <span className="text-secondary">ELECTRIC</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Local family-built residential electrical service for homeowners across Dundalk and Baltimore County.
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
            <div className="text-xs font-bold uppercase tracking-wider text-secondary">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />(410) 555-0142
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />hello@gooseelectric.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />Dundalk, MD
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-secondary">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-secondary">
                    {l.label}
                  </Link>
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
