
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Settings, 
  ShoppingCart,
  Star,
  TrendingUp,
  Award,
  Monitor,
  Armchair,
  Layers,
  Lightbulb,
  Package,
  Headphones,
  ChevronDown,
  Zap
} from 'lucide-react';

const AdvancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Office Chairs',
      icon: Armchair,
      href: '/products/chairs',
      description: 'Ergonomic seating solutions',
      featured: ['Herman Miller', 'Steelcase', 'Humanscale'],
      color: 'text-green-600'
    },
    {
      name: 'Standing Desks',
      icon: Layers,
      href: '/products/desks',
      description: 'Height-adjustable workstations',
      featured: ['Uplift', 'Flexispot', 'Jarvis'],
      color: 'text-purple-600'
    },
    {
      name: 'Monitors',
      icon: Monitor,
      href: '/products/monitors',
      description: 'Professional displays',
      featured: ['Dell', 'LG', 'Samsung'],
      color: 'text-blue-600'
    },
    {
      name: 'Lighting',
      icon: Lightbulb,
      href: '/products/lighting',
      description: 'Task and ambient lighting',
      featured: ['BenQ', 'Philips', 'Xiaomi'],
      color: 'text-yellow-600'
    },
    {
      name: 'Storage',
      icon: Package,
      href: '/products/storage',
      description: 'Organization solutions',
      featured: ['IKEA', 'Steelcase', 'Herman Miller'],
      color: 'text-indigo-600'
    },
    {
      name: 'Accessories',
      icon: Headphones,
      href: '/products/accessories',
      description: 'Essential office gear',
      featured: ['Sony', 'Logitech', 'Apple'],
      color: 'text-pink-600'
    }
  ];

  const quickLinks = [
    { name: 'Latest Reviews', href: '/reviews/latest', icon: Star },
    { name: 'Best Sellers', href: '/products/bestsellers', icon: TrendingUp },
    { name: 'Editor\'s Choice', href: '/products/editors-choice', icon: Award },
    { name: 'Buying Guides', href: '/guides', icon: Zap }
  ];

  const searchItems = [
    'Herman Miller Aeron Chair',
    'Uplift Standing Desk',
    'LG 4K Monitor',
    'BenQ Monitor Light',
    'Steelcase Series 1',
    'Jarvis Bamboo Desk'
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-xl border-b' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors">
                OfficeSetups Lab
              </div>
              <div className="text-xs text-text-light -mt-1">Professional Reviews</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Products Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Categories */}
                        <div className="col-span-2">
                          <h3 className="text-lg font-semibold mb-4 text-text-heading">Categories</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {categories.map((category) => (
                              <NavigationMenuLink key={category.name} asChild>
                                <Link
                                  to={category.href}
                                  className="group p-4 rounded-lg hover:bg-accent transition-colors"
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className={`p-2 rounded-lg bg-accent group-hover:bg-primary group-hover:text-white transition-colors ${category.color}`}>
                                      <category.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-text-heading group-hover:text-primary">
                                        {category.name}
                                      </div>
                                      <div className="text-sm text-text-light">
                                        {category.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>

                        {/* Featured */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-text-heading">Featured</h3>
                          <div className="space-y-3">
                            {quickLinks.map((link) => (
                              <NavigationMenuLink key={link.name} asChild>
                                <Link
                                  to={link.href}
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent group transition-colors"
                                >
                                  <link.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                                  <span className="text-sm font-medium group-hover:text-primary">
                                    {link.name}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          
                          {/* CTA */}
                          <div className="mt-6 p-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg">
                            <div className="text-sm font-semibold text-text-heading mb-2">
                              New Reviews Weekly
                            </div>
                            <div className="text-xs text-text-light mb-3">
                              Stay updated with our latest product reviews
                            </div>
                            <Button size="sm" className="w-full">
                              Subscribe Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular nav items */}
                {[
                  { name: 'Reviews', href: '/reviews' },
                  { name: 'Guides', href: '/guides' },
                  { name: 'About', href: '/about' }
                ].map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                          location.pathname === item.href
                            ? 'text-primary bg-primary/10'
                            : 'text-text-body hover:bg-accent/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Popover open={searchOpen} onOpenChange={setSearchOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-accent/50 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <Command>
                  <CommandInput placeholder="Search products..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Popular Searches">
                      {searchItems.map((item) => (
                        <CommandItem key={item}>
                          <Search className="mr-2 h-4 w-4" />
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-accent/50 transition-colors"
            >
              <Bell className="h-4 w-4" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 animate-pulse">
                  {notificationCount}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/50 transition-colors"
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <category.icon className={`h-5 w-5 ${category.color}`} />
                          <span className="font-medium">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <link.icon className="h-5 w-5 text-primary" />
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdvancedNavigation;
