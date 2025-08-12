import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Users, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@officesetupslab.com",
      note: "For general inquiries and partnership opportunities"
    },
    {
      icon: MessageSquare,
      title: "Review Requests",
      description: "reviews@officesetupslab.com",
      note: "Submit products for potential review"
    },
    {
      icon: Users,
      title: "Media & Press",
      description: "press@officesetupslab.com",
      note: "For media inquiries and interviews"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Within 24 hours",
      note: "We aim to respond to all inquiries quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Have questions about our reviews? Want to suggest a product for testing? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl text-text-heading">
                  Send us a Message
                </CardTitle>
                <p className="text-text-light">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-text-heading mb-6">
                  Contact Information
                </h2>
                <p className="text-text-light mb-8">
                  Choose the best way to reach us based on your inquiry type.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-heading mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.description}
                        </p>
                        <p className="text-sm text-text-light">
                          {info.note}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-light">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How do you select products to review?",
                answer: "We choose products based on popularity, user demand, innovation, and recommendations from our community. We also consider products that fill gaps in the market or represent significant improvements over existing options."
              },
              {
                question: "Do you accept products from manufacturers for review?",
                answer: "Yes, we accept products from manufacturers, but this doesn't influence our reviews. All products are tested using the same rigorous standards, and we maintain complete editorial independence."
              },
              {
                question: "How long does each review take?",
                answer: "Our review process typically takes 4-8 weeks. This includes initial setup, daily use testing, durability assessment, and comparison with similar products."
              },
              {
                question: "Can I suggest a product for review?",
                answer: "Absolutely! We love hearing from our community about products they'd like to see reviewed. Send us an email with your suggestions and we'll consider them for future reviews."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-text-heading mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-text-light">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;