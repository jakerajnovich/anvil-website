import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Box, Layers, Package, Search, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const motors = [
    { sku: "ANV-M2204-1800", name: "2204 1800KV", category: "motors", price: "$42", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2204-2300", name: "2204 2300KV", category: "motors", price: "$42", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2204-2600", name: "2204 2600KV", category: "motors", price: "$42", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2306-1600", name: "2306 1600KV", category: "motors", price: "$48", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2306-2000", name: "2306 2000KV", category: "motors", price: "$48", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2306-2400", name: "2306 2400KV", category: "motors", price: "$48", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2814-400", name: "2814 400KV", category: "motors", price: "$125", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2814-600", name: "2814 600KV", category: "motors", price: "$125", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2814-800", name: "2814 800KV", category: "motors", price: "$125", stock: "In Stock", leadTime: "2-3 days" },
    { sku: "ANV-M2814-1000", name: "2814 1000KV", category: "motors", price: "$125", stock: "In Stock", leadTime: "2-3 days" },
  ];

  const propellers = [
    // Racing Series
    { sku: "ANV-P5035-R", name: "5\" × 3.5\" Racing", category: "propellers", price: "$8", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    { sku: "ANV-P5040-R", name: "5\" × 4.0\" Racing", category: "propellers", price: "$8", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    { sku: "ANV-P5045-R", name: "5\" × 4.5\" Racing", category: "propellers", price: "$8", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    { sku: "ANV-P6035-R", name: "6\" × 3.5\" Racing", category: "propellers", price: "$10", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    { sku: "ANV-P6040-R", name: "6\" × 4.0\" Racing", category: "propellers", price: "$10", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    { sku: "ANV-P7040-R", name: "7\" × 4.0\" Racing", category: "propellers", price: "$12", stock: "In Stock", leadTime: "1-2 days", series: "Racing" },
    
    // Cinematic Series
    { sku: "ANV-P7030-C", name: "7\" × 3.0\" Cinematic", category: "propellers", price: "$14", stock: "In Stock", leadTime: "1-2 days", series: "Cinematic" },
    { sku: "ANV-P8035-C", name: "8\" × 3.5\" Cinematic", category: "propellers", price: "$16", stock: "In Stock", leadTime: "1-2 days", series: "Cinematic" },
    { sku: "ANV-P9035-C", name: "9\" × 3.5\" Cinematic", category: "propellers", price: "$18", stock: "In Stock", leadTime: "1-2 days", series: "Cinematic" },
    { sku: "ANV-P10040-C", name: "10\" × 4.0\" Cinematic", category: "propellers", price: "$22", stock: "In Stock", leadTime: "1-2 days", series: "Cinematic" },
    
    // Reconnaissance Series
    { sku: "ANV-P12045-X", name: "12\" × 4.5\" Recon", category: "propellers", price: "$35", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P12050-X", name: "12\" × 5.0\" Recon", category: "propellers", price: "$35", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P15050-X", name: "15\" × 5.0\" Recon", category: "propellers", price: "$48", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P15055-X", name: "15\" × 5.5\" Recon", category: "propellers", price: "$48", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P18050-X", name: "18\" × 5.0\" Recon", category: "propellers", price: "$68", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P18055-X", name: "18\" × 5.5\" Recon", category: "propellers", price: "$68", stock: "In Stock", leadTime: "3-5 days", series: "Reconnaissance" },
    { sku: "ANV-P22055-X", name: "22\" × 5.5\" Recon", category: "propellers", price: "$95", stock: "Limited Stock", leadTime: "5-7 days", series: "Reconnaissance" },
    { sku: "ANV-P22060-X", name: "22\" × 6.0\" Recon", category: "propellers", price: "$95", stock: "Limited Stock", leadTime: "5-7 days", series: "Reconnaissance" },
    { sku: "ANV-P24055-X", name: "24\" × 5.5\" Recon", category: "propellers", price: "$125", stock: "Made to Order", leadTime: "7-10 days", series: "Reconnaissance" },
    { sku: "ANV-P24060-X", name: "24\" × 6.0\" Recon", category: "propellers", price: "$125", stock: "Made to Order", leadTime: "7-10 days", series: "Reconnaissance" },
  ];

  const airframes = [
    { sku: "ANV-F450-X", name: "450mm X-Frame", category: "airframes", price: "$185", stock: "In Stock", leadTime: "3-5 days" },
    { sku: "ANV-F450-H", name: "450mm H-Frame", category: "airframes", price: "$195", stock: "In Stock", leadTime: "3-5 days" },
    { sku: "ANV-F600-X", name: "600mm X-Frame", category: "airframes", price: "$285", stock: "In Stock", leadTime: "3-5 days" },
    { sku: "ANV-F600-H", name: "600mm H-Frame", category: "airframes", price: "$295", stock: "In Stock", leadTime: "3-5 days" },
    { sku: "ANV-F800-X", name: "800mm X-Frame", category: "airframes", price: "$485", stock: "In Stock", leadTime: "5-7 days" },
    { sku: "ANV-F800-H", name: "800mm H-Frame", category: "airframes", price: "$495", stock: "In Stock", leadTime: "5-7 days" },
    { sku: "ANV-F1200-X", name: "1200mm X-Frame Recon", category: "airframes", price: "$895", stock: "Limited Stock", leadTime: "7-10 days" },
    { sku: "ANV-F1200-H", name: "1200mm H-Frame Recon", category: "airframes", price: "$925", stock: "Limited Stock", leadTime: "7-10 days" },
  ];

  const allProducts = [...motors, ...propellers, ...airframes];
  
  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

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
                  <div>
                    <div className="text-xs font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider mb-2">
                      {product.sku}
                    </div>
                    <h3 className="text-xl font-bold font-[var(--font-display)] mb-1">{product.name}</h3>
                    {'series' in product && (
                      <div className="text-xs text-primary font-[var(--font-mono)] uppercase tracking-wider">
                        {product.series}
                      </div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-primary font-[var(--font-display)]">
                    {product.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-[var(--font-mono)]">Availability</span>
                    <span className={`font-[var(--font-mono)] ${
                      product.stock === "In Stock" ? "text-primary" : 
                      product.stock === "Limited Stock" ? "text-yellow-500" : 
                      "text-muted-foreground"
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-[var(--font-mono)]">Lead Time</span>
                    <span className="font-[var(--font-mono)] text-foreground">{product.leadTime}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider text-xs"
                    style={{ borderRadius: '4px' }}
                  >
                    Request Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-foreground/20 hover:border-primary hover:text-primary font-[var(--font-mono)] uppercase tracking-wider text-xs"
                    style={{ borderRadius: '4px' }}
                  >
                    Spec Sheet
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Ordering Section */}
      <section className="relative py-16 bg-background">
        <div className="container">
          <Card className="p-12 bg-card border-primary/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Volume <span className="text-primary">Pricing Available</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Need components at scale? We offer volume discounts, reserved capacity, and fixed pricing agreements for orders of 100+ units.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2 font-[var(--font-display)]">100+</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">5-10% Discount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2 font-[var(--font-display)]">500+</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">10-15% Discount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2 font-[var(--font-display)]">1000+</div>
                  <div className="text-sm text-muted-foreground font-[var(--font-mono)] uppercase tracking-wider">Custom Pricing</div>
                </div>
              </div>
              <Button 
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

      {/* Reconnaissance Propeller Highlight */}
      <section className="relative py-16 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-primary/30 mb-6">
                <Box className="w-4 h-4 text-primary" />
                <span className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
                  Featured: Reconnaissance Series
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Long-Endurance <span className="text-primary">Propellers</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Reconnaissance Series propellers (12"-24") are engineered specifically for long-duration autonomous flight missions. Optimized for efficiency at cruise speeds with low-noise profiles.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Extended Flight Time</div>
                    <div className="text-muted-foreground">85-92% efficiency at cruise speeds for maximum endurance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Low-Noise Operation</div>
                    <div className="text-muted-foreground">62-68 dB @ 1m for covert reconnaissance missions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Heavy Payload Capacity</div>
                    <div className="text-muted-foreground">2-8 kg thrust per propeller for sensor packages</div>
                  </div>
                </div>
              </div>

              <div className="tech-spec text-muted-foreground">
                <p>
                  <span className="text-foreground">COMPATIBLE PLATFORMS:</span> 800mm-1200mm class airframes, 2814 series motors, 18"-24" propellers for optimal performance
                </p>
              </div>
            </div>

            <div>
              <img 
                src={`${import.meta.env.BASE_URL}images/propeller-array.png`} 
                alt="Reconnaissance propeller lineup"
                className="w-full h-auto"
              />
            </div>
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
