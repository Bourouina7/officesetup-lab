import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";
import { ExternalLink, Award, TrendingUp } from "lucide-react";
import chairImage from "@/assets/office-chair-review.jpg";
import deskImage from "@/assets/standing-desk-review.jpg";
import monitorImage from "@/assets/monitor-review.jpg";

const Products = () => {
  const bestProducts = [
    {
      id: "chair-1",
      title: "Herman Miller Aeron Chair",
      description: "The gold standard in ergonomic office seating. Exceptional comfort and durability.",
      rating: 4.8,
      price: "$1,395",
      image: chairImage,
      category: "Office Chairs",
      badge: "Editor's Choice",
      affiliateLink: "#",
      pros: ["Outstanding ergonomics", "12-year warranty", "Highly adjustable"],
      cons: ["Premium price", "Firm seating"]
    },
    {
      id: "desk-1",
      title: "Uplift V2 Standing Desk",
      description: "Smooth height adjustment and solid construction make this our top standing desk pick.",
      rating: 4.6,
      price: "$699",
      image: deskImage,
      category: "Standing Desks",
      badge: "Best Value",
      affiliateLink: "#",
      pros: ["Quiet motor", "Stable at all heights", "Great customer service"],
      cons: ["Assembly required", "Cable management could be better"]
    },
    {
      id: "monitor-1",
      title: "LG 27\" 4K Monitor",
      description: "Perfect color accuracy and crisp details for professional work and entertainment.",
      rating: 4.7,
      price: "$399",
      image: monitorImage,
      category: "Monitors",
      badge: "Best Display",
      affiliateLink: "#",
      pros: ["Excellent color accuracy", "USB-C connectivity", "Great value"],
      cons: ["Basic stand", "No HDR support"]
    }
  ];

  const categories = [
    {
      name: "Office Chairs",
      description: "Ergonomic seating solutions for all-day comfort",
      count: "15+ Products"
    },
    {
      name: "Standing Desks",
      description: "Height-adjustable desks for better health",
      count: "12+ Products"
    },
    {
      name: "Monitors",
      description: "Professional displays for productivity",
      count: "20+ Products"
    },
    {
      name: "Accessories",
      description: "Keyboard, mice, and productivity tools",
      count: "25+ Products"
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
              Best Office Products
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our top-rated office equipment and furniture recommendations. 
              Every product has been thoroughly tested and reviewed by our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Best Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Top Picks 2024
            </h2>
            <p className="text-xl text-text-light">
              Our highest-rated products across all categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bestProducts.map((product) => (
              <Card key={product.id} className="relative overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {product.badge}
                  </span>
                </div>
                
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">
                      {product.category}
                    </span>
                    <span className="text-lg font-bold text-text-heading">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-2">
                    {product.title}
                  </h3>
                  <StarRating rating={product.rating} size="sm" />
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-light mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-text-heading mb-2 text-sm">Pros:</h4>
                      <ul className="text-sm text-text-light space-y-1">
                        {product.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-1">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-heading mb-2 text-sm">Cons:</h4>
                      <ul className="text-sm text-text-light space-y-1">
                        {product.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-1">–</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button asChild variant="affiliate" size="lg" className="w-full">
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Buy Now - {product.price}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-text-light">
              Find the perfect products for your office setup
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="text-center hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light text-sm mb-2">
                    {category.description}
                  </p>
                  <p className="text-primary font-medium text-sm">
                    {category.count}
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

export default Products;