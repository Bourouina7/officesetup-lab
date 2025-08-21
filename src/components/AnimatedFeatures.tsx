
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Award,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Rocket,
  HeartHandshake
} from 'lucide-react';

const AnimatedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [inView, setInView] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Award,
      title: 'Expert Reviews',
      description: 'Professional testing by industry experts with years of experience',
      color: 'from-blue-500 to-blue-600',
      stats: '500+ Products Tested',
      details: 'Our team of ergonomics specialists and productivity experts conduct rigorous testing protocols to ensure comprehensive evaluations.'
    },
    {
      icon: ShieldCheck,
      title: 'Unbiased Analysis',
      description: 'Independent evaluations without manufacturer influence',
      color: 'from-green-500 to-green-600',
      stats: '100% Independent',
      details: 'We maintain complete editorial independence and never accept payment for positive reviews or rankings.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Comprehensive metrics and real-world performance data',
      color: 'from-purple-500 to-purple-600',
      stats: '50+ Test Metrics',
      details: 'Each product undergoes standardized testing across multiple categories including comfort, durability, and functionality.'
    },
    {
      icon: Users,
      title: 'Community Feedback',
      description: 'Real user experiences and community-driven insights',
      color: 'from-orange-500 to-orange-600',
      stats: '150K+ Active Users',
      details: 'Our vibrant community shares real-world experiences and helps validate our professional assessments.'
    }
  ];

  const achievements = [
    { icon: Star, number: '4.9', label: 'Average Rating', suffix: '/5' },
    { icon: Users, number: '150K+', label: 'Monthly Readers', suffix: '' },
    { icon: Award, number: '500+', label: 'Products Reviewed', suffix: '' },
    { icon: TrendingUp, number: '95%', label: 'Accuracy Rate', suffix: '' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'UX Designer',
      company: 'Google',
      content: 'OfficeSetups Lab helped me find the perfect ergonomic setup. My productivity increased by 40%!',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Software Engineer',
      company: 'Microsoft',
      content: 'The detailed reviews saved me thousands on unnecessary purchases. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'Apple',
      content: 'Comprehensive and unbiased reviews. The best resource for office equipment decisions.',
      rating: 5,
      avatar: '👩‍🏫'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setInView(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = '' }: { end: string; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!hasAnimated && inView.has(0)) {
        setHasAnimated(true);
        const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''));
        let start = 0;
        const increment = numericEnd / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericEnd) {
            setCount(numericEnd);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, [end, duration, hasAnimated, inView]);

    const formatCount = (num: number) => {
      if (end.includes('K')) return `${(num / 1000).toFixed(1)}K`;
      if (end.includes('%')) return `${num}%`;
      return num.toString();
    };

    return <span>{formatCount(count)}{suffix}</span>;
  };

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16" data-index="0">
          <Badge className="mb-6 bg-primary/10 text-primary border-0 px-6 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            Why Choose OfficeSetups Lab
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6">
            Trusted by Professionals
            <span className="block text-primary">Worldwide</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Join thousands of professionals who trust our expert reviews and comprehensive testing methodologies
          </p>
        </div>

        {/* Stats Counter */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
            inView.has(0) ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
          data-index="0"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-text-heading mb-2 group-hover:text-primary transition-colors">
                  <Counter end={achievement.number} suffix={achievement.suffix} />
                </div>
                <div className="text-text-light font-medium">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Tabs */}
        <div data-index="1" className={`mb-20 transition-all duration-1000 delay-300 ${
          inView.has(1) ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <Tabs value={activeFeature.toString()} onValueChange={(value) => setActiveFeature(parseInt(value))}>
            <TabsList className="grid grid-cols-4 w-full mb-12 h-auto p-1 bg-muted/50">
              {features.map((feature, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="flex flex-col items-center p-6 text-center data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-sm">{feature.title}</div>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-0">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                            <feature.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-text-heading">{feature.title}</h3>
                            <Badge className="mt-2 bg-primary/10 text-primary border-0">
                              {feature.stats}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-lg text-text-light mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <p className="text-text-body mb-8">
                          {feature.details}
                        </p>
                        <Button className="group">
                          Learn More
                          <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                        </Button>
                      </div>
                      <div className={`bg-gradient-to-br ${feature.color} p-8 lg:p-12 flex items-center justify-center`}>
                        <div className="text-center text-white">
                          <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <feature.icon className="w-16 h-16" />
                          </div>
                          <div className="text-6xl font-bold mb-2">{feature.stats}</div>
                          <div className="text-xl opacity-90">Industry Leading</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Testimonials Carousel */}
        <div data-index="2" className={`transition-all duration-1000 delay-600 ${
          inView.has(2) ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-success/10 text-success border-0 px-6 py-2">
              <HeartHandshake className="w-4 h-4 mr-2" />
              What Our Users Say
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-2xl">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-text-heading">{testimonial.name}</div>
                          <div className="text-sm text-text-light">{testimonial.role}</div>
                          <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-body italic leading-relaxed">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFeatures;
