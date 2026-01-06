import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/data/journal-data";

interface ArticleCardProps {
  article: Article;
  showFullAbstract?: boolean;
}

export function ArticleCard({ article, showFullAbstract = false }: ArticleCardProps) {
  const abstractText = showFullAbstract 
    ? article.abstract 
    : article.abstract.length > 200 
      ? article.abstract.substring(0, 200) + "..." 
      : article.abstract;

  return (
    <Card className="border-border hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif leading-tight text-foreground">
          {article.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-medium">Authors:</span> {article.authors}
        </p>
        {article.pages && (
          <p className="text-xs text-muted-foreground">
            Pages: {article.pages}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Abstract</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {abstractText}
          </p>
        </div>
        <Button asChild variant="outline" size="sm" className="gap-2">
          <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
            <FileDown className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
