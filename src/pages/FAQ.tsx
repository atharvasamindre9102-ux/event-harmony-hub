import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "Which areas in Pune do you serve?", a: "We operate across Pune and surrounding areas including Pimpri-Chinchwad, Hinjewadi, Kothrud, Hadapsar, and nearby destinations like Lonavala and Lavasa. We're based in Shukrawar Peth, Pune." },
  { q: "How far in advance should I book?", a: "For weddings, we recommend booking 6–12 months ahead, especially during the peak wedding season (November–February). Corporate events can be planned within 2–4 months depending on scale." },
  { q: "Can I customize my package?", a: "Absolutely! Every package is a starting point. We tailor our services to your specific needs and budget, so you only pay for what matters to you." },
  { q: "What's included in a consultation?", a: "Our complimentary consultation covers your vision, budget, timeline, and venue options in Pune. It's a relaxed conversation — you can visit us at our office or we can connect over a call." },
  { q: "Do you work with specific vendors?", a: "We have a curated network of trusted vendors across Pune — from decorators and caterers to photographers and DJs. We're also happy to work with your preferred partners." },
  { q: "What types of events do you handle?", a: "We plan weddings (Maharashtrian, multi-cultural, destination), corporate events (conferences, team outings, product launches), sangeet, haldi, engagement ceremonies, birthday parties, and more." },
  { q: "What is your cancellation policy?", a: "Our cancellation policy varies by package and timeline. Details are provided in our service agreement. We always work with clients to find fair solutions." },
  { q: "Do you offer day-of coordination only?", a: "Yes! If you've planned everything yourself and just need someone to execute on the day, we offer day-of coordination packages to ensure everything runs smoothly." },
  { q: "How can I see your past work?", a: "Check out our portfolio on the Gallery page or follow us on Instagram @the_event_sutra for our latest events, behind-the-scenes content, and client celebrations!" },
];

const FAQ = () => (
  <div>
    <section className="py-24 px-4 mt-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">FAQ</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Common Questions</h1>
          <p className="text-muted-foreground text-lg">Everything you need to know about working with us.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-6 shadow-soft border-none">
              <AccordionTrigger className="font-display text-base font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-wider uppercase text-sm px-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
