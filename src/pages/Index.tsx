import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Building2, ArrowRight, CheckCircle, Clock, Palette, Users, Sparkles, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import galleryCorporate1 from "@/assets/gallery-corporate-1.jpg";
import galleryCorporate2 from "@/assets/gallery-corporate-2.jpg";

const reasons = [
  { icon: Palette, title: "Creative Vision", desc: "Unique concepts tailored to your personality and brand identity." },
  { icon: Clock, title: "Flawless Execution", desc: "Meticulous planning and seamless day-of coordination." },
  { icon: Users, title: "Dedicated Team", desc: "A passionate crew fully invested in making your event extraordinary." },
  { icon: Shield, title: "Trusted Vendors", desc: "An exclusive network of premium vendors we personally vouch for." },
  { icon: Sparkles, title: "Attention to Detail", desc: "Every element — from lighting to linens — is thoughtfully curated." },
  { icon: CheckCircle, title: "Stress-Free Experience", desc: "We handle every detail so you can be fully present and enjoy." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroWedding} alt="Elegant wedding reception with golden lighting and floral arrangements" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-slow">Luxury Event Planning</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Where Elegance Meets
            <span className="block italic text-gold-light">Unforgettable Moments</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            From intimate weddings to grand corporate galas, we craft experiences that leave lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-sm tracking-wider uppercase px-8 py-6">
              <Link to="/contact">Start Planning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm tracking-wider uppercase px-8 py-6">
              <Link to="/gallery">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Our Services</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Crafted for Every Occasion</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <Link to="/weddings" className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-soft block">
                <img src={heroWedding} alt="Wedding planning services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-hero opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <Heart className="text-gold-light mb-3" size={28} />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-2">Weddings</h3>
                  <p className="text-primary-foreground/80 text-sm max-w-sm">From intimate ceremonies to grand celebrations, we create the wedding of your dreams.</p>
                  <div className="flex items-center gap-2 mt-4 text-gold-light text-sm font-medium group-hover:gap-3 transition-all">Learn More <ArrowRight size={16} /></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Link to="/corporate" className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-soft block">
                <img src={heroCorporate} alt="Corporate event planning services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-hero opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <Building2 className="text-gold-light mb-3" size={28} />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-2">Corporate Events</h3>
                  <p className="text-primary-foreground/80 text-sm max-w-sm">Conferences, galas, and team events designed to impress and inspire.</p>
                  <div className="flex items-center gap-2 mt-4 text-gold-light text-sm font-medium group-hover:gap-3 transition-all">Learn More <ArrowRight size={16} /></div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Why Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Why Choose The Event Sutra</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">We bring passion, precision, and creativity to every event — big or small.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 shadow-soft text-center hover:shadow-elevated transition-shadow">
                  <r.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Portfolio</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Recent Celebrations</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[galleryWedding1, galleryWedding2, galleryCorporate1, galleryCorporate2].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="aspect-square overflow-hidden rounded-lg shadow-soft group">
                  <img src={img} alt={`Event portfolio image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-wider uppercase text-sm px-8">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <img src={heroCorporate} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <ScrollReveal className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">Let's discuss your vision. Schedule a complimentary consultation today.</p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-sm tracking-wider uppercase px-10 py-6">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
