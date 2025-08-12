import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import { ExternalLink, Calendar, User } from "lucide-react";
import chairImage from "@/assets/office-chair-review.jpg";
import deskImage from "@/assets/standing-desk-review.jpg";
import monitorImage from "@/assets/monitor-review.jpg";

const ReviewDetail = () => {
  const { id } = useParams();

  // Mock review data - in a real app, this would come from an API
  const reviewData: { [key: string]: any } = {
    "ergonomic-office-chair-2024": {
      title: "Herman Miller Aeron Chair - The Ultimate Ergonomic Experience",
      rating: 4.8,
      image: chairImage,
      category: "Office Chairs",
      price: "$1,395",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      affiliateLink: "#",
      summary: "After 6 months of daily use, the Herman Miller Aeron proves why it's considered the gold standard in ergonomic office seating.",
      pros: [
        "Outstanding lumbar support that adapts to your posture",
        "Breathable mesh material prevents overheating",
        "Highly adjustable with intuitive controls",
        "12-year warranty shows manufacturer confidence",
        "Maintains comfort during 8+ hour work sessions"
      ],
      cons: [
        "Premium price point may not fit all budgets",
        "Firm seating may feel uncomfortable initially",
        "Assembly can be complex without professional help",
        "Limited color options in standard model"
      ],
      verdict: "The Herman Miller Aeron is an investment in your long-term comfort and health. While the price is steep, the build quality, ergonomic design, and warranty make it worthwhile for anyone spending significant time at a desk.",
      specs: [
        { label: "Weight Capacity", value: "350 lbs" },
        { label: "Seat Height Range", value: "16.75\" - 20.5\"" },
        { label: "Materials", value: "Pellicle mesh, aluminum frame" },
        { label: "Warranty", value: "12 years" },
        { label: "Assembly Time", value: "45-60 minutes" }
      ]
    },
    "standing-desk-uplift": {
      title: "Uplift V2 Standing Desk - Height Adjustable Perfection",
      rating: 4.6,
      image: deskImage,
      category: "Standing Desks",
      price: "$699",
      author: "Mike Chen",
      date: "March 10, 2024",
      affiliateLink: "#",
      summary: "The Uplift V2 combines smooth operation, solid construction, and excellent value to create one of the best standing desks available.",
      pros: [
        "Exceptionally quiet dual-motor system",
        "Rock-solid stability at all heights",
        "Easy-to-use height memory presets",
        "Excellent customer service and support",
        "Wide range of customization options"
      ],
      cons: [
        "Assembly requires 2 people and takes time",
        "Cable management could be more elegant",
        "Laminate desktop options feel basic",
        "No built-in wireless charging"
      ],
      verdict: "The Uplift V2 strikes an excellent balance between features, quality, and price. It's our top recommendation for anyone looking to add a standing desk to their office.",
      specs: [
        { label: "Height Range", value: "25.3\" - 50.9\"" },
        { label: "Weight Capacity", value: "355 lbs" },
        { label: "Desktop Options", value: "Multiple sizes and materials" },
        { label: "Warranty", value: "15 years frame, 5 years electrical" },
        { label: "Speed", value: "1.5\" per second" }
      ]
    },
    "lg-27-monitor-review": {
      title: "LG 27\" 4K Monitor - Professional Display Excellence",
      rating: 4.7,
      image: monitorImage,
      category: "Monitors",
      price: "$399",
      author: "Dr. Amanda Rodriguez",
      date: "March 5, 2024",
      affiliateLink: "#",
      summary: "This LG 4K monitor delivers exceptional image quality and professional features at a competitive price point.",
      pros: [
        "Stunning 4K resolution with sharp details",
        "Excellent color accuracy out of the box",
        "USB-C connectivity with power delivery",
        "Ergonomic stand with full adjustability",
        "Great value for professional features"
      ],
      cons: [
        "Basic included stand design",
        "No HDR support in this model",
        "Limited gaming features",
        "Speakers are adequate but not impressive"
      ],
      verdict: "For professionals needing accurate colors and sharp text, this LG monitor is hard to beat at this price point. It's an excellent choice for design work and productivity.",
      specs: [
        { label: "Screen Size", value: "27 inches" },
        { label: "Resolution", value: "3840 x 2160 (4K)" },
        { label: "Panel Type", value: "IPS" },
        { label: "Refresh Rate", value: "60Hz" },
        { label: "Connectivity", value: "USB-C, HDMI, DisplayPort" }
      ]
    }
  };

  const review = reviewData[id || ""] || reviewData["ergonomic-office-chair-2024"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-primary font-medium">{review.category}</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-text-heading mb-4 mt-2">
              {review.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-text-light">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {review.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{review.date}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <StarRating rating={review.rating} size="lg" />
          </div>
        </div>
      </section>

      {/* Review Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-4">
                  Review Summary
                </h2>
                <p className="text-lg text-text-body leading-relaxed">
                  {review.summary}
                </p>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-[var(--shadow-card)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-text-heading mb-4 flex items-center">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-2">✓</span>
                      Pros
                    </h3>
                    <ul className="space-y-3">
                      {review.pros.map((pro: string, index: number) => (
                        <li key={index} className="flex items-start text-text-body">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-[var(--shadow-card)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-text-heading mb-4 flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm mr-2">–</span>
                      Cons
                    </h3>
                    <ul className="space-y-3">
                      {review.cons.map((con: string, index: number) => (
                        <li key={index} className="flex items-start text-text-body">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Verdict */}
              <div className="bg-accent/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-heading mb-4">
                  Final Verdict
                </h2>
                <p className="text-lg text-text-body leading-relaxed">
                  {review.verdict}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Purchase Card */}
              <Card className="shadow-[var(--shadow-card)] sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-text-heading mb-2">
                      {review.price}
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                  
                  <Button asChild variant="affiliate" size="lg" className="w-full mb-4">
                    <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Buy Now
                    </a>
                  </Button>
                  
                  <p className="text-xs text-text-light text-center">
                    * This is an affiliate link. We may earn a commission at no cost to you.
                  </p>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-text-heading mb-4">
                    Specifications
                  </h3>
                  <div className="space-y-3">
                    {review.specs.map((spec: any, index: number) => (
                      <div key={index} className="flex justify-between items-start">
                        <span className="text-text-light text-sm font-medium">
                          {spec.label}:
                        </span>
                        <span className="text-text-body text-sm text-right ml-2">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewDetail;