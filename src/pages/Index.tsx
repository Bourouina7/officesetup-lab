
import React from "react";
import AdvancedNavigation from "@/components/AdvancedNavigation";
import Footer from "@/components/Footer";
import AnimatedHero from "@/components/AnimatedHero";
import StatsSection from "@/components/StatsSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import InteractiveProductGrid from "@/components/InteractiveProductGrid";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
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
      title: 'LG 27" 4K Monitor - Professional Display Excellence',
      excerpt: "Perfect for design work and productivity. Stunning color accuracy and sharp details make this monitor a standout choice.",
      rating: 4.7,
      image: monitorImage,
      category: "Monitors",
      price: "$399",
      affiliateLink: "#"
    }
  ];

  const siteStats = [
    {
      number: "500+",
      label: "Products Reviewed",
      description: "Comprehensive testing and analysis"
    },
    {
      number: "150K+",
      label: "Monthly Readers", 
      description: "Professionals trust our reviews"
    },
    {
      number: "4.9/5",
      label: "Reader Rating",
      description: "Highly rated by our community"
    },
    {
      number: "2024",
      label: "Latest Reviews",
      description: "Always up-to-date content"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdvancedNavigation />
      
      {/* Hero Section with Advanced Animations */}
      <AnimatedHero />

      {/* Stats Section */}
      <StatsSection stats={siteStats} />

      {/* Interactive Product Categories */}
      <InteractiveProductGrid />

      {/* Featured Banner */}
      <FeaturedBanner
        title="2024 Buyer's Guide"
        subtitle="Ultimate Office Setup"
        description="Everything you need to know about creating the perfect office environment. From ergonomic principles to the latest tech innovations, our comprehensive guide covers it all."
        image={heroImage}
        buttonText="Read Full Guide"
        buttonLink="/guide"
        badgeText="Editor's Choice"
        variant="primary"
      />

      {/* Animated Features Section */}
      <AnimatedFeatures />

      {/* Featured Reviews */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Editor's Choice Reviews
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Latest Expert Reviews
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Our most recent in-depth product evaluations, tested by professionals in real work environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground">
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
