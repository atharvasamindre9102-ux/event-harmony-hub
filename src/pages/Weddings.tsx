import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Flower2, Music, Camera, UtensilsCrossed, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import heroWedding from "@/assets/hero-wedding.jpg";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import weddingMandap from "@/assets/wedding-mandap.jpg";
import weddingReception from "@/assets/wedding-reception.jpg";
import weddingOutdoor from "@/assets/wedding-outdoor.jpg";
import weddingSangeet from "@/assets/wedding-sangeet.jpg";
import weddingHaldi from "@/assets/wedding-haldi.jpg";
import weddingMehndi from "@/assets/wedding-mehndi.jpg";
import weddingBaraat from "@/assets/wedding-baraat.jpg";
import weddingPheras from "@/assets/wedding-pheras.jpg";
import weddingFloral from "@/assets/wedding-floral.jpg";

const services = [
  { icon: Heart, title: "Full Planning", desc: "End-to-end wedding coordination from concept to celebration." },
  { icon: Flower2, title: "Floral Design", desc: "Bespoke arrangements that capture the essence of your love story." },
  { icon: Music, title: "Entertainment", desc: "Curated music and entertainment for every moment of your day." },
  { icon: Camera, title: "Photography", desc: "Connecting you with world-class photographers and videographers." },
  { icon: UtensilsCrossed, title: "Catering", desc: "Exquisite cuisine tailored to your palate and dietary needs." },
  { icon: Sparkles, title: "Décor & Styling", desc: "Transforming venues into breathtaking settings for your vows." },
];

const weddingImages = [
  { src: heroWedding, alt: "Grand wedding reception" },
  { src: weddingMandap, alt: "Traditional wedding mandap with flowers" },
  { src: galleryWedding1, alt: "Garden ceremony setup" },
  { src: weddingReception, alt: "Elegant reception dinner" },
  { src: weddingOutdoor, alt: "Outdoor wedding ceremony" },
  { src: galleryWedding2, alt: "Wedding cake and desserts" },
  { src: weddingSangeet, alt: "Vibrant sangeet night" },
  { src: weddingHaldi, alt: "Haldi ceremony celebration" },
  { src: weddingMehndi, alt: "Mehndi ceremony with henna art" },
  { src: weddingBaraat, alt: "Grand baraat procession" },
  { src: weddingPheras, alt: "Sacred pheras ceremony" },
  { src: weddingFloral, alt: "Elegant floral arrangements" },
];

const packages = [
  { name: "Essentials", price: "From ₹2,00,000", features: ["Day-of coordination", "Vendor recommendations", "Timeline creation", "Rehearsal management"] },
  { name: "Signature", price: "From ₹5,00,000", features: ["Full planning & design", "Vendor management", "Budget tracking", "Floral design", "Guest management"], popular: true },
  { name: "Luxe", price: "From ₹15,00,000", features: ["Everything in Signature", "Custom stationery", "Welcome events", "Honeymoon planning", "Destination coordination"] },
];

const Weddings = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img src={heroWedding} alt="Luxury wedding planning" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4">Weddings</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground mb-4">Your Love Story, Perfectly Told</h1>
          <p className="text-primary-foreground/80 text-lg">Every detail crafted with care to create your perfect day.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">What We Offer</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Wedding Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 shadow-soft text-center hover:shadow-elevated transition-shadow">
                  <s.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Gallery</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Wedding Moments</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {weddingImages.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.08}>
                <div
                  className="overflow-hidden rounded-lg shadow-soft group cursor-pointer"
                  onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Pricing</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Wedding Packages</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.15}>
                <div className={`rounded-lg p-8 h-full ${pkg.popular ? "bg-foreground text-primary-foreground shadow-elevated ring-2 ring-gold" : "bg-card shadow-soft"}`}>
                  {pkg.popular && <p className="text-gold-light text-xs tracking-[0.2em] uppercase mb-2">Most Popular</p>}
                  <h3 className="font-display text-xl font-semibold mb-1">{pkg.name}</h3>
                  <p className={`text-2xl font-display font-bold mb-6 ${pkg.popular ? "text-gold-light" : "text-primary"}`}>{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${pkg.popular ? "bg-gold-light" : "bg-primary"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${pkg.popular ? "bg-gradient-gold text-primary-foreground hover:opacity-90" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`} variant={pkg.popular ? "default" : "outline"}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={weddingImages} initialIndex={lightboxIndex} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </div>
  );
};

export default Weddings;
