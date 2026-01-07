import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { journalInfo } from "@/data/journal-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About the Journal" },
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
    <header className="bg-background border-b border-border">
      {/* Journal Identity Section */}
      <div className="bg-journal-header text-journal-header-foreground">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <Link to="/" className="block">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight leading-tight">
              {journalInfo.title}
            </h1>
            <p className="text-sm md:text-base opacity-90 mt-2 font-normal">
              {journalInfo.subtitle}
            </p>
          </Link>
          
          {/* ISSN Information */}
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs md:text-sm opacity-80">
            <span>ISSN (Print): {journalInfo.issnPrint}</span>
            <span>ISSN (Online): {journalInfo.issnOnline}</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <li key={link.href} className="relative">
                <Link
                  to={link.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.href 
                      ? "text-primary border-b-2 border-primary -mb-[1px]" 
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-border" />
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex justify-between items-center py-3">
            <span className="text-sm font-medium text-muted-foreground">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:bg-muted"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden pb-4 space-y-1 border-t border-border pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium transition-colors hover:bg-muted rounded",
                      location.pathname === link.href 
                        ? "text-primary bg-primary/5" 
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
