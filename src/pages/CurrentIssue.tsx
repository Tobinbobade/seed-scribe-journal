import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { sampleArticles, volumes } from "@/data/journal-data";
import { BookOpen } from "lucide-react";

export default function CurrentIssue() {
  const currentVolume = volumes[0];
  const currentIssue = currentVolume.issues[0];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Current Issue
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <p className="text-lg text-muted-foreground">
              Volume {currentVolume.number}, Issue {currentIssue.number} ({currentVolume.year})
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Articles in this Issue
            </h2>
            <p className="text-muted-foreground">
              {sampleArticles.length} articles published
            </p>
          </div>

          <div className="space-y-6">
            {sampleArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                showFullAbstract={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Issue Info */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              About This Issue
            </h3>
            <p className="text-muted-foreground leading-relaxed">
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
