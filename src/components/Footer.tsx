import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-lg">
                OS
              </div>
              <span className="text-xl font-bold text-text-heading">
                OfficeSetups Lab
              </span>
            </div>
            <p className="text-text-light max-w-md">
              Your trusted source for office setup reviews, productivity tools, and workspace optimization guides. 
              We help you create the perfect work environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reviews" className="text-text-light hover:text-primary transition-colors">
                  Latest Reviews
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-text-light hover:text-primary transition-colors">
                  Best Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-text-heading mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="text-text-light">Office Chairs</li>
              <li className="text-text-light">Standing Desks</li>
              <li className="text-text-light">Monitors</li>
              <li className="text-text-light">Accessories</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-text-light text-sm">
            © 2024 OfficeSetups Lab. All rights reserved. | 
            <span className="ml-1">
              Affiliate links may earn us a commission at no cost to you.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;