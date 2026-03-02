import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import galleryCorporate1 from "@/assets/gallery-corporate-1.jpg";
import galleryCorporate2 from "@/assets/gallery-corporate-2.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import weddingMandap from "@/assets/wedding-mandap.jpg";
import weddingReception from "@/assets/wedding-reception.jpg";
import weddingOutdoor from "@/assets/wedding-outdoor.jpg";
import weddingSangeet from "@/assets/wedding-sangeet.jpg";
import weddingHaldi from "@/assets/wedding-haldi.jpg";
import weddingMehndi from "@/assets/wedding-mehndi.jpg";
import weddingBaraat from "@/assets/wedding-baraat.jpg";
import weddingPheras from "@/assets/wedding-pheras.jpg";
import weddingFloral from "@/assets/wedding-floral.jpg";
import corporateConference from "@/assets/corporate-conference.jpg";
import corporateGala from "@/assets/corporate-gala.jpg";
import corporateTeambuilding from "@/assets/corporate-teambuilding.jpg";
import corporateLaunch from "@/assets/corporate-launch.jpg";
import corporateSeminar from "@/assets/corporate-seminar.jpg";
import corporateAwards from "@/assets/corporate-awards.jpg";
import corporateHoliday from "@/assets/corporate-holiday.jpg";
import corporateNetworking from "@/assets/corporate-networking.jpg";
import corporateExhibition from "@/assets/corporate-exhibition.jpg";

type Category = "all" | "wedding" | "corporate";

const images = [
  { src: heroWedding, alt: "Grand wedding reception", category: "wedding" as const },
  { src: corporateConference, alt: "Professional conference", category: "corporate" as const },
  { src: weddingMandap, alt: "Traditional wedding mandap", category: "wedding" as const },
  { src: corporateGala, alt: "Corporate gala dinner", category: "corporate" as const },
  { src: galleryWedding1, alt: "Garden ceremony", category: "wedding" as const },
  { src: corporateTeambuilding, alt: "Team building event", category: "corporate" as const },
  { src: weddingReception, alt: "Elegant reception dinner", category: "wedding" as const },
  { src: galleryCorporate1, alt: "Corporate conference setup", category: "corporate" as const },
  { src: weddingOutdoor, alt: "Outdoor wedding ceremony", category: "wedding" as const },
  { src: corporateLaunch, alt: "Product launch event", category: "corporate" as const },
  { src: galleryWedding2, alt: "Wedding cake and desserts", category: "wedding" as const },
  { src: weddingSangeet, alt: "Vibrant sangeet night", category: "wedding" as const },
  { src: galleryCorporate2, alt: "Networking event", category: "corporate" as const },
  { src: heroCorporate, alt: "Corporate gala", category: "corporate" as const },
  { src: weddingHaldi, alt: "Haldi ceremony celebration", category: "wedding" as const },
  { src: weddingMehndi, alt: "Mehndi ceremony with henna art", category: "wedding" as const },
  { src: weddingBaraat, alt: "Grand baraat procession", category: "wedding" as const },
  { src: weddingPheras, alt: "Sacred pheras ceremony", category: "wedding" as const },
  { src: weddingFloral, alt: "Elegant floral arrangements", category: "wedding" as const },
  { src: corporateSeminar, alt: "Corporate seminar", category: "corporate" as const },
  { src: corporateAwards, alt: "Award ceremony", category: "corporate" as const },
  { src: corporateHoliday, alt: "Holiday party celebration", category: "corporate" as const },
  { src: corporateNetworking, alt: "Networking cocktail event", category: "corporate" as const },
  { src: corporateExhibition, alt: "Exhibition booth setup", category: "corporate" as const },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      <section className="py-24 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Portfolio</p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">Our Work</h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">A glimpse into the celebrations we've had the privilege of creating.</p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal>
            <div className="flex justify-center gap-4 mb-12">
              {(["all", "wedding", "corporate"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm tracking-wider uppercase px-5 py-2 rounded-full transition-colors ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {cat === "all" ? "All Events" : cat === "wedding" ? "Weddings" : "Corporate"}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.alt + filter} delay={(i % 6) * 0.08}>
                <div
                  className="aspect-[4/3] overflow-hidden rounded-lg shadow-soft group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default Gallery;
