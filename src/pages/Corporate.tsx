import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users, Presentation, PartyPopper, Globe, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import heroCorporate from "@/assets/hero-corporate.jpg";
import galleryCorporate1 from "@/assets/gallery-corporate-1.jpg";
import galleryCorporate2 from "@/assets/gallery-corporate-2.jpg";
import corporateConference from "@/assets/corporate-conference.jpg";
import corporateGala from "@/assets/corporate-gala.jpg";
import corporateTeambuilding from "@/assets/corporate-teambuilding.jpg";
import corporateLaunch from "@/assets/corporate-launch.jpg";
import corporateSeminar from "@/assets/corporate-seminar.jpg";
import corporateAwards from "@/assets/corporate-awards.jpg";
import corporateHoliday from "@/assets/corporate-holiday.jpg";
import corporateNetworking from "@/assets/corporate-networking.jpg";
import corporateExhibition from "@/assets/corporate-exhibition.jpg";

const services = [
  { icon: Presentation, title: "Conferences", desc: "Seamless multi-day conferences with flawless AV and logistics." },
  { icon: PartyPopper, title: "Galas & Awards", desc: "Black-tie events that celebrate achievements in style." },
  { icon: Users, title: "Team Building", desc: "Engaging team experiences that strengthen company culture." },
  { icon: Globe, title: "Product Launches", desc: "High-impact reveals that captivate media and audiences." },
  { icon: Award, title: "Award Ceremonies", desc: "Prestigious ceremonies that honor excellence and leadership." },
  { icon: Building2, title: "Holiday Parties", desc: "Festive celebrations your team will talk about all year." },
];

const corporateImages = [
  { src: heroCorporate, alt: "Corporate gala event" },
  { src: corporateConference, alt: "Professional conference stage" },
  { src: galleryCorporate1, alt: "Corporate conference setup" },
  { src: corporateGala, alt: "Elegant gala dinner" },
  { src: corporateTeambuilding, alt: "Team building activities" },
  { src: galleryCorporate2, alt: "Corporate networking event" },
  { src: corporateLaunch, alt: "Product launch event" },
  { src: corporateSeminar, alt: "Corporate seminar" },
  { src: corporateAwards, alt: "Award ceremony" },
  { src: corporateHoliday, alt: "Holiday party celebration" },
  { src: corporateNetworking, alt: "Networking cocktail event" },
  { src: corporateExhibition, alt: "Exhibition booth setup" },
];

const packages = [
  { name: "Professional", price: "From ₹3,00,000", features: ["Event coordination", "Venue sourcing", "AV setup", "Catering management"] },
  { name: "Executive", price: "From ₹8,00,000", features: ["Full event management", "Branding & theming", "Entertainment curation", "Photography & video", "VIP experiences"], popular: true },
  { name: "Enterprise", price: "Custom", features: ["Everything in Executive", "Multi-event contracts", "Dedicated account manager", "Pan-India coordination", "Priority booking"] },
];

const Corporate = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div>
      <section className="relative h-[70vh] flex items-center justify-center">
        <img src={heroCorporate} alt="Corporate event planning" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4">Corporate Events</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground mb-4">Elevate Your Brand</h1>
          <p className="text-primary-foreground/80 text-lg">Professional events that leave a lasting business impact.</p>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">What We Offer</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Corporate Services</h2>
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
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Corporate Moments</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {corporateImages.map((img, i) => (
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

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Pricing</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Corporate Packages</h2>
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

      <Lightbox images={corporateImages} initialIndex={lightboxIndex} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </div>
  );
};

export default Corporate;
