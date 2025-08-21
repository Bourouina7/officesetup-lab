
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  Award,
  ArrowUpDown,
  ChevronDown,
  Eye,
  Heart,
  ExternalLink
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Product {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  features: string[];
  isNew: boolean;
  isFeatured: boolean;
  views: number;
  likes: number;
}

const InteractiveProductGrid = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const products: Product[] = [
    {
      id: '1',
      name: 'Herman Miller Aeron Chair',
      category: 'Chairs',
      rating: 4.9,
      price: '$1,395',
      image: '/src/assets/office-chair-review.jpg',
      description: 'Revolutionary ergonomic design with advanced PostureFit SL support',
      features: ['12-year warranty', 'Breathable mesh', 'PostureFit SL'],
      isNew: false,
      isFeatured: true,
      views: 15420,
      likes: 892
    },
    {
      id: '2',
      name: 'Uplift V2 Standing Desk',
      category: 'Desks',
      rating: 4.7,
      price: '$699',
      image: '/src/assets/standing-desk-review.jpg',
      description: 'Premium height-adjustable desk with whisper-quiet motors',
      features: ['Memory presets', 'Wire management', 'Solid wood top'],
      isNew: true,
      isFeatured: true,
      views: 12350,
      likes: 654
    },
    {
      id: '3',
      name: 'LG 27" 4K Monitor',
      category: 'Monitors',
      rating: 4.8,
      price: '$399',
      image: '/src/assets/monitor-review.jpg',
      description: 'Professional-grade display with stunning color accuracy',
      features: ['4K resolution', 'HDR10', 'USB-C connectivity'],
      isNew: true,
      isFeatured: false,
      views: 8920,
      likes: 445
    }
  ];

  const categories = ['All', 'Chairs', 'Desks', 'Monitors', 'Lighting', 'Storage'];
  const sortOptions = [
    { value: 'rating', label: 'Rating' },
    { value: 'price', label: 'Price' },
    { value: 'views', label: 'Popularity' },
    { value: 'name', label: 'Name' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case 'views':
          return b.views - a.views;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleLike = (productId: string) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
        viewMode === 'grid' ? 'h-full' : 'flex-row h-48'
      }`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Product badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse">
            NEW
          </Badge>
        )}
        {product.isFeatured && (
          <Badge className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
            <Award className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}
      </div>

      {/* Like button */}
      <button
        onClick={() => toggleLike(product.id)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <Heart 
          className={`w-5 h-5 transition-colors ${
            likedProducts.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'
          }`} 
        />
      </button>

      {/* Image section */}
      <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-[4/3]' : 'w-48 h-full'}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hoveredProduct === product.id ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
          hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button size="sm" className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
            <Button size="sm" className="flex-1 bg-primary/80 hover:bg-primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit
            </Button>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-2 left-2 flex gap-4 text-white text-xs">
          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
            <Eye className="w-3 h-3" />
            {product.views.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
            <Heart className="w-3 h-3" />
            {product.likes}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className={`${viewMode === 'grid' ? 'p-6' : 'flex-1 p-6 flex flex-col justify-between'}`}>
        <div>
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <p className="text-text-light text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {product.price}
          </span>
          <Button 
            size="sm" 
            className="group-hover:scale-105 transition-transform duration-200"
          >
            View Details
            <ArrowUpDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-heading mb-4">
            Discover Amazing Products
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Explore our comprehensive collection with advanced filters and interactive features
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
            />
          </div>

          {/* Filter controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Category filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    {selectedCategory}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map(category => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? 'bg-primary/10' : ''}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sort control */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Sort by {sortOptions.find(opt => opt.value === sortBy)?.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {sortOptions.map(option => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={sortBy === option.value ? 'bg-primary/10' : ''}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* View mode toggle */}
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-background'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-background'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Showing {filteredAndSortedProducts.length} products
        </div>

        {/* Products grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        } animate-fade-in`} style={{ animationDelay: '0.6s' }}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            variant="outline"
            className="group hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Load More Products
            <ArrowUpDown className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductGrid;
