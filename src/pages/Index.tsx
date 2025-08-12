import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-office-setup.jpg";
import chairImage from "@/assets/office-chair-review.jpg";
import deskImage from "@/assets/standing-desk-review.jpg";
import monitorImage from "@/assets/monitor-review.jpg";

const Index = () => {
  const featuredReviews = [
    {
      id: "ergonomic-office-chair-2024",
      title: "Herman Miller Aeron Chair - The Ultimate Ergonomic Experience",
      excerpt: "After 6 months of daily use, here's our comprehensive review of the iconic Aeron chair. Is it worth the premium price tag?",
      rating: 4.8,
      image: chairImage,
      category: "Office Chairs",
      price: "$1,395",
      affiliateLink: "#"
    },
    {
      id: "standing-desk-uplift",
      title: "Uplift V2 Standing Desk - Height Adjustable Perfection",
      excerpt: "A detailed look at the popular Uplift V2 standing desk. Smooth operation, solid build quality, and excellent value for money.",
      rating: 4.6,
      image: deskImage,
      category: "Standing Desks",
      price: "$699",
      affiliateLink: "#"
    },
    {
      id: "lg-27-monitor-review",
      title: "LG 27\" 4K Monitor - Professional Display Excellence",
      excerpt: "Perfect for design work and productivity. Stunning color accuracy and sharp details make this monitor a standout choice.",
      rating: 4.7,
      image: monitorImage,
      category: "Monitors",
      price: "$399",
      affiliateLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-heading mb-6 leading-tight">
                Perfect Your
                <span className="text-primary block">Office Setup</span>
              </h1>
              <p className="text-xl text-text-light mb-8 leading-relaxed">
                Discover the best office chairs, standing desks, monitors, and productivity tools. 
                Our expert reviews help you create the ideal workspace for maximum comfort and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl" variant="default">
                  <Link to="/reviews">
                    Browse Reviews
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link to="/products">
                    Best Products
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern office setup with desk, chair, and monitors"
                className="rounded-2xl shadow-[var(--shadow-card-hover)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Why Trust OfficeSetups Lab?
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We thoroughly test every product in real-world conditions to give you honest, detailed reviews.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-On Testing",
                description: "Every product is used for weeks or months in actual office environments."
              },
              {
                title: "Unbiased Reviews",
                description: "We maintain editorial independence and provide honest assessments."
              },
              {
                title: "Expert Analysis",
                description: "Our team includes ergonomics specialists and productivity experts."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-text-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Latest Reviews
            </h2>
            <p className="text-xl text-text-light">
              Our most recent in-depth product evaluations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/reviews">
                View All Reviews
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
