import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { sampleArticles, journalInfo } from "@/data/journal-data";

export default function Home() {
  // Show only the first 2 articles on the home page
  const latestArticles = sampleArticles.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Welcome to the {journalInfo.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A peer-reviewed scientific publication of the {journalInfo.publisher}. 
              The journal provides a platform for researchers, academics, and professionals 
              to publish original research and review articles in seed science, seed technology, 
              plant breeding, crop production, and related disciplines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/current-issue">
                  View Current Issue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/author-guidelines">
                  Submit Manuscript
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aims & Scope Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Aims & Scope
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            The journal publishes high-quality research covering seed biology, seed production, 
            seed storage, seed quality, plant breeding, crop improvement, and sustainable 
            agricultural practices. We welcome original research articles, review papers, 
            short communications, and technical notes from researchers across Nigeria and 
            the international scientific community.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/about" 
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
            >
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                About the Journal
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about our mission, publication frequency, and editorial policies.
              </p>
            </Link>

            <Link 
              to="/editorial-board" 
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
            >
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Editorial Board
              </h3>
              <p className="text-sm text-muted-foreground">
                Meet our team of experienced academics and professionals.
              </p>
            </Link>

            <Link 
              to="/author-guidelines" 
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
            >
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Author Guidelines
              </h3>
              <p className="text-sm text-muted-foreground">
                Guidelines for manuscript preparation and submission.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Latest Articles
            </h2>
            <Button asChild variant="link" className="text-primary">
              <Link to="/current-issue">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground mb-8">
            Latest articles from the most recent issue are displayed below.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
