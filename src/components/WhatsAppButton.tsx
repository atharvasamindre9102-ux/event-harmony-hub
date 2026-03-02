import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918010742511";
const MESSAGE = "Hi! I'm interested in your event planning services.";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full px-5 py-3 shadow-elevated transition-all hover:scale-105 group"
  >
    <MessageCircle size={24} className="fill-white" />
    <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
  </a>
);

export default WhatsAppButton;
