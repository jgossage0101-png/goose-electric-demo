import {
  Plug,
  Lightbulb,
  Fan,
  Wrench,
  Sun,
  Smartphone,
  Home,
  PhoneCall,
  MapPin,
  Users,
  MessageSquare,
  Handshake,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const services = [
  { icon: Plug, title: "Outlets & Switches", desc: "Replace, upgrade, or add new outlets and switches around the home." },
  { icon: Lightbulb, title: "Light Fixtures", desc: "Install or swap interior fixtures, pendants, vanities, and more." },
  { icon: Fan, title: "Ceiling Fans", desc: "Mount and wire new ceiling fans or replace tired existing units." },
  { icon: Wrench, title: "Troubleshooting", desc: "Track down flickering lights, dead outlets, and other quirks." },
  { icon: Sun, title: "Outdoor Lighting", desc: "Porch, security, and landscape lighting that lasts season after season." },
  { icon: Smartphone, title: "Smart Devices", desc: "Smart switches, dimmers, doorbells, and connected home upgrades." },
  { icon: Home, title: "Small Repairs", desc: "Honest help with the small residential fixes that pile up over time." },
  { icon: PhoneCall, title: "Service Calls", desc: "General visits for whatever's on your home electrical to-do list." },
];

export const whyPoints = [
  { icon: MapPin, title: "Local to Baltimore County", desc: "Born and raised right here. We know the neighborhoods we serve." },
  { icon: Users, title: "Family-Built Company", desc: "Two brothers building something dependable for our community." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Plain talk, honest timelines, no jargon and no surprises." },
  { icon: Handshake, title: "Fair, Straightforward Service", desc: "Straight pricing and respectful work, every visit." },
];

export const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Dundalk, Essex, Sparrows Point, Edgemere, Middle River, Rosedale, and surrounding Baltimore County communities.",
  },
  {
    q: "What types of electrical work do you handle?",
    a: "Residential work like outlets, switches, light fixtures, ceiling fans, outdoor lighting, smart device installs, troubleshooting, and general service calls.",
  },
  {
    q: "How do I request a callback?",
    a: "Fill out the Request a Callback form on this page with a little detail about what's going on, and we'll reach out to learn more.",
  },
  {
    q: "Do you handle small residential projects?",
    a: "Yes — small home projects are a big part of what we do. No job is too small to talk about.",
  },
  {
    q: "Can I ask about a project not listed?",
    a: "Absolutely. If you have something on your mind that isn't on our service list, send it our way and we'll talk it through.",
  },
  {
    q: "How soon will someone reach out?",
    a: "We aim to follow up within one business day of receiving your request.",
  },
];
