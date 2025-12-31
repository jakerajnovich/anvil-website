/*
 * Design: Industrial Brutalism - Navigation
 * - Minimal, functional header with technical precision
 * - Monospace font for navigation items
 * - Hard edges, no rounded corners
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
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-[var(--font-display)]">A</span>
            </div>
            <span className="text-xl font-bold font-[var(--font-display)] tracking-tight">
              ANVIL PROPULSION
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#compliance" 
              className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Compliance
            </a>
            <a 
              href="#manufacturing" 
              className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Manufacturing
            </a>
            <a 
              href="#products" 
              className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Contact
            </a>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-sm"
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
                className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance
              </a>
              <a 
                href="#manufacturing" 
                className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manufacturing
              </a>
              <a 
                href="#products" 
                className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="text-sm font-[var(--font-mono)] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-sm w-full"
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
