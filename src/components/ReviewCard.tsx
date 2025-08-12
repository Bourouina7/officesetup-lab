import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { ExternalLink } from "lucide-react";

interface ReviewCardProps {
  id: string;
  title: string;
  excerpt: string;
  rating: number;
  image: string;
  category: string;
  price?: string;
  affiliateLink?: string;
}

const ReviewCard = ({ 
  id, 
  title, 
  excerpt, 
  rating, 
  image, 
  category, 
  price,
  affiliateLink 
}: ReviewCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
            {category}
          </span>
          {price && (
            <span className="text-sm font-bold text-text-heading">
              {price}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-text-heading line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <StarRating rating={rating} size="sm" />
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-text-light text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link to={`/review/${id}`}>
              Read Review
            </Link>
          </Button>
          {affiliateLink && (
            <Button asChild variant="affiliate" size="sm" className="flex-1">
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Buy Now
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;