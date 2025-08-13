import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award } from "lucide-react";

interface FeaturedBannerProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  badgeText?: string;
  variant?: "primary" | "secondary";
}

const FeaturedBanner = ({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  badgeText,
  variant = "primary"
}: FeaturedBannerProps) => {
  const bgGradient = variant === "primary" 
    ? "bg-gradient-to-br from-primary/10 to-accent/20" 
    : "bg-gradient-to-br from-secondary to-muted/50";

  return (
    <section className={`py-16 ${bgGradient}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {badgeText && (
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {badgeText}
                </Badge>
              </div>
            )}
            <h2 className="text-3xl lg:text-5xl font-bold text-text-heading mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-primary font-semibold mb-4">
              {subtitle}
            </p>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              {description}
            </p>
            <Button asChild size="lg" variant="default" className="shadow-lg">
              <Link to={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt={title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;