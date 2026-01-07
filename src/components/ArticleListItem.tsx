import { Article } from "@/data/journal-data";

interface ArticleListItemProps {
  article: Article;
  index?: number;
  showFullAbstract?: boolean;
}

export function ArticleListItem({ article, index, showFullAbstract = false }: ArticleListItemProps) {
  const abstractText = showFullAbstract 
    ? article.abstract 
    : article.abstract.length > 250 
      ? article.abstract.substring(0, 250) + "..." 
      : article.abstract;

  return (
    <article className="py-6 border-b border-border last:border-b-0">
      {/* Article Title */}
      <h3 className="text-lg font-serif font-bold text-foreground leading-snug mb-2">
        {index !== undefined && <span className="text-muted-foreground mr-2">{index}.</span>}
        {article.title}
      </h3>
      
      {/* Authors */}
      <p className="text-sm text-muted-foreground mb-3">
        <span className="font-medium">Authors:</span> {article.authors}
        {article.pages && (
          <span className="ml-4">
            <span className="font-medium">Pages:</span> {article.pages}
          </span>
        )}
      </p>
      
      {/* Abstract */}
      <div className="mb-3">
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">Abstract: </span>
          {abstractText}
        </p>
      </div>
      
      {/* Download Link */}
      <a 
        href={article.pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-primary hover:underline font-medium"
      >
        Download PDF
      </a>
    </article>
  );
}
