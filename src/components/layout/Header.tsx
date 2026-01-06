import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/author-guidelines", label: "Author Guidelines" },
  { href: "/current-issue", label: "Current Issue" },
  { href: "/archives", label: "Archives" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-journal-header text-journal-header-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with journal name */}
        <div className="py-4 border-b border-primary/20">
          <Link to="/" className="block">
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              ASSN Journal of Seed Science and Technology
            </h1>
            <p className="text-sm opacity-80 mt-1">
              Association of Seed Scientists of Nigeria
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-3">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/20",
                    location.pathname === link.href && "bg-primary/30"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-journal-header-foreground hover:bg-primary/20"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden mt-4 pb-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/20",
                      location.pathname === link.href && "bg-primary/30"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
