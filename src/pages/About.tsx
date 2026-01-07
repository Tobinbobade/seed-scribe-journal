import { Layout } from "@/components/layout/Layout";
import { journalInfo } from "@/data/journal-data";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            About the Journal
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-base text-foreground leading-relaxed mb-4">
                The <strong>{journalInfo.title}</strong> is an official publication of the {journalInfo.publisher}.
              </p>
              <p className="text-base text-foreground leading-relaxed mb-4">
                The journal is dedicated to advancing knowledge and innovation in seed science 
                and agricultural research through the publication of original research articles, 
                review papers, and technical reports.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                The journal serves researchers, academics, policymakers, and practitioners 
                within Nigeria and internationally.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Mission */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                To provide a premier platform for the dissemination of high-quality research 
                in seed science and technology, fostering innovation and knowledge exchange 
                among the scientific community in Nigeria and across Africa.
              </p>
            </div>

            {/* Scope */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Scope
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                The journal covers a broad range of topics including but not limited to:
              </p>
              <ul className="list-disc list-outside text-base text-foreground space-y-2 ml-6">
                <li>Seed biology and physiology</li>
                <li>Seed production and processing</li>
                <li>Seed storage and preservation</li>
                <li>Seed quality assessment and testing</li>
                <li>Plant breeding and genetics</li>
                <li>Crop improvement and biotechnology</li>
                <li>Sustainable agricultural practices</li>
                <li>Seed policy and regulation</li>
                <li>Seed systems and value chains</li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Publication Frequency */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Publication Frequency
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                The journal is published periodically in volumes and issues as determined 
                by the Association. Each volume typically corresponds to a calendar year, 
                with multiple issues published throughout the year based on the volume of 
                accepted manuscripts.
              </p>
            </div>

            {/* Types of Publications */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Types of Publications
              </h2>
              <ul className="list-disc list-outside text-base text-foreground space-y-2 ml-6">
                <li><strong>Original Research Articles:</strong> Full-length papers presenting new research findings</li>
                <li><strong>Review Papers:</strong> Comprehensive reviews of specific topics in seed science</li>
                <li><strong>Short Communications:</strong> Brief reports of significant findings</li>
                <li><strong>Technical Notes:</strong> Descriptions of new methods, techniques, or equipment</li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Open Access */}
            <div>
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Open Access Policy
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                The journal is committed to promoting open access to scientific knowledge. 
                All published articles are freely available online to readers worldwide, 
                supporting the broader dissemination of research findings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
