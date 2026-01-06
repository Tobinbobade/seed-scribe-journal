import { Link } from "react-router-dom";
import { journalInfo } from "@/data/journal-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-journal-footer text-journal-footer-foreground mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Journal Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{journalInfo.shortTitle}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              A peer-reviewed scientific publication of the Association of Seed Scientists of Nigeria (ASSN).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About the Journal
                </Link>
              </li>
              <li>
                <Link to="/author-guidelines" className="opacity-80 hover:opacity-100 transition-opacity">
                  Submit Manuscript
                </Link>
              </li>
              <li>
                <Link to="/editorial-board" className="opacity-80 hover:opacity-100 transition-opacity">
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link to="/archives" className="opacity-80 hover:opacity-100 transition-opacity">
                  Browse Archives
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <address className="text-sm opacity-80 not-italic leading-relaxed">
              <p>{journalInfo.publisher}</p>
              <p className="mt-2">
                Email:{" "}
                <a href={`mailto:${journalInfo.email}`} className="hover:opacity-100 underline">
                  {journalInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© {currentYear} {journalInfo.publisher}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
