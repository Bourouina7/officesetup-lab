
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Zap, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      title: "Perfect Your",
      highlight: "Office Setup",
      subtitle: "Ultimate Workspace Solutions",
      description: "Discover professionally tested office furniture and productivity tools"
    },
    {
      title: "Boost Your",
      highlight: "Productivity",
      subtitle: "Expert Reviews & Guides", 
      description: "Comprehensive analysis of the best office equipment and accessories"
    },
    {
      title: "Create Your",
      highlight: "Dream Office",
      subtitle: "Professional Grade Equipment",
      description: "Transform your workspace with our carefully curated recommendations"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/10 to-primary/5"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Animated badges */}
            <div className="flex items-center gap-4 animate-fade-in">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 animate-bounce">
                <Star className="w-4 h-4 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
                Featured Reviews
              </Badge>
              <Badge variant="secondary" className="bg-success/10 text-success border-0">
                <TrendingUp className="w-4 h-4 mr-1" />
                150K+ Readers
              </Badge>
            </div>

            {/* Animated title slider */}
            <div className="relative h-32 overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === activeSlide 
                      ? 'translate-y-0 opacity-100' 
                      : index < activeSlide 
                        ? '-translate-y-full opacity-0' 
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  <h1 className="text-5xl lg:text-7xl font-bold text-text-heading leading-tight">
                    {slide.title}
                    <span className="block text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent animate-pulse">
                      {slide.highlight}
                    </span>
                  </h1>
                </div>
              ))}
            </div>

            {/* Animated subtitle */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-xl text-primary font-semibold">
                {slides[activeSlide].subtitle}
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                {slides[activeSlide].description}
              </p>
            </div>

            {/* Animated CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                asChild 
                size="xl" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link to="/reviews">
                  <span className="relative z-10 flex items-center">
                    Browse Reviews
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="xl" 
                variant="outline" 
                className="group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/products">
                  <Award className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Best Products
                </Link>
              </Button>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              {[
                { icon: Target, number: "500+", label: "Reviews" },
                { icon: Star, number: "4.9", label: "Rating" },
                { icon: Zap, number: "2024", label: "Latest" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group text-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-text-heading group-hover:text-primary transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated image section */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative group">
              {/* Main image with hover effects */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/src/assets/hero-office-setup.jpg"
                  alt="Professional office setup"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
                
                {/* Floating elements */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center animate-pulse">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-heading">Latest Review</div>
                      <div className="text-xs text-text-light">Herman Miller Aeron</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 animate-ping" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimatedHero;
