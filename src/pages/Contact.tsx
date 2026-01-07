import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { journalInfo } from "@/data/journal-data";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We will respond shortly.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-base text-foreground leading-relaxed mb-8">
              For inquiries related to the journal, submissions, or publications, 
              please contact us using the information below or fill out the contact form.
            </p>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Contact Information
              </h2>
              <div className="space-y-3 text-base text-foreground">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a href={`mailto:${journalInfo.email}`} className="text-primary hover:underline">
                    {journalInfo.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Publisher:</span> {journalInfo.publisher}
                </p>
                <p>
                  <span className="font-medium">Address:</span> National Secretariat, Abuja, Nigeria
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Contact Form */}
            <div>
              <h2 className="text-lg font-serif font-bold text-primary mb-4">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-muted rounded p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Response Time Notice */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Response Time:</strong> We typically respond to inquiries within 
                2-3 business days. For urgent matters related to manuscript submissions, 
                please indicate this in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
