import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productSKU?: string;
}

export default function ContactModal({ isOpen, onClose, productName, productSKU }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body
    let subject = "Product Inquiry";
    if (productName) {
      subject += ` - ${productName}`;
    }
    
    let body = `Name: ${formData.name}\n`;
    body += `Email: ${formData.email}\n`;
    body += `Company: ${formData.company}\n`;
    body += `Phone: ${formData.phone}\n\n`;
    if (productName) {
      body += `Product: ${productName}\n`;
    }
    if (productSKU) {
      body += `SKU: ${productSKU}\n`;
    }
    body += `\nMessage:\n${formData.message}`;
    
    // Open mailto link
    window.location.href = `mailto:contact@anvilpropulsion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form and close modal
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-[101] w-full max-w-2xl mx-4 bg-card border-2 border-primary/30 p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Request <span className="text-primary">Information</span>
          </h2>
          {productName && (
            <div className="text-lg text-muted-foreground mb-2">
              <span className="text-foreground font-semibold">Product:</span> {productName}
            </div>
          )}
          {productSKU && (
            <div className="text-sm font-[var(--font-mono)] text-muted-foreground uppercase tracking-wider">
              SKU: {productSKU}
            </div>
          )}
          <p className="text-muted-foreground mt-4">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-[var(--font-mono)] uppercase tracking-wider text-foreground mb-2">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border focus:border-primary"
                style={{ borderRadius: '4px' }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-[var(--font-mono)] uppercase tracking-wider text-foreground mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border focus:border-primary"
                style={{ borderRadius: '4px' }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-[var(--font-mono)] uppercase tracking-wider text-foreground mb-2">
                Company
              </label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-background border-border focus:border-primary"
                style={{ borderRadius: '4px' }}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-[var(--font-mono)] uppercase tracking-wider text-foreground mb-2">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border focus:border-primary"
                style={{ borderRadius: '4px' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-[var(--font-mono)] uppercase tracking-wider text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border focus:border-primary resize-none"
              style={{ borderRadius: '4px' }}
              placeholder="Tell us about your requirements, volume needs, or any specific questions..."
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              Send Inquiry
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-foreground/20 hover:border-primary hover:text-primary font-[var(--font-mono)] uppercase tracking-wider"
              style={{ borderRadius: '4px' }}
            >
              Cancel
            </Button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground font-[var(--font-mono)]">
            <p className="mb-2">
              <span className="text-foreground">EMAIL:</span> contact@anvilpropulsion.com
            </p>
            <p>
              <span className="text-foreground">RESPONSE TIME:</span> Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
