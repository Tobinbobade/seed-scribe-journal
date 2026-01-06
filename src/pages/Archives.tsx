import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { volumes, sampleArticles } from "@/data/journal-data";
import { ChevronDown, ChevronRight, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Archives() {
  const [expandedVolumes, setExpandedVolumes] = useState<number[]>([1]);

  const toggleVolume = (volumeNumber: number) => {
    setExpandedVolumes(prev => 
      prev.includes(volumeNumber) 
        ? prev.filter(v => v !== volumeNumber)
        : [...prev, volumeNumber]
    );
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Archives
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Browse previously published issues of the ASSN Journal of Seed Science and Technology.
          </p>

          {/* Volumes List */}
          <div className="space-y-4 max-w-3xl">
            {volumes.map((volume) => (
              <div key={volume.number} className="border border-border rounded-lg overflow-hidden">
                {/* Volume Header */}
                <button
                  onClick={() => toggleVolume(volume.number)}
                  className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-serif font-semibold text-foreground">
                      Volume {volume.number} ({volume.year})
                    </span>
                  </div>
                  {expandedVolumes.includes(volume.number) ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {/* Volume Content */}
                {expandedVolumes.includes(volume.number) && (
                  <div className="border-t border-border bg-background">
                    {volume.issues.map((issue) => (
                      <div key={issue.number} className="p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm font-medium text-primary">
                            Issue {issue.number}
                          </span>
                          {volume.number === 1 && issue.number === 1 && (
                            <Link 
                              to="/current-issue"
                              className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded"
                            >
                              Current
                            </Link>
                          )}
                        </div>

                        {issue.articles.length > 0 ? (
                          <ul className="space-y-3">
                            {(volume.number === 1 ? sampleArticles : issue.articles).map((article, index) => (
                              <li key={article.id || index}>
                                <div className={cn(
                                  "p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                                )}>
                                  <div className="flex items-start gap-3">
                                    <FileText className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                                    <div>
                                      <h4 className="text-sm font-medium text-foreground leading-tight mb-1">
                                        {article.title}
                                      </h4>
                                      <p className="text-xs text-muted-foreground">
                                        {article.authors}
                                      </p>
                                      {article.pages && (
                                        <p className="text-xs text-muted-foreground mt-1">
                                          pp. {article.pages}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-muted-foreground italic pl-2">
                            Coming soon - articles not yet published
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Future Notice */}
          <div className="mt-12 bg-muted rounded-lg p-6 max-w-3xl">
            <h3 className="font-serif font-semibold text-foreground mb-2">
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
      </section>
    </Layout>
  );
}
