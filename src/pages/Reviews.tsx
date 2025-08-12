import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import chairImage from "@/assets/office-chair-review.jpg";
import deskImage from "@/assets/standing-desk-review.jpg";
import monitorImage from "@/assets/monitor-review.jpg";

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allReviews = [
    {
      id: "ergonomic-office-chair-2024",
      title: "Herman Miller Aeron Chair - The Ultimate Ergonomic Experience",
      excerpt: "After 6 months of daily use, here's our comprehensive review of the iconic Aeron chair. Is it worth the premium price tag? We tested comfort, durability, and overall value.",
      rating: 4.8,
      image: chairImage,
      category: "Office Chairs",
      price: "$1,395",
      affiliateLink: "#"
    },
    {
      id: "standing-desk-uplift",
      title: "Uplift V2 Standing Desk - Height Adjustable Perfection",
      excerpt: "A detailed look at the popular Uplift V2 standing desk. Smooth operation, solid build quality, and excellent value for money make this a top choice.",
      rating: 4.6,
      image: deskImage,
      category: "Standing Desks",
      price: "$699",
      affiliateLink: "#"
    },
    {
      id: "lg-27-monitor-review",
      title: "LG 27\" 4K Monitor - Professional Display Excellence",
      excerpt: "Perfect for design work and productivity. Stunning color accuracy and sharp details make this monitor a standout choice for professionals.",
      rating: 4.7,
      image: monitorImage,
      category: "Monitors",
      price: "$399",
      affiliateLink: "#"
    },
    {
      id: "steelcase-leap-chair",
      title: "Steelcase Leap V2 - Ergonomic Excellence at a Premium",
      excerpt: "The Steelcase Leap V2 offers exceptional ergonomic support with highly adjustable features. Perfect for long work sessions.",
      rating: 4.5,
      image: chairImage,
      category: "Office Chairs",
      price: "$996",
      affiliateLink: "#"
    },
    {
      id: "jarvis-bamboo-desk",
      title: "Jarvis Bamboo Standing Desk - Sustainable and Stylish",
      excerpt: "Combining eco-friendly materials with excellent functionality, the Jarvis Bamboo desk is perfect for environmentally conscious professionals.",
      rating: 4.4,
      image: deskImage,
      category: "Standing Desks",
      price: "$449",
      affiliateLink: "#"
    },
    {
      id: "dell-ultrasharp-monitor",
      title: "Dell UltraSharp 32\" 4K Monitor - Creative Professional's Dream",
      excerpt: "Exceptional color accuracy and large screen real estate make this Dell monitor ideal for graphic designers and video editors.",
      rating: 4.6,
      image: monitorImage,
      category: "Monitors",
      price: "$649",
      affiliateLink: "#"
    }
  ];

  const categories = ["All", "Office Chairs", "Standing Desks", "Monitors", "Accessories"];

  const filteredReviews = allReviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || review.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              Product Reviews
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
              In-depth reviews of office furniture, equipment, and productivity tools. 
              All products are thoroughly tested in real work environments.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                  <Input
                    placeholder="Search reviews..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-text-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                No reviews found
              </h3>
              <p className="text-text-light">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;