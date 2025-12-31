/*
 * Design: Industrial Brutalism - Navigation
 * - Minimal, clean header with Anduril-style logo
 * - Simple white logo on dark background
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src="/images/logo-final.png" 
              alt="Anvil Propulsion" 
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#compliance" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Compliance
            </a>
            <a 
              href="#manufacturing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Manufacturing
            </a>
            <a 
              href="#products" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
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
              <a 
                href="#compliance" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance
              </a>
              <a 
                href="#manufacturing" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manufacturing
              </a>
              <a 
                href="#products" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm w-full"
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
