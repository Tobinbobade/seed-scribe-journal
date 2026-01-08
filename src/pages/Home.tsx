import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArticleListItem } from "@/components/ArticleListItem";
import { sampleArticles, journalInfo, volumes } from "@/data/journal-data";
import { Separator } from "@/components/ui/separator";
import { FileText, Users, Download, BookOpen } from "lucide-react";

export default function Home() {
  const currentVolume = volumes[0];
  const currentIssue = currentVolume.issues[0];

  // Journal statistics (placeholder data)
  const stats = {
    articles: 24,
    downloads: 1250,
    authors: 68,
    volumes: 1,
  };

  return (
    <Layout>
      {/* Introduction Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">
              Welcome
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              The <strong>{journalInfo.title}</strong> is a peer-reviewed scientific publication 
              of the {journalInfo.publisher}. The journal provides a platform for researchers, 
              academics, and professionals to publish original research and review articles in 
              seed science, seed technology, plant breeding, crop production, and related disciplines.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              The journal serves researchers, academics, policymakers, and practitioners 
              within Nigeria and internationally, contributing to the advancement of knowledge 
              in seed science and sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Statistics Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stats.articles}</div>
                <div className="text-sm text-muted-foreground">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stats.downloads}+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stats.authors}</div>
                <div className="text-sm text-muted-foreground">Contributing Authors</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stats.volumes}</div>
                <div className="text-sm text-muted-foreground">Volumes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Current Issue Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2">
              Current Issue
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Volume {currentVolume.number}, Issue {currentIssue.number} ({currentVolume.year})
            </p>
            
            <div className="border-t border-border">
              {sampleArticles.map((article, index) => (
                <ArticleListItem 
                  key={article.id} 
                  article={article} 
                  index={index + 1}
                />
              ))}
            </div>
            
            <div className="mt-6">
              <Link 
                to="/current-issue" 
                className="text-primary hover:underline font-medium"
              >
                View Full Issue →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Journal Information Section */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aims & Scope */}
              <div>
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  Aims & Scope
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  The journal publishes high-quality research covering seed biology, 
                  seed production, seed storage, seed quality assessment, plant breeding, 
                  crop improvement, biotechnology, and sustainable agricultural practices. 
                  We welcome original research articles, review papers, short communications, 
                  and technical notes.
                </p>
              </div>
              
              {/* Publication Frequency */}
              <div>
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  Publication Frequency
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  The journal is published periodically in volumes and issues as determined 
                  by the Association. Each volume typically corresponds to a calendar year, 
                  with issues published based on the volume of accepted manuscripts.
                </p>
              </div>
            </div>
            
            {/* Open Access Statement */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Open Access
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                The {journalInfo.title} is committed to open access publishing. 
                All published articles are freely available online to readers worldwide, 
                supporting the broader dissemination of research findings and promoting 
                knowledge sharing across the scientific community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Indexing & Quick Links Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Indexed In */}
              <div>
                <h2 className="text-xl font-serif font-bold text-primary mb-4">
                  Indexed In
                </h2>
                <div className="space-y-2 text-sm text-foreground">
                  <p className="py-2 px-3 bg-muted/50 rounded">Google Scholar</p>
                  <p className="py-2 px-3 bg-muted/50 rounded">African Journals Online (AJOL)</p>
                  <p className="py-2 px-3 bg-muted/50 rounded">Directory of Open Access Journals (DOAJ) - <span className="text-muted-foreground italic">Applied</span></p>
                  <p className="py-2 px-3 bg-muted/50 rounded">CAB Abstracts - <span className="text-muted-foreground italic">Applied</span></p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-xl font-serif font-bold text-primary mb-4">
                  Quick Links
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/archives" className="text-primary hover:underline">
                      → View Archives
                    </Link>
                    <span className="text-muted-foreground text-sm ml-3">
                      Browse previously published issues
                    </span>
                  </li>
                  <li>
                    <Link to="/author-guidelines" className="text-primary hover:underline">
                      → Author Guidelines
                    </Link>
                    <span className="text-muted-foreground text-sm ml-3">
                      Instructions for manuscript submission
                    </span>
                  </li>
                  <li>
                    <Link to="/editorial-board" className="text-primary hover:underline">
                      → Editorial Board
                    </Link>
                    <span className="text-muted-foreground text-sm ml-3">
                      Meet our editorial team
                    </span>
                  </li>
                  <li>
                    <Link to="/about" className="text-primary hover:underline">
                      → About the Journal
                    </Link>
                    <span className="text-muted-foreground text-sm ml-3">
                      Learn more about our mission and scope
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
