import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductCategoryCardProps {
  name: string;
  description: string;
  productCount: number;
  image: string;
  icon: LucideIcon;
  color: string;
  slug: string;
  featured?: boolean;
}

const ProductCategoryCard = ({ 
  name, 
  description, 
  productCount, 
  image, 
  icon: Icon,
  color,
  slug,
  featured = false
}: ProductCategoryCardProps) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 ${
      featured ? 'ring-2 ring-primary/20' : ''
    }`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-900">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-white/90 text-sm">{productCount} Products</p>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <p className="text-text-light text-sm line-clamp-2">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Link 
          to={`/category/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors group"
        >
          Explore Category
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCategoryCard;