import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Download, FileCheck } from "lucide-react";
import { Link } from "wouter";

export default function Specifications() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-8 font-[var(--font-mono)] uppercase tracking-wider">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 mb-6">
            <FileCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
              Technical Documentation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Technical <span className="text-primary">Specifications</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Detailed specifications for all Anvil Propulsion components. Every product ships with full traceability documentation and compliance certification.
          </p>

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
            style={{ borderRadius: '4px' }}
          >
            <Download className="mr-2 w-5 h-5" />
            Download Complete Spec Sheet (PDF)
          </Button>
        </div>
      </section>

      {/* Motors Section */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Brushless Motors</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 2204 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">2204 Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Stator Size</div>
                  <div className="font-[var(--font-mono)] text-foreground">22mm × 4mm</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">KV Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">1800, 2300, 2600</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Current</div>
                  <div className="font-[var(--font-mono)] text-foreground">15A continuous</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">18g</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Shaft Diameter</div>
                  <div className="font-[var(--font-mono)] text-foreground">M5 (5mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Racing, FPV</div>
                </div>
              </div>
            </Card>

            {/* 2306 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">2306 Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Stator Size</div>
                  <div className="font-[var(--font-mono)] text-foreground">23mm × 6mm</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">KV Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">1600, 2000, 2400</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Current</div>
                  <div className="font-[var(--font-mono)] text-foreground">25A continuous</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">28g</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Shaft Diameter</div>
                  <div className="font-[var(--font-mono)] text-foreground">M5 (5mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Freestyle, Cinematic</div>
                </div>
              </div>
            </Card>

            {/* 2814 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">2814 Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Stator Size</div>
                  <div className="font-[var(--font-mono)] text-foreground">28mm × 14mm</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">KV Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">400, 600, 800, 1000</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Current</div>
                  <div className="font-[var(--font-mono)] text-foreground">40A continuous</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">95g</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Shaft Diameter</div>
                  <div className="font-[var(--font-mono)] text-foreground">M6 (6mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Heavy-lift, Reconnaissance</div>
                </div>
              </div>
            </Card>

            {/* Custom Motors */}
            <Card className="p-8 bg-background border-primary/50">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)] text-primary">Custom Specifications</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Need a different size, KV rating, or custom winding configuration? Our design-in program can match your exact requirements.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Custom stator dimensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Specialized winding configurations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Extended temperature ranges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Mil-spec connectors and coatings</span>
                </div>
              </div>
              <div className="tech-spec text-muted-foreground text-xs">
                LEAD TIME: 4-6 weeks for custom motor development
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Propellers Section */}
      <section className="relative py-16 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Propellers</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            From racing quads to long-endurance reconnaissance platforms, our propeller lineup covers the full spectrum of drone applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Racing Series */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">Racing Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Sizes</div>
                  <div className="font-[var(--font-mono)] text-foreground">5", 6", 7"</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Pitch Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">3.5, 4.0, 4.5</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Material</div>
                  <div className="font-[var(--font-mono)] text-foreground">Carbon Fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Hub</div>
                  <div className="font-[var(--font-mono)] text-foreground">M5 (5mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">FPV Racing, Freestyle</div>
                </div>
              </div>
            </Card>

            {/* Cinematic Series */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">Cinematic Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Sizes</div>
                  <div className="font-[var(--font-mono)] text-foreground">7", 8", 9", 10"</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Pitch Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">3.0, 3.5, 4.0</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Material</div>
                  <div className="font-[var(--font-mono)] text-foreground">Carbon Composite</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Hub</div>
                  <div className="font-[var(--font-mono)] text-foreground">M5/M6 (5-6mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Smooth Flight, Payload</div>
                </div>
              </div>
            </Card>

            {/* Reconnaissance Series */}
            <Card className="p-8 bg-card border-primary/50">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)] text-primary">Reconnaissance Series</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Sizes</div>
                  <div className="font-[var(--font-mono)] text-foreground">12", 15", 18", 22", 24"</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Pitch Options</div>
                  <div className="font-[var(--font-mono)] text-foreground">4.5, 5.0, 5.5, 6.0</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Material</div>
                  <div className="font-[var(--font-mono)] text-foreground">Carbon Fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Hub</div>
                  <div className="font-[var(--font-mono)] text-foreground">M6/M8 (6-8mm)</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Long-Range, Endurance</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Propeller Performance Characteristics */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">Performance Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Reconnaissance Series Details</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Engineered for long-endurance autonomous flight with optimized efficiency at cruise speeds. Low-noise profiles for covert operations.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-muted-foreground">Efficiency Range</span>
                    <span className="font-[var(--font-mono)] text-foreground">85-92% at cruise</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-muted-foreground">Noise Level</span>
                    <span className="font-[var(--font-mono)] text-foreground">62-68 dB @ 1m</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-muted-foreground">Max RPM</span>
                    <span className="font-[var(--font-mono)] text-foreground">3000-5000 RPM</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-muted-foreground">Thrust Range</span>
                    <span className="font-[var(--font-mono)] text-foreground">2-8 kg per prop</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Manufacturing & Quality</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Precision Molding</div>
                      <div>7-minute snap cure at 140°C under high pressure for consistent quality</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Dynamic Balancing</div>
                      <div>Every propeller balanced to &lt;0.5g·cm for vibration-free operation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Material Traceability</div>
                      <div>US-sourced carbon fiber with full batch documentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Airframes Section */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Airframes & Structural Components</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Modular carbon fiber airframes designed for rapid assembly, field repair, and mission adaptability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 450mm Class */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">450mm Class</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Wheelbase</div>
                  <div className="font-[var(--font-mono)] text-foreground">450mm diagonal</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Frame Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">180g (without hardware)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Motor Mount</div>
                  <div className="font-[var(--font-mono)] text-foreground">16mm × 19mm (M3)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Arm Thickness</div>
                  <div className="font-[var(--font-mono)] text-foreground">4mm carbon fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Takeoff Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">1.5 kg</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Racing, FPV, Light Payload</div>
                </div>
              </div>
            </Card>

            {/* 600mm Class */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">600mm Class</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Wheelbase</div>
                  <div className="font-[var(--font-mono)] text-foreground">600mm diagonal</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Frame Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">320g (without hardware)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Motor Mount</div>
                  <div className="font-[var(--font-mono)] text-foreground">19mm × 19mm (M3)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Arm Thickness</div>
                  <div className="font-[var(--font-mono)] text-foreground">5mm carbon fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Takeoff Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">3.5 kg</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Cinematic, Medium Payload</div>
                </div>
              </div>
            </Card>

            {/* 800mm Class */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)]">800mm Class</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Wheelbase</div>
                  <div className="font-[var(--font-mono)] text-foreground">800mm diagonal</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Frame Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">580g (without hardware)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Motor Mount</div>
                  <div className="font-[var(--font-mono)] text-foreground">25mm × 25mm (M4)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Arm Thickness</div>
                  <div className="font-[var(--font-mono)] text-foreground">6mm carbon fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Takeoff Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">7 kg</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Heavy Payload, Survey</div>
                </div>
              </div>
            </Card>

            {/* 1200mm Class - Reconnaissance */}
            <Card className="p-8 bg-background border-primary/50">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-display)] text-primary">1200mm Class - Reconnaissance</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Wheelbase</div>
                  <div className="font-[var(--font-mono)] text-foreground">1200mm diagonal</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Frame Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">1100g (without hardware)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Motor Mount</div>
                  <div className="font-[var(--font-mono)] text-foreground">30mm × 30mm (M4/M5)</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Arm Thickness</div>
                  <div className="font-[var(--font-mono)] text-foreground">8mm carbon fiber</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Max Takeoff Weight</div>
                  <div className="font-[var(--font-mono)] text-foreground">15 kg</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-[var(--font-mono)] text-sm uppercase tracking-wider">Application</div>
                  <div className="font-[var(--font-mono)] text-foreground">Long-Range, Autonomous</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/">
              <img 
                src={`${import.meta.env.BASE_URL}images/anvil-logo-white.png`} 
                alt="Anvil Propulsion" 
                className="h-6 w-auto opacity-80"
              />
            </Link>

            <div className="text-sm text-muted-foreground font-[var(--font-mono)]">
              © 2026 Anvil Propulsion by SectorFlow Inc. All rights reserved.
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
