/*
 * Design Philosophy: Industrial Brutalism meets Aerospace Precision
 * - Asymmetric layouts inspired by manufacturing floor plans
 * - Diagonal section transitions mimicking motor shaft angles
 * - Technical specification callouts with monospace typography
 * - Forge-inspired color palette: charcoal, molten copper, steel blue
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2, Factory, FileCheck, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-manufacturing.png`} 
            alt="Precision motor manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Technical Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                FCC/NDAA Compliant • US Manufacturing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9] tracking-tight">
              Domestic Propulsion<br />
              <span className="text-primary">at Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-[var(--font-body)] leading-relaxed">
              We build US-produced motors so OEMs can ship compliant drone systems without redesigning their entire platform.
            </p>

            {/* Technical Specs Callout */}
            <div className="tech-spec mb-10 text-muted-foreground max-w-xl">
              <p className="mb-2">
                <span className="text-foreground">REGULATORY TAILWIND:</span> FCC Covered List updated Dec 22, 2025
              </p>
              <p>
                <span className="text-foreground">MARKET DEMAND:</span> US Army procurement target: 1M+ drones, 2-3 years
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
              >
                Request Design-In Kit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/20 hover:border-primary hover:text-primary font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
              >
                View Specifications
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)] mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">US Sourced</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)] mb-2">10K+</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Units/Month</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)] mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section with Diagonal Cut */}
      <section id="compliance" className="relative bg-card py-24 md:py-32 diagonal-cut">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-primary/30 mb-6">
                <FileCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                  Regulatory Compliance
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The <span className="text-primary">Why Now</span> Moment
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                On December 22, 2025, the FCC updated its Covered List to include foreign-produced UAS and "UAS critical components"—explicitly listing motors as a critical component.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                New authorizations for covered foreign hardware get blocked, and the industry scrambles for compliant supply. That's where we come in.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">FCC/NDAA Compliant by Design</div>
                    <div className="text-muted-foreground">Full component traceability and material provenance documentation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Component Passport System</div>
                    <div className="text-muted-foreground">Lot/serial traceability, test results, and chain-of-custody records</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Drop-In Equivalents</div>
                    <div className="text-muted-foreground">Match your current motor specs without platform redesign</div>
                  </div>
                </div>
              </div>

              <div className="tech-spec text-muted-foreground">
                <p>
                  <span className="text-foreground">COMPLIANCE-GRADE TRACEABILITY:</span> Every motor ships with a digital passport containing material provenance, test results, and manufacturing data.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}images/compliance-abstract.png`} 
                alt="Regulatory compliance visualization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section id="manufacturing" className="relative py-24 md:py-32 diagonal-cut-reverse" style={{ marginTop: '-4rem', paddingTop: 'calc(6rem + 4rem)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={`${import.meta.env.BASE_URL}images/factory-floor.png`} 
                alt="Modern American manufacturing facility"
                className="w-full h-auto"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 mb-6">
                <Factory className="w-4 h-4 text-primary" />
                <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                  Scale Manufacturing
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Moat is the <span className="text-primary">Factory</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A motor business becomes defensible when you own the automated winding + balancing process, inline electrical testing, vibration/bearing QA, and tight statistical process control that keeps scrap low.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our secret sauce isn't the motor design—it's the software-defined production line and the data exhaust.
              </p>

              {/* Capability Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-card border-border">
                  <div className="text-2xl font-bold text-primary mb-2 font-[var(--font-display)]">Automated</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)]">Winding + Balancing</div>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <div className="text-2xl font-bold text-primary mb-2 font-[var(--font-display)]">Inline</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)]">Electrical Testing</div>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <div className="text-2xl font-bold text-primary mb-2 font-[var(--font-display)]">Vibration</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)]">Bearing QA</div>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <div className="text-2xl font-bold text-primary mb-2 font-[var(--font-display)]">SPC</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)]">Process Control</div>
                </Card>
              </div>

              <div className="tech-spec text-muted-foreground">
                <p>
                  <span className="text-foreground">PRODUCTION CAPACITY:</span> 10,000+ units/month with 24/7 automated line operation and real-time quality monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative bg-card py-24 md:py-32" style={{ marginTop: '-4rem', paddingTop: 'calc(6rem + 4rem)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                Product Strategy
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Priced for <span className="text-primary">Mass Deployment</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Defense reporting highlights the price mismatch: small motors that are $12–$25 from China can be $100–$225 for "truly made-in-America" equivalents. We hit volume + price bands that let OEMs survive.
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-16">
            <img 
              src={`${import.meta.env.BASE_URL}images/motor-array.png`} 
              alt="Precision motor array"
              className="w-full h-auto max-w-4xl mx-auto"
            />
          </div>

          {/* Product Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Design-In Program</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Send us your current motor spec; we match + certify + deliver an equivalent with full documentation.
              </p>
              <div className="tech-spec text-muted-foreground text-xs">
                TURNAROUND: 2-4 weeks for custom matching
              </div>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Supply Assurance</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Reserved capacity, fixed pricing bands, delivery SLAs. No surprises when supply shocks hit.
              </p>
              <div className="tech-spec text-muted-foreground text-xs">
                CONTRACT TERMS: 12-36 month agreements
              </div>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Developer Experience</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fast samples, clear datasheets, drop-in CAD, reference ESC pairings. Build with confidence.
              </p>
              <div className="tech-spec text-muted-foreground text-xs">
                SAMPLE DELIVERY: 3-5 business days
              </div>
            </Card>
          </div>

          {/* Motor Closeup */}
          <div className="mt-16 max-w-2xl mx-auto">
            <img 
              src={`${import.meta.env.BASE_URL}images/motor-closeup.png`} 
              alt="High-performance brushless motor closeup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Become the Default<br />
              <span className="text-primary">Domestic Propulsion Layer</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Every US drone OEM now has a sourcing fire drill. The narrative is politically and culturally resonant: rebuilding domestic manufacturing. Let's build together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
              >
                Request Partnership Info
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/20 hover:border-primary hover:text-primary font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
              >
                Download Technical Brief
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-2">Email</div>
                <a href="mailto:contact@anvilpropulsion.com" className="text-foreground hover:text-primary transition-colors font-[var(--font-mono)]">
                  contact@anvilpropulsion.com
                </a>
              </div>
              <div>
                <div className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-2">Location</div>
                <div className="text-foreground font-[var(--font-mono)]">
                  United States
                </div>
              </div>
              <div>
                <div className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-2">Certifications</div>
                <div className="text-foreground font-[var(--font-mono)]">
                  FCC/NDAA Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="/" className="flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo-final.png`} 
                alt="Anvil Propulsion" 
                className="h-6 w-auto opacity-80"
              />
            </a>

            <div className="text-sm text-muted-foreground font-[var(--font-mono)]">
              © 2025 Anvil Propulsion. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[var(--font-mono)] uppercase tracking-wider">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
