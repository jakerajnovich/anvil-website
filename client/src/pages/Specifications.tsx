import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";
import { ArrowLeft, FileText, Zap, Box, Layers, Plane } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Specifications() {
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
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
              Technical Specifications
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Technical <span className="text-primary">Specifications</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Detailed specifications for all Anvil Propulsion components. Contact us for custom requirements or volume pricing.
          </p>

          <Button 
            onClick={() => handleRequestInfo("Complete Specification Sheet", "SPEC-SHEET")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
            style={{ borderRadius: '4px' }}
          >
            Request Complete Spec Sheet
          </Button>
        </div>
      </section>

      {/* Motors Section */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Brushless Motors</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 2204 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)]">2204 Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                Racing / FPV
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Stator Size</div>
                  <div className="text-foreground font-semibold">22mm × 4mm</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">KV Options</div>
                  <div className="text-foreground font-semibold">1800, 2300, 2600</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Current</div>
                  <div className="text-foreground font-semibold">15A continuous</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Weight</div>
                  <div className="text-foreground font-semibold">18g</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Shaft Diameter</div>
                  <div className="text-foreground font-semibold">M5 (5mm)</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("2204 Series Motor", "ANV-M2204")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>

            {/* 2306 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)]">2306 Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                Freestyle / Cinematic
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Stator Size</div>
                  <div className="text-foreground font-semibold">23mm × 6mm</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">KV Options</div>
                  <div className="text-foreground font-semibold">1600, 2000, 2400</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Current</div>
                  <div className="text-foreground font-semibold">25A continuous</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Weight</div>
                  <div className="text-foreground font-semibold">28g</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Shaft Diameter</div>
                  <div className="text-foreground font-semibold">M5 (5mm)</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("2306 Series Motor", "ANV-M2306")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>

            {/* 2814 Series */}
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)]">2814 Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                Heavy-Lift / Reconnaissance
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Stator Size</div>
                  <div className="text-foreground font-semibold">28mm × 14mm</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">KV Options</div>
                  <div className="text-foreground font-semibold">400, 600, 800, 1000</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Current</div>
                  <div className="text-foreground font-semibold">40A continuous</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Weight</div>
                  <div className="text-foreground font-semibold">95g</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Shaft Diameter</div>
                  <div className="text-foreground font-semibold">M6 (6mm)</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("2814 Series Motor", "ANV-M2814")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>
          </div>

          <Card className="p-8 bg-background border-primary/30 mt-8">
            <h4 className="text-xl font-bold mb-4">Custom Motor Specifications</h4>
            <p className="text-muted-foreground mb-6">
              Need custom stator sizes, KV ratings, or specialized winding configurations? We offer custom motor design and manufacturing services.
            </p>
            <Button 
              onClick={() => handleRequestInfo("Custom Motor Specifications", "CUSTOM-MOTOR")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              Request Custom Quote
            </Button>
          </Card>
        </div>
      </section>

      {/* Propellers Section */}
      <section className="relative py-16 bg-background">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Box className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Propellers</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Racing Series */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)]">Racing Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                5" - 7" Diameter
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Sizes Available</div>
                  <div className="text-foreground font-semibold">5", 6", 7"</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Pitch Options</div>
                  <div className="text-foreground font-semibold">3.5, 4.0, 4.5</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Material</div>
                  <div className="text-foreground font-semibold">Carbon Fiber</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Hub Size</div>
                  <div className="text-foreground font-semibold">M5 (5mm)</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Application</div>
                  <div className="text-foreground font-semibold">FPV Racing, Freestyle</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("Racing Series Propellers", "ANV-P-RACING")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>

            {/* Cinematic Series */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)]">Cinematic Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                7" - 10" Diameter
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Sizes Available</div>
                  <div className="text-foreground font-semibold">7", 8", 9", 10"</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Pitch Options</div>
                  <div className="text-foreground font-semibold">3.0, 3.5, 4.0</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Material</div>
                  <div className="text-foreground font-semibold">Carbon Composite</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Hub Size</div>
                  <div className="text-foreground font-semibold">M5/M6 (5-6mm)</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Application</div>
                  <div className="text-foreground font-semibold">Smooth Flight, Payload</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("Cinematic Series Propellers", "ANV-P-CINEMATIC")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>

            {/* Reconnaissance Series */}
            <Card className="p-8 bg-card border-primary/50">
              <h3 className="text-2xl font-bold mb-2 font-[var(--font-display)] text-primary">Reconnaissance Series</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                12" - 24" Diameter
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Sizes Available</div>
                  <div className="text-foreground font-semibold">12", 15", 18", 22", 24"</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Pitch Options</div>
                  <div className="text-foreground font-semibold">4.5, 5.0, 5.5, 6.0</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Material</div>
                  <div className="text-foreground font-semibold">Carbon Fiber</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Hub Size</div>
                  <div className="text-foreground font-semibold">M6/M8 (6-8mm)</div>
                </div>
                <div>
                  <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Application</div>
                  <div className="text-foreground font-semibold">Long-Range, Endurance</div>
                </div>
              </div>

              <Button 
                onClick={() => handleRequestInfo("Reconnaissance Series Propellers", "ANV-P-RECON")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                style={{ borderRadius: '4px' }}
              >
                Request Info
              </Button>
            </Card>
          </div>

          {/* Recon Performance Details */}
          <Card className="p-8 bg-card border-primary/30 mt-8">
            <h4 className="text-xl font-bold mb-4">Reconnaissance Series Performance</h4>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85-92%</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Cruise Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">62-68 dB</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Noise Level @ 1m</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3000-5000</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Max RPM</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2-8 kg</div>
                <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Thrust per Prop</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Optimized for long-endurance autonomous flight with low acoustic signature. Ideal for surveillance, mapping, and extended reconnaissance missions.
            </p>
          </Card>
        </div>
      </section>

      {/* Airframes Section */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Airframes & Structural Components</h2>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Multirotor Airframes</h3>
            <div className="grid lg:grid-cols-4 gap-8">
              {/* 450mm Class */}
              <Card className="p-6 bg-background border-border">
                <h4 className="text-xl font-bold mb-2">450mm Class</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                  Racing / FPV / Light Payload
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wheelbase</div>
                    <div className="text-foreground font-semibold">450mm diagonal</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Frame Weight</div>
                    <div className="text-foreground font-semibold">180g</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Arm Thickness</div>
                    <div className="text-foreground font-semibold">4mm carbon fiber</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Takeoff</div>
                    <div className="text-foreground font-semibold">1.5 kg</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("450mm Airframe", "ANV-F450")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* 600mm Class */}
              <Card className="p-6 bg-background border-border">
                <h4 className="text-xl font-bold mb-2">600mm Class</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                  Cinematic / Medium Payload
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wheelbase</div>
                    <div className="text-foreground font-semibold">600mm diagonal</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Frame Weight</div>
                    <div className="text-foreground font-semibold">320g</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Arm Thickness</div>
                    <div className="text-foreground font-semibold">5mm carbon fiber</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Takeoff</div>
                    <div className="text-foreground font-semibold">3.5 kg</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("600mm Airframe", "ANV-F600")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* 800mm Class */}
              <Card className="p-6 bg-background border-border">
                <h4 className="text-xl font-bold mb-2">800mm Class</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                  Heavy Payload / Survey
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wheelbase</div>
                    <div className="text-foreground font-semibold">800mm diagonal</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Frame Weight</div>
                    <div className="text-foreground font-semibold">580g</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Arm Thickness</div>
                    <div className="text-foreground font-semibold">6mm carbon fiber</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Takeoff</div>
                    <div className="text-foreground font-semibold">7 kg</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("800mm Airframe", "ANV-F800")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* 1200mm Class */}
              <Card className="p-6 bg-background border-primary/50">
                <h4 className="text-xl font-bold mb-2 text-primary">1200mm Class</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                  Reconnaissance
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wheelbase</div>
                    <div className="text-foreground font-semibold">1200mm diagonal</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Frame Weight</div>
                    <div className="text-foreground font-semibold">1100g</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Arm Thickness</div>
                    <div className="text-foreground font-semibold">8mm carbon fiber</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Max Takeoff</div>
                    <div className="text-foreground font-semibold">15 kg</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("1200mm Airframe", "ANV-F1200")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Fixed-Wing Airframes</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Scout */}
              <Card className="p-8 bg-background border-border">
                <h4 className="text-2xl font-bold mb-2">Scout</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                  ANV-FW-SCOUT • Tactical Reconnaissance
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wingspan</div>
                    <div className="text-foreground font-semibold">1.5 meters</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Configuration</div>
                    <div className="text-foreground font-semibold">Pusher propeller, twin tail</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Payload Bay</div>
                    <div className="text-foreground font-semibold">Modular nose cone for sensors</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Mission Profile</div>
                    <div className="text-foreground font-semibold">Long-endurance surveillance</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("Scout Fixed-Wing", "ANV-FW-SCOUT")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* Sentinel */}
              <Card className="p-8 bg-background border-border">
                <h4 className="text-2xl font-bold mb-2">Sentinel</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                  ANV-FW-SENTINEL • Survey & Mapping
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wingspan</div>
                    <div className="text-foreground font-semibold">2.0 meters</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Configuration</div>
                    <div className="text-foreground font-semibold">High-wing, twin tail boom</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Payload Bay</div>
                    <div className="text-foreground font-semibold">Transparent bay for mapping cameras</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Mission Profile</div>
                    <div className="text-foreground font-semibold">Stable survey and mapping</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("Sentinel Fixed-Wing", "ANV-FW-SENTINEL")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* Forge */}
              <Card className="p-8 bg-background border-border">
                <h4 className="text-2xl font-bold mb-2">Forge</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                  ANV-FW-FORGE • VTOL Hybrid
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wingspan</div>
                    <div className="text-foreground font-semibold">1.3 meters (forward-swept)</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Configuration</div>
                    <div className="text-foreground font-semibold">Quad VTOL + pusher propeller</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Payload Bay</div>
                    <div className="text-foreground font-semibold">Modular center section</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Mission Profile</div>
                    <div className="text-foreground font-semibold">VTOL + cruise efficiency</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("Forge VTOL Hybrid", "ANV-FW-FORGE")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>

              {/* Strike */}
              <Card className="p-8 bg-background border-border">
                <h4 className="text-2xl font-bold mb-2">Strike</h4>
                <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-6">
                  ANV-FW-STRIKE • High-Speed Transit
                </div>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Wingspan</div>
                    <div className="text-foreground font-semibold">1.0 meter (swept-wing)</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Configuration</div>
                    <div className="text-foreground font-semibold">Aerodynamic low-drag design</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Payload Bay</div>
                    <div className="text-foreground font-semibold">Streamlined internal bay</div>
                  </div>
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-1">Mission Profile</div>
                    <div className="text-foreground font-semibold">High-speed delivery & patrol</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRequestInfo("Strike Fixed-Wing", "ANV-FW-STRIKE")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                  style={{ borderRadius: '4px' }}
                >
                  Request Info
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className="relative py-16 bg-background">
        <div className="container">
          <Card className="p-12 bg-card border-primary/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Manufacturing & <span className="text-primary">Quality Assurance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                All components manufactured in Nevada with 100% US-sourced materials. Every unit undergoes rigorous testing and ships with complete traceability documentation including material provenance, test results, and manufacturing data.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">US Materials</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">ISO 9001</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Quality Certified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Full</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Traceability</div>
                </div>
              </div>
            </div>
          </Card>
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
