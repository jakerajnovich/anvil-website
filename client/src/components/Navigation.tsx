/*
 * Design: Industrial Brutalism - Navigation
 * - Minimal, clean header with Anduril-style logo
 * - Simple white logo on dark background
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navigateTo = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#/" className="flex items-center group">
            <img 
              src={`${import.meta.env.BASE_URL}images/anvil-logo-white.png`} 
              alt="Anvil Propulsion" 
              className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider"
            >
              Products
            </button>
            <button 
              onClick={() => navigateTo('/catalog')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider"
            >
              Catalog
            </button>
            <button 
              onClick={() => navigateTo('/specifications')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider"
            >
              Specs
            </button>
            <button 
              onClick={() => scrollToSection('manufacturing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider"
            >
              Manufacturing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider"
            >
              Contact
            </button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-[var(--font-mono)] uppercase tracking-wider"
              >
                Products
              </button>
              <button 
                onClick={() => navigateTo('/catalog')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-[var(--font-mono)] uppercase tracking-wider"
              >
                Catalog
              </button>
              <button 
                onClick={() => navigateTo('/specifications')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-[var(--font-mono)] uppercase tracking-wider"
              >
                Specs
              </button>
              <button 
                onClick={() => scrollToSection('manufacturing')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-[var(--font-mono)] uppercase tracking-wider"
              >
                Manufacturing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-[var(--font-mono)] uppercase tracking-wider"
              >
                Contact
              </button>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm w-full font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
