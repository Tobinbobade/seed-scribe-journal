import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { volumes, sampleArticles } from "@/data/journal-data";
import { Separator } from "@/components/ui/separator";

export default function Archives() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Archives
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-base text-foreground leading-relaxed mb-8">
              Browse previously published issues of the ASSN Journal of Seed Science and Technology.
            </p>

            {/* Volumes List */}
            <div className="space-y-10">
              {volumes.map((volume) => (
                <div key={volume.number}>
                  {/* Volume Header */}
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">
                    Volume {volume.number} ({volume.year})
                  </h2>
                  
                  {/* Issues */}
                  {volume.issues.map((issue) => (
                    <div key={issue.number} className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-base font-semibold text-foreground">
                          Issue {issue.number}
                        </h3>
                        {volume.number === 1 && issue.number === 1 && (
                          <Link 
                            to="/current-issue"
                            className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded"
                          >
                            Current Issue
                          </Link>
                        )}
                      </div>

                      {/* Articles List */}
                      {(volume.number === 1 ? sampleArticles : issue.articles).length > 0 ? (
                        <ul className="space-y-3 pl-4 border-l border-border">
                          {(volume.number === 1 ? sampleArticles : issue.articles).map((article, index) => (
                            <li key={article.id || index}>
                              <p className="text-sm font-medium text-foreground leading-snug">
                                {article.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {article.authors}
                                {article.pages && <span className="ml-2">| pp. {article.pages}</span>}
                              </p>
                              <a 
                                href={article.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline"
                              >
                                Download PDF
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground italic pl-4">
                          Coming soon — articles not yet published
                        </p>
                      )}
                    </div>
                  ))}
                  
                  <Separator className="mt-8" />
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-10 pt-6 border-t border-border">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Looking for older issues?
              </h3>
              <p className="text-sm text-muted-foreground">
                The journal archive is continuously being updated. If you are looking for 
                articles from previous years, please contact the editorial office at{" "}
                <a href="mailto:journal@assnigeria.org" className="text-primary hover:underline">
                  journal@assnigeria.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
