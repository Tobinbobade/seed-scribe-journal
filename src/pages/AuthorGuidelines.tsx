import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

export default function AuthorGuidelines() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Author Guidelines
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Introduction */}
            <p className="text-base text-foreground leading-relaxed mb-8">
              Authors are invited to submit original research articles and review papers 
              in seed science and related disciplines. Please carefully follow the guidelines 
              below to ensure smooth processing of your manuscript.
            </p>

            {/* Manuscript Preparation */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Manuscript Preparation
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                Manuscripts should be prepared according to the following format:
              </p>
              <ul className="list-disc list-outside text-base text-foreground space-y-2 ml-6">
                <li>Manuscripts should be written in clear, concise English</li>
                <li>Use standard scientific structure:
                  <ul className="list-disc list-outside ml-6 mt-2 space-y-1">
                    <li>Title and Author Information</li>
                    <li>Abstract (250-300 words)</li>
                    <li>Keywords (4-6 words)</li>
                    <li>Introduction</li>
                    <li>Materials and Methods</li>
                    <li>Results</li>
                    <li>Discussion</li>
                    <li>Conclusions</li>
                    <li>Acknowledgements (if applicable)</li>
                    <li>References</li>
                  </ul>
                </li>
                <li>Submissions should be in Microsoft Word (.doc, .docx) or PDF format</li>
                <li>Use 12-point Times New Roman font with double line spacing</li>
                <li>Figures and tables should be embedded in the manuscript with appropriate captions</li>
                <li>All pages should be numbered consecutively</li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Submission Process */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Submission Process
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                Manuscripts should be submitted electronically via email to the editorial office:
              </p>
              <p className="bg-muted rounded px-4 py-3 mb-4">
                <a href="mailto:journal@assnigeria.org" className="text-primary font-medium hover:underline">
                  journal@assnigeria.org
                </a>
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Authors should include a cover letter stating that the manuscript has not been 
                published previously and is not under consideration elsewhere. The cover letter 
                should also include the corresponding author's contact information.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Peer Review Process */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Peer Review Process
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                All submitted manuscripts are subject to editorial screening and peer review:
              </p>
              <ol className="list-decimal list-outside text-base text-foreground space-y-3 ml-6">
                <li>
                  <strong>Initial Screening:</strong> Manuscripts are first reviewed by the 
                  editorial office for scope and compliance with author guidelines.
                </li>
                <li>
                  <strong>Peer Review:</strong> Manuscripts passing initial screening are sent 
                  to at least two independent reviewers with expertise in the relevant field.
                </li>
                <li>
                  <strong>Editorial Decision:</strong> Based on reviewer recommendations, the 
                  Editor-in-Chief makes a final decision on acceptance, revision, or rejection.
                </li>
                <li>
                  <strong>Revision:</strong> Authors may be asked to revise their manuscript 
                  based on reviewer comments. Revised manuscripts should be resubmitted within 
                  the specified timeframe.
                </li>
              </ol>
              <p className="text-base text-foreground leading-relaxed mt-4">
                The typical review process takes 4-8 weeks from submission to first decision.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Publication Ethics */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Publication Ethics
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                Authors must adhere to the highest standards of publication ethics:
              </p>
              <ul className="list-disc list-outside text-base text-foreground space-y-2 ml-6">
                <li>All submissions must be original work and not published elsewhere</li>
                <li>Proper acknowledgement and citation of all sources is required</li>
                <li>Plagiarism in any form is unacceptable and will result in rejection</li>
                <li>All authors listed must have made significant contributions to the work</li>
                <li>Any potential conflicts of interest must be disclosed</li>
                <li>Research involving human subjects or animals must have appropriate ethical approval</li>
                <li>Data fabrication or falsification will result in immediate rejection and may be reported</li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Reference Style */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Reference Style
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                References should be formatted according to the APA (American Psychological Association) 
                style. In-text citations should use the author-date format.
              </p>
              <div className="bg-muted rounded px-4 py-3">
                <p className="text-sm font-medium text-foreground mb-2">Example:</p>
                <p className="text-sm text-muted-foreground italic">
                  Adewale, A. B., & Okafor, C. D. (2024). Seed viability and storage conditions 
                  of maize in Southwestern Nigeria. ASSN Journal of Seed Science and Technology, 
                  1(1), 1-12.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10 pt-6 border-t border-border">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Questions?
              </h3>
              <p className="text-sm text-muted-foreground">
                For any questions regarding manuscript submission or the review process, 
                please contact the editorial office at{" "}
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
