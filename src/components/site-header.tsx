import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import logo from "@/assets/goose-logo.jpeg";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <img src={logo} alt="Goose Electric logo" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-lg font-extrabold tracking-tight text-primary">
            GOOSE <span className="text-secondary">ELECTRIC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-secondary" }}
              className="text-sm font-semibold text-foreground/80 transition hover:text-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm">
            <Link to="/contact">
              <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
            </Link>
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
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-secondary" }}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-foreground/90 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <PhoneCall className="mr-2 h-4 w-4" /> Request a Callback
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
