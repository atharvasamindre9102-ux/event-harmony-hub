import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo-official.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="The Event Sutra" className="h-10 w-auto" />
            <h3 className="font-display text-2xl font-semibold">The Event Sutra</h3>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Creating unforgettable moments through meticulous planning and timeless design.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-medium mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/weddings" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">Weddings</Link>
            <Link to="/corporate" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">Corporate Events</Link>
            <Link to="/gallery" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">Portfolio</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-medium mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">About Us</Link>
            <Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-medium mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail size={16} className="text-gold-light" />
              contact@theeventsutra.com
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Phone size={16} className="text-gold-light" />
              8010742511
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin size={16} className="text-gold-light" />
              225, Shukrawar Peth, Pune 411002
            </div>
            <a href="https://instagram.com/the_event_sutra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">
              <Instagram size={16} className="text-gold-light" />
              @the_event_sutra
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} The Event Sutra. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
