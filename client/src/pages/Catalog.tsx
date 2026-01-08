import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";
import { ArrowLeft, Box, Layers, Package, Zap, Plane } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; sku: string } | null>(null);

  const handleRequestInfo = (name: string, sku: string) => {
    setSelectedProduct({ name, sku });
    setModalOpen(true);
  };

  const motors = [
    { sku: "ANV-M2204-1800", name: "2204 1800KV", category: "motors" },
    { sku: "ANV-M2204-2300", name: "2204 2300KV", category: "motors" },
    { sku: "ANV-M2204-2600", name: "2204 2600KV", category: "motors" },
    { sku: "ANV-M2306-1600", name: "2306 1600KV", category: "motors" },
    { sku: "ANV-M2306-2000", name: "2306 2000KV", category: "motors" },
    { sku: "ANV-M2306-2400", name: "2306 2400KV", category: "motors" },
    { sku: "ANV-M2814-400", name: "2814 400KV", category: "motors" },
    { sku: "ANV-M2814-600", name: "2814 600KV", category: "motors" },
    { sku: "ANV-M2814-800", name: "2814 800KV", category: "motors" },
    { sku: "ANV-M2814-1000", name: "2814 1000KV", category: "motors" },
  ];

  const propellers = [
    // Racing Series
    { sku: "ANV-P5035-R", name: "5\" × 3.5\" Racing", category: "propellers", series: "Racing" },
    { sku: "ANV-P5040-R", name: "5\" × 4.0\" Racing", category: "propellers", series: "Racing" },
    { sku: "ANV-P5045-R", name: "5\" × 4.5\" Racing", category: "propellers", series: "Racing" },
    { sku: "ANV-P6035-R", name: "6\" × 3.5\" Racing", category: "propellers", series: "Racing" },
    { sku: "ANV-P6040-R", name: "6\" × 4.0\" Racing", category: "propellers", series: "Racing" },
    { sku: "ANV-P7040-R", name: "7\" × 4.0\" Racing", category: "propellers", series: "Racing" },
    
    // Cinematic Series
    { sku: "ANV-P7030-C", name: "7\" × 3.0\" Cinematic", category: "propellers", series: "Cinematic" },
    { sku: "ANV-P8035-C", name: "8\" × 3.5\" Cinematic", category: "propellers", series: "Cinematic" },
    { sku: "ANV-P9035-C", name: "9\" × 3.5\" Cinematic", category: "propellers", series: "Cinematic" },
    { sku: "ANV-P10040-C", name: "10\" × 4.0\" Cinematic", category: "propellers", series: "Cinematic" },
    
    // Reconnaissance Series
    { sku: "ANV-P12045-X", name: "12\" × 4.5\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P12050-X", name: "12\" × 5.0\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P15050-X", name: "15\" × 5.0\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P15055-X", name: "15\" × 5.5\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P18050-X", name: "18\" × 5.0\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P18055-X", name: "18\" × 5.5\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P22055-X", name: "22\" × 5.5\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P22060-X", name: "22\" × 6.0\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P24055-X", name: "24\" × 5.5\" Recon", category: "propellers", series: "Reconnaissance" },
    { sku: "ANV-P24060-X", name: "24\" × 6.0\" Recon", category: "propellers", series: "Reconnaissance" },
  ];

  const airframes = [
    // Multirotor Airframes
    { sku: "ANV-F450-X", name: "450mm X-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F450-H", name: "450mm H-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F600-X", name: "600mm X-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F600-H", name: "600mm H-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F800-X", name: "800mm X-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F800-H", name: "800mm H-Frame", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F1200-X", name: "1200mm X-Frame Recon", category: "airframes", type: "Multirotor" },
    { sku: "ANV-F1200-H", name: "1200mm H-Frame Recon", category: "airframes", type: "Multirotor" },
    
    // Fixed-Wing Airframes
    { sku: "ANV-FW-SCOUT", name: "Scout - Tactical Recon", category: "airframes", type: "Fixed-Wing" },
    { sku: "ANV-FW-SENTINEL", name: "Sentinel - Survey & Mapping", category: "airframes", type: "Fixed-Wing" },
    { sku: "ANV-FW-FORGE", name: "Forge - VTOL Hybrid", category: "airframes", type: "Fixed-Wing" },
    { sku: "ANV-FW-STRIKE", name: "Strike - High-Speed Transit", category: "airframes", type: "Fixed-Wing" },
  ];

  const allProducts = [...motors, ...propellers, ...airframes];
  
  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

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
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
              Product Catalog
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Component <span className="text-primary">Catalog</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Browse our complete lineup of FCC/NDAA-compliant drone components. All products ship with full traceability documentation.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              All Products
            </Button>
            <Button 
              variant={activeCategory === "motors" ? "default" : "outline"}
              onClick={() => setActiveCategory("motors")}
              className="font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              <Zap className="mr-2 w-4 h-4" />
              Motors
            </Button>
            <Button 
              variant={activeCategory === "propellers" ? "default" : "outline"}
              onClick={() => setActiveCategory("propellers")}
              className="font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              <Box className="mr-2 w-4 h-4" />
              Propellers
            </Button>
            <Button 
              variant={activeCategory === "airframes" ? "default" : "outline"}
              onClick={() => setActiveCategory("airframes")}
              className="font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              <Layers className="mr-2 w-4 h-4" />
              Airframes
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.sku} className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-2">
                      {product.sku}
                    </div>
                    <h3 className="text-xl font-bold font-[var(--font-display)] mb-1">{product.name}</h3>
                    {'series' in product && (
                      <div className="text-xs text-primary font-[var(--font-mono)] uppercase tracking-wider">
                        {product.series}
                      </div>
                    )}
                    {'type' in product && (
                      <div className="text-xs text-primary font-[var(--font-mono)] uppercase tracking-wider">
                        {product.type}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button 
                    onClick={() => handleRequestInfo(product.name, product.sku)}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                    style={{ borderRadius: '4px' }}
                  >
                    Request Info
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed-Wing Showcase */}
      <section className="relative py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 mb-6">
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                Fixed-Wing Platforms
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Long-Endurance <span className="text-primary">Fixed-Wing</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Purpose-built fixed-wing airframes for extended mission profiles. Optimized for autonomous flight, sensor integration, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-card border-border overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/fixedwing-scout.png`} 
                alt="Scout tactical reconnaissance platform"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Scout</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                ANV-FW-SCOUT • Tactical Reconnaissance
              </div>
              <p className="text-muted-foreground mb-6">
                Long-endurance reconnaissance platform with 1.5m wingspan. Pusher propeller configuration for minimal acoustic signature. Modular nose cone for sensor payloads.
              </p>
              <Button 
                onClick={() => handleRequestInfo("Scout - Tactical Recon", "ANV-FW-SCOUT")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Request Information
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/fixedwing-sentinel.png`} 
                alt="Sentinel survey and mapping platform"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Sentinel</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                ANV-FW-SENTINEL • Survey & Mapping
              </div>
              <p className="text-muted-foreground mb-6">
                Wide-wingspan survey platform with 2m span for stable flight. High-wing configuration with transparent payload bay for mapping cameras. Twin tail boom design.
              </p>
              <Button 
                onClick={() => handleRequestInfo("Sentinel - Survey & Mapping", "ANV-FW-SENTINEL")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Request Information
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/fixedwing-forge.png`} 
                alt="Forge VTOL hybrid platform"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Forge</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                ANV-FW-FORGE • VTOL Hybrid
              </div>
              <p className="text-muted-foreground mb-6">
                Hybrid VTOL combining vertical takeoff with fixed-wing cruise efficiency. Four vertical lift motors on outriggers plus pusher propeller for forward flight.
              </p>
              <Button 
                onClick={() => handleRequestInfo("Forge - VTOL Hybrid", "ANV-FW-FORGE")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Request Information
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/fixedwing-strike.png`} 
                alt="Strike high-speed transit platform"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Strike</h3>
              <div className="text-sm font-[var(--font-mono)] text-primary uppercase tracking-wider mb-4">
                ANV-FW-STRIKE • High-Speed Transit
              </div>
              <p className="text-muted-foreground mb-6">
                Aerodynamic swept-wing design optimized for high-speed flight. Minimal drag profile with 1m wingspan. Fast-response delivery and rapid patrol missions.
              </p>
              <Button 
                onClick={() => handleRequestInfo("Strike - High-Speed Transit", "ANV-FW-STRIKE")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Request Information
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Bulk Ordering Section */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <Card className="p-12 bg-background border-primary/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Volume <span className="text-primary">Procurement</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Need components at scale? We offer volume discounts, reserved capacity, and fixed pricing agreements for large orders. Contact our sales team for custom quotes.
              </p>
              <Button 
                onClick={() => handleRequestInfo("Volume Procurement Inquiry", "BULK-ORDER")}
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
                style={{ borderRadius: '4px' }}
              >
                Contact Sales Team
              </Button>
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
