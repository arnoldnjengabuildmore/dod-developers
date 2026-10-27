
import React, { useState, useEffect } from 'react';
import { Building, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Building className="h-8 w-8 text-construction-orange" />
          <span className={cn(
            "font-bold text-2xl transition-colors",
            scrolled ? "text-construction-navy" : "text-white"
          )}>
            Dod Developers
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium hover:text-construction-orange transition-colors",
                scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-construction-orange hover:bg-construction-orange/90 text-white">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={cn(
              "h-6 w-6",
              scrolled ? "text-gray-800" : "text-white"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6",
              scrolled ? "text-gray-800" : "text-white"
            )} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 font-medium hover:text-construction-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4">
              <Button className="w-full bg-construction-orange hover:bg-construction-orange/90 text-white">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
