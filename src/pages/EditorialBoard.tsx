import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { editorialBoard } from "@/data/journal-data";
import { User } from "lucide-react";

export default function EditorialBoard() {
  const editorInChief = editorialBoard.find(m => m.role === "Editor-in-Chief");
  const associateEditor = editorialBoard.find(m => m.role === "Associate Editor");
  const managingEditor = editorialBoard.find(m => m.role === "Managing Editor");
  const boardMembers = editorialBoard.filter(m => m.role === "Editorial Board Member");

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Editorial Board
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            The journal is managed by a team of experienced academics and professionals 
            in seed science and related fields.
          </p>

          {/* Leadership */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Editorial Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {editorInChief && (
                <Card className="border-primary/30 bg-secondary/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground">
                          {editorInChief.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {editorInChief.role}
                        </p>
                      </div>
                    </div>
                    {editorInChief.affiliation && (
                      <p className="text-sm text-muted-foreground">
                        {editorInChief.affiliation}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {associateEditor && (
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground">
                          {associateEditor.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {associateEditor.role}
                        </p>
                      </div>
                    </div>
                    {associateEditor.affiliation && (
                      <p className="text-sm text-muted-foreground">
                        {associateEditor.affiliation}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {managingEditor && (
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground">
                          {managingEditor.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {managingEditor.role}
                        </p>
                      </div>
                    </div>
                    {managingEditor.affiliation && (
                      <p className="text-sm text-muted-foreground">
                        {managingEditor.affiliation}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Board Members */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Editorial Board Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-foreground">
                          {member.name}
                        </h3>
                        {member.affiliation && (
                          <p className="text-sm text-muted-foreground">
                            {member.affiliation}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted rounded-lg p-6 max-w-2xl">
            <p className="text-sm text-muted-foreground italic">
              <strong>Note:</strong> Names and affiliations used here are for demonstration 
              purposes only and do not represent real individuals or their institutional 
              associations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
