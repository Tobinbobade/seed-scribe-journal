import { Layout } from "@/components/layout/Layout";
import { ArticleListItem } from "@/components/ArticleListItem";
import { sampleArticles, volumes } from "@/data/journal-data";

export default function CurrentIssue() {
  const currentVolume = volumes[0];
  const currentIssue = currentVolume.issues[0];

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Current Issue
          </h1>
          <p className="text-base text-muted-foreground mt-2">
            Volume {currentVolume.number}, Issue {currentIssue.number} ({currentVolume.year})
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-lg font-serif font-bold text-primary mb-2">
              Articles in this Issue
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {sampleArticles.length} articles published
            </p>

            <div className="border-t border-border">
              {sampleArticles.map((article, index) => (
                <ArticleListItem 
                  key={article.id} 
                  article={article} 
                  index={index + 1}
                  showFullAbstract={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Issue Information */}
      <section className="py-10 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h3 className="text-lg font-serif font-bold text-primary mb-3">
              About This Issue
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              This issue presents research articles covering various aspects of seed science 
              and technology, including seed viability studies, seed treatment methods, and 
              genetic diversity assessments of local crop varieties. The research presented 
              contributes to our understanding of sustainable seed management practices in Nigeria.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
