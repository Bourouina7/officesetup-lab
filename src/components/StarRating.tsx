import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const StarRating = ({ rating, maxRating = 5, size = "md", showValue = true }: StarRatingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => {
          const starNumber = index + 1;
          const isFilled = starNumber <= rating;
          const isPartial = starNumber > rating && starNumber - 1 < rating;
          
          return (
            <Star
              key={index}
              className={`${sizeClasses[size]} ${
                isFilled
                  ? "fill-star-filled text-star-filled"
                  : isPartial
                  ? "fill-star-filled/50 text-star-filled"
                  : "fill-star-empty text-star-empty"
              }`}
            />
          );
        })}
      </div>
      {showValue && (
        <span className={`${textSizeClasses[size]} font-medium text-text-body`}>
          {rating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating;