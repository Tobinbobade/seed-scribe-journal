import { journalInfo } from "@/data/journal-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p className="font-serif font-medium text-foreground">
            {journalInfo.title}
          </p>
          <p>
            {journalInfo.publisher}
          </p>
          <p>
            Email:{" "}
            <a 
              href={`mailto:${journalInfo.email}`} 
              className="text-primary hover:underline"
            >
              {journalInfo.email}
            </a>
          </p>
          <p className="pt-2 text-xs">
            © {currentYear} {journalInfo.publisher}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
