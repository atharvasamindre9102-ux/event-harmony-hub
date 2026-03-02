import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();

    if (!name || !phone) {
      toast({ title: "Required fields missing", description: "Please fill in your name and phone number.", variant: "destructive" });
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("contact_inquiries").insert({
      name,
      email: (formData.get("email") as string)?.trim() || `${phone}@noemail.local`,
      phone,
      event_type: eventType || null,
      event_date: (formData.get("date") as string) || null,
      guest_count: formData.get("guests") ? parseInt(formData.get("guests") as string) : null,
      budget_range: budgetRange || null,
      location: (formData.get("location") as string)?.trim() || null,
      message: (formData.get("message") as string)?.trim() || null,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      return;
    }

    toast({ title: "Inquiry Received!", description: "We'll be in touch within 24 hours." });
    form.reset();
    setEventType("");
    setBudgetRange("");
  };

  return (
    <div>
      <section className="py-24 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Let's Plan Together</h1>
            <p className="text-muted-foreground text-lg">Share your vision and we'll make it a reality.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">contact@theeventsutra.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">8010742511</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Office</p>
                      <p className="text-sm text-muted-foreground">225, Shukrawar Peth, Akara Maruti Chowk,<br />Sai Samarth Apartment, Pune 411002</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-lg p-8 shadow-soft space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <Input id="name" name="name" placeholder="Your name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                  <Input id="phone" name="phone" type="tel" placeholder="98XXXXXXXX" required maxLength={15} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" maxLength={255} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-type">Event Type</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="gala">Gala / Fundraiser</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Input id="date" name="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guest Count</Label>
                  <Input id="guests" name="guests" type="number" placeholder="150" min={1} max={10000} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={budgetRange} onValueChange={setBudgetRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-5l">₹2,00,000 – ₹5,00,000</SelectItem>
                      <SelectItem value="5-10l">₹5,00,000 – ₹10,00,000</SelectItem>
                      <SelectItem value="10-25l">₹10,00,000 – ₹25,00,000</SelectItem>
                      <SelectItem value="25l+">₹25,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Event Location</Label>
                <Input id="location" name="location" placeholder="City, venue, or TBD" maxLength={200} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Vision</Label>
                <Textarea id="message" name="message" placeholder="Share your ideas, theme preferences, and any special requirements..." rows={5} maxLength={2000} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 tracking-wider uppercase text-sm py-6" disabled={loading}>
                {loading ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
