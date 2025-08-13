import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import StatsSection from "@/components/StatsSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { ArrowRight, CheckCircle, Award, Users, Star, TrendingUp, Monitor, Armchair, Lightbulb, Package, Layers, Headphones } from "lucide-react";
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

  const productCategories = [
    {
      name: "Office Chairs",
      description: "Ergonomic chairs designed for comfort and productivity during long work sessions.",
      productCount: 45,
      image: chairImage,
      icon: Armchair,
      color: "hsl(142, 76%, 36%)",
      slug: "office-chairs",
      featured: true
    },
    {
      name: "Standing Desks",
      description: "Height-adjustable desks to promote healthy posture and reduce sitting time.",
      productCount: 32,
      image: deskImage,
      icon: Layers,
      color: "hsl(262, 83%, 58%)",
      slug: "standing-desks"
    },
    {
      name: "Monitors",
      description: "High-quality displays for professional work, gaming, and creative tasks.",
      productCount: 68,
      image: monitorImage,
      icon: Monitor,
      color: "hsl(38, 92%, 50%)",
      slug: "monitors",
      featured: true
    },
    {
      name: "Lighting",
      description: "Task lighting and ambient solutions to reduce eye strain and improve focus.",
      productCount: 28,
      image: heroImage,
      icon: Lightbulb,
      color: "hsl(45, 100%, 51%)",
      slug: "lighting"
    },
    {
      name: "Storage & Organization",
      description: "Filing cabinets, desk organizers, and storage solutions for a clean workspace.",
      productCount: 41,
      image: heroImage,
      icon: Package,
      color: "hsl(221, 83%, 53%)",
      slug: "storage"
    },
    {
      name: "Audio & Accessories",
      description: "Headphones, speakers, webcams, and other essential office accessories.",
      productCount: 59,
      image: heroImage,
      icon: Headphones,
      color: "hsl(340, 82%, 52%)",
      slug: "accessories"
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-accent/10 to-primary/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-star-filled fill-current" />
                  <Star className="w-5 h-5 text-star-filled fill-current" />
                  <Star className="w-5 h-5 text-star-filled fill-current" />
                  <Star className="w-5 h-5 text-star-filled fill-current" />
                  <Star className="w-5 h-5 text-star-filled fill-current" />
                </div>
                <span className="text-sm font-medium text-text-light">
                  Trusted by 150K+ professionals
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-text-heading mb-6 leading-tight">
                Perfect Your
                <span className="text-primary block">Office Setup</span>
              </h1>
              
              <p className="text-xl text-text-light mb-8 leading-relaxed">
                Discover professionally tested office furniture, accessories, and productivity tools. 
                Our comprehensive reviews help you create the ideal workspace for maximum comfort, 
                health, and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="xl" variant="default" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/reviews">
                    Browse Reviews
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-2">
                  <Link to="/products">
                    <Award className="mr-2 w-5 h-5" />
                    Best Products
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-text-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  500+ Products Tested
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Expert Analysis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Unbiased Reviews
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modern professional office setup with ergonomic chair, standing desk, and dual monitors"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-heading">Latest Review</div>
                    <div className="text-xs text-text-light">Herman Miller Aeron</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={siteStats} />

      {/* Product Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Explore our comprehensive collection of office products, each category expertly curated and thoroughly tested.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <ProductCategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

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
                description: "Every product is used for weeks or months in actual office environments by our team.",
                icon: CheckCircle
              },
              {
                title: "Unbiased Reviews",
                description: "We maintain editorial independence and provide honest assessments without bias.",
                icon: Award
              },
              {
                title: "Expert Analysis",
                description: "Our team includes ergonomics specialists, designers, and productivity experts.",
                icon: Users
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-text-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
