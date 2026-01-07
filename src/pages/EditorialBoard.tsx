import { Layout } from "@/components/layout/Layout";
import { editorialBoard } from "@/data/journal-data";
import { Separator } from "@/components/ui/separator";

export default function EditorialBoard() {
  const editorInChief = editorialBoard.find(m => m.role === "Editor-in-Chief");
  const associateEditor = editorialBoard.find(m => m.role === "Associate Editor");
  const managingEditor = editorialBoard.find(m => m.role === "Managing Editor");
  const boardMembers = editorialBoard.filter(m => m.role === "Editorial Board Member");

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Editorial Board
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-base text-foreground leading-relaxed mb-8">
              The journal is managed by a team of experienced academics and professionals 
              in seed science and related fields. The editorial board is responsible for 
              maintaining the quality and integrity of published research.
            </p>

            {/* Editor-in-Chief */}
            {editorInChief && (
              <div className="mb-8">
                <h2 className="text-lg font-serif font-bold text-primary mb-4">
                  Editor-in-Chief
                </h2>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="font-semibold text-foreground">{editorInChief.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{editorInChief.affiliation}</p>
                </div>
              </div>
            )}

            {/* Associate Editor */}
            {associateEditor && (
              <div className="mb-8">
                <h2 className="text-lg font-serif font-bold text-primary mb-4">
                  Associate Editor
                </h2>
                <div className="pl-4 border-l-2 border-border">
                  <p className="font-semibold text-foreground">{associateEditor.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{associateEditor.affiliation}</p>
                </div>
              </div>
            )}

            {/* Managing Editor */}
            {managingEditor && (
              <div className="mb-8">
                <h2 className="text-lg font-serif font-bold text-primary mb-4">
                  Managing Editor
                </h2>
                <div className="pl-4 border-l-2 border-border">
                  <p className="font-semibold text-foreground">{managingEditor.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{managingEditor.affiliation}</p>
                </div>
              </div>
            )}

            <Separator className="my-8" />

            {/* Editorial Board Members */}
            <div className="mb-8">
              <h2 className="text-lg font-serif font-bold text-primary mb-6">
                Editorial Board Members
              </h2>
              <ul className="space-y-4">
                {boardMembers.map((member, index) => (
                  <li key={index} className="pl-4 border-l border-border">
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{member.affiliation}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground italic">
                <strong>Note:</strong> Names and affiliations used here are for demonstration 
                purposes only and do not represent real individuals or their institutional 
                associations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
