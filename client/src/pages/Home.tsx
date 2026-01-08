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
import ContactModal from "@/components/ContactModal";
import { ArrowRight, CheckCircle2, Factory, FileCheck, Shield, Zap, Box, Layers, Plane } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; sku: string } | null>(null);

  const handleRequestInfo = (name: string, sku: string) => {
    setSelectedProduct({ name, sku });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <ContactModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct?.name}
        productSKU={selectedProduct?.sku}
      />
      
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
                FCC/NDAA Compliant • Made in California, USA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9] tracking-tight">
              American-Made<br />
              Drone Components <span className="text-primary">at Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-[var(--font-body)] leading-relaxed">
              California-manufactured motors, propellers, airframes, and structural components engineered for compliance. Ship FCC/NDAA-compliant drone systems without platform redesign.
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
                onClick={() => window.location.hash = '#/catalog'}
              >
                View Product Catalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/20 hover:border-primary hover:text-primary font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
                onClick={() => window.location.hash = '#/specifications'}
              >
                View Specifications
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)] mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Made in CA</div>
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
                On December 22, 2025, the FCC updated its Covered List to include foreign-produced UAS and "UAS critical components"—explicitly listing motors, propellers, airframes, and structural components as critical.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                New authorizations for covered foreign hardware get blocked, and the industry scrambles for compliant supply. Anvil delivers American-made components with full traceability—no supply chain uncertainty, no compliance risk.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">100% US Manufacturing</div>
                    <div className="text-muted-foreground">California-made with full component traceability and material provenance</div>
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
                    <div className="text-muted-foreground">Match your current component specs without platform redesign</div>
                  </div>
                </div>
              </div>

              <div className="tech-spec text-muted-foreground">
                <p>
                  <span className="text-foreground">COMPLIANCE-GRADE TRACEABILITY:</span> Every component ships with a digital passport containing material provenance, test results, and manufacturing data.
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
                  California Manufacturing
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Built in <span className="text-primary">California</span>,<br />Scaled for America
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every Anvil component is manufactured in our California facility with 100% US-sourced materials. Our automated production lines ensure consistent quality while meeting the scale demands of domestic drone deployment.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our secret sauce isn't just the component design—it's the software-defined production line and the data exhaust.
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
                  <div className="text-2xl font-bold text-primary mb-2 font-[var(--font-display)]">Injection</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)]">Molding + CNC</div>
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
                Product Portfolio
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Complete <span className="text-primary">Component Stack</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From propulsion to structure, Anvil delivers the critical components that domestic drone manufacturers need. Engineered for compliance and scaled for mass deployment.
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Motors */}
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Brushless Motors</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                High-efficiency brushless motors with automated winding and inline testing. Drop-in equivalents for popular foreign motors.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>2204-2814 size range</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>400-2600 KV options</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Full traceability</span>
                </div>
              </div>
            </Card>

            {/* Propellers */}
            <Card className="p-8 bg-background border-primary/50 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)] text-primary">Propellers</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Precision-molded propellers from racing to reconnaissance. 5"-24" range covers FPV to long-endurance autonomous platforms.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>5"-24" diameter range</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Carbon fiber composite</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Recon series: 85-92% efficiency</span>
                </div>
              </div>
            </Card>

            {/* Multirotor Airframes */}
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Multirotor Frames</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lightweight carbon fiber airframes for multirotor platforms. Modular designs for rapid assembly and field repair.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>450mm-1200mm class</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Modular architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>CNC + molded options</span>
                </div>
              </div>
            </Card>

            {/* Fixed-Wing Airframes */}
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Fixed-Wing Platforms</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Long-endurance fixed-wing airframes optimized for autonomous flight and sensor integration.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Tactical reconnaissance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Survey & mapping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>VTOL hybrid options</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Fixed-Wing Showcase */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-primary/30 mb-6">
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                  Fixed-Wing Platforms
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Long-Endurance <span className="text-primary">Fixed-Wing</span>
              </h3>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Purpose-built fixed-wing airframes for extended mission profiles. Optimized for autonomous flight, sensor integration, and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-background border-border overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/fixedwing-scout.png`} 
                  alt="Scout tactical reconnaissance platform"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Scout</h4>
                <div className="text-xs font-[var(--font-mono)] text-primary uppercase tracking-wider mb-3">
                  Tactical Reconnaissance
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  1.5m wingspan, pusher propeller, modular sensor bay. Low acoustic signature for covert operations.
                </p>
                <Button 
                  onClick={() => handleRequestInfo("Scout - Tactical Recon", "ANV-FW-SCOUT")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              <Card className="p-6 bg-background border-border overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/fixedwing-sentinel.png`} 
                  alt="Sentinel survey and mapping platform"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Sentinel</h4>
                <div className="text-xs font-[var(--font-mono)] text-primary uppercase tracking-wider mb-3">
                  Survey & Mapping
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  2.0m wingspan, high-wing design, transparent payload bay. Stable platform for precision mapping.
                </p>
                <Button 
                  onClick={() => handleRequestInfo("Sentinel - Survey & Mapping", "ANV-FW-SENTINEL")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              <Card className="p-6 bg-background border-border overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/fixedwing-forge.png`} 
                  alt="Forge VTOL hybrid platform"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Forge</h4>
                <div className="text-xs font-[var(--font-mono)] text-primary uppercase tracking-wider mb-3">
                  VTOL Hybrid
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Quad VTOL + fixed-wing cruise. Vertical takeoff capability with long-range efficiency.
                </p>
                <Button 
                  onClick={() => handleRequestInfo("Forge - VTOL Hybrid", "ANV-FW-FORGE")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              <Card className="p-6 bg-background border-border overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/fixedwing-strike.png`} 
                  alt="Strike high-speed transit platform"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Strike</h4>
                <div className="text-xs font-[var(--font-mono)] text-primary uppercase tracking-wider mb-3">
                  High-Speed Transit
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  1.0m swept-wing, aerodynamic design. Fast-response delivery and rapid patrol missions.
                </p>
                <Button 
                  onClick={() => handleRequestInfo("Strike - High-Speed Transit", "ANV-FW-STRIKE")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>
            </div>
          </div>

          {/* Propeller Array Image */}
          <div className="mb-16">
            <img 
              src={`${import.meta.env.BASE_URL}images/propeller-array.png`} 
              alt="Precision propeller lineup from racing to reconnaissance"
              className="w-full h-auto max-w-4xl mx-auto"
            />
          </div>

          {/* Reconnaissance Highlight */}
          <Card className="p-12 bg-background border-primary/30 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 mb-6">
                  <Box className="w-4 h-4 text-primary" />
                  <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                    Featured: Reconnaissance Series
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Long-Endurance <span className="text-primary">Propellers</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our 12"-24" Reconnaissance Series propellers are engineered for autonomous long-duration missions. Optimized for cruise efficiency with low-noise profiles for covert operations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">85-92%</div>
                    <div className="text-sm text-muted-foreground">Cruise Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">62-68 dB</div>
                    <div className="text-sm text-muted-foreground">Noise Level @ 1m</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">2-8 kg</div>
                    <div className="text-sm text-muted-foreground">Thrust per Prop</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">12-24"</div>
                    <div className="text-sm text-muted-foreground">Size Range</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("Reconnaissance Propellers", "ANV-P-RECON")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                  style={{ borderRadius: '4px' }}
                >
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/propeller-closeup.png`} 
                  alt="Reconnaissance propeller closeup"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Card>

          {/* Airframe Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src={`${import.meta.env.BASE_URL}images/airframe-components.png`} 
                alt="Modular airframe components"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img 
                src={`${import.meta.env.BASE_URL}images/airframe-assembled.png`} 
                alt="Assembled carbon fiber airframe"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Product Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Design-In Program</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Send us your current component specs; we match + certify + deliver equivalents with full documentation.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Supply Assurance</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Reserved capacity, fixed pricing bands, delivery SLAs. No surprises when supply shocks hit.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-display)]">Developer Experience</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fast samples, clear datasheets, drop-in CAD, reference pairings. Build with confidence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Become the Default<br />
              <span className="text-primary">Domestic Component Supplier</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Every US drone OEM now has a sourcing fire drill. The narrative is politically and culturally resonant: rebuilding domestic manufacturing. Let's build together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => handleRequestInfo("Partnership Inquiry", "PARTNERSHIP")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-base px-8"
                style={{ borderRadius: '4px' }}
              >
                Request Partnership Info
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleRequestInfo("Technical Brief Request", "TECH-BRIEF")}
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
                src={`${import.meta.env.BASE_URL}images/anvil-logo-white.png`} 
                alt="Anvil Propulsion" 
                className="h-6 w-auto opacity-80"
              />
            </a>

            <div className="text-sm text-muted-foreground font-[var(--font-mono)]">
              © 2026 Anvil Propulsion. All rights reserved.
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
