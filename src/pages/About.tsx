import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <div>
    <section className="py-24 px-4 mt-8">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">The Art of Celebration</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Based in Pune, Maharashtra, The Event Sutra is a passionate team of planners, designers, and coordinators who bring together creativity, precision, and heart to every event we touch. We're here to make your celebrations truly unforgettable.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe every celebration should be as unique as the people it honors. Whether it's a whispered "I do" in a garden or a roaring standing ovation at a corporate gala, we approach each event with fresh eyes and boundless enthusiasm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our process is built on listening deeply, planning meticulously, and executing flawlessly. We handle the stress so you can savor every moment.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { title: "Attention to Detail", desc: "Every element is considered, from table settings to lighting design." },
              { title: "Personalized Service", desc: "No templates. Each event is custom-crafted from the ground up." },
              { title: "Trusted Network", desc: "Access to the finest vendors, venues, and talent in the industry." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="right" delay={i * 0.15}>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">Meet Our Founders</h2>
        </ScrollReveal>
        <div className="flex justify-center gap-16 flex-wrap">
          {[
            { initials: "RT", name: "Rushikesh Theurkar", role: "Co-Founder" },
            { initials: "PR", name: "Prathmesh Raut", role: "Co-Founder" },
            { initials: "SK", name: "Shubham Kadam", role: "Co-Founder" },
          ].map((person, i) => (
            <ScrollReveal key={person.name} delay={i * 0.2}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-3xl md:text-4xl font-semibold">
                  {person.initials}
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="text-muted-foreground text-sm">{person.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-4 text-center">
      <ScrollReveal>
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">Let's Create Together</h2>
          <p className="text-muted-foreground text-lg mb-10">We'd love to hear about your vision. Reach out for a complimentary consultation.</p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 tracking-wider uppercase text-sm px-10 py-6">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </div>
);

export default About;
