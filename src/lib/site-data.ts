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

export const businessContact = {
  name: "Goose Electric",
  phone: "(410) 555-0142",
  phoneHref: "tel:+14105550142",
  email: "hello@gooseelectric.com",
  emailHref: "mailto:hello@gooseelectric.com",
  city: "Dundalk, Baltimore County, MD",
  serviceArea: "Dundalk, Essex, Sparrows Point, Middle River, Edgemere, and nearby Baltimore County communities",
};

export const services = [
  {
    icon: Plug,
    title: "Outlets & Switches",
    slug: "outlets-switches",
    desc: "Replace, upgrade, or add new outlets and switches around the home.",
    gallery: [
      "Outlet replacements and smart outlet installs",
      "Switch upgrades and fully rewired circuits",
      "New dedicated outlets for kitchens, garages, and home offices",
    ],
  },
  {
    icon: Lightbulb,
    title: "Light Fixtures",
    slug: "light-fixtures",
    desc: "Install or swap interior fixtures, pendants, vanities, and more.",
    gallery: [
      "Bathroom vanity and hallway fixture installations",
      "Pendant and chandelier mounting",
      "Recessed and ambient lighting upgrades",
    ],
  },
  {
    icon: Fan,
    title: "Ceiling Fans",
    slug: "ceiling-fans",
    desc: "Mount and wire new ceiling fans or replace tired existing units.",
    gallery: [
      "Ceiling fan installs for bedrooms, living rooms, and porches",
      "Fan replacements with new lighting packages",
      "Wiring and remote control upgrades",
    ],
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    slug: "troubleshooting",
    desc: "Track down flickering lights, dead outlets, and other quirks.",
    gallery: [
      "Diagnosis of flickering lights and circuit faults",
      "Dead outlet and switch troubleshooting",
      "Home electrical system problem solving",
    ],
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    slug: "outdoor-lighting",
    desc: "Porch, security, and landscape lighting that lasts season after season.",
    gallery: [
      "Porch and security light installations",
      "Landscape and pathway lighting upgrades",
      "Outdoor wiring for durable, weather-ready fixtures",
    ],
  },
  {
    icon: Smartphone,
    title: "Smart Devices",
    slug: "smart-devices",
    desc: "Smart switches, dimmers, doorbells, and connected home upgrades.",
    gallery: [
      "Smart switch and dimmer installations",
      "Connected doorbells and home automation wiring",
      "Smart lighting and device upgrades",
    ],
  },
  {
    icon: Home,
    title: "Small Repairs",
    slug: "small-repairs",
    desc: "Honest help with the small residential fixes that pile up over time.",
    gallery: [
      "Minor outlet and fixture repairs",
      "Small home electrical fixes and maintenance",
      "Quick updates to existing wiring and hardware",
    ],
  },
  {
    icon: PhoneCall,
    title: "Service Calls",
    slug: "service-calls",
    desc: "General visits for whatever's on your home electrical to-do list.",
    gallery: [
      "Comprehensive walkthroughs and service visits",
      "On-site estimates and recommendations",
      "Follow-up repairs and improvement work",
    ],
  },
];

export const whyPoints = [
  {
    icon: MapPin,
    title: "Local to Baltimore County",
    desc: "Born and raised right here. We know the neighborhoods we serve.",
  },
  {
    icon: Users,
    title: "Family-Built Company",
    desc: "Two brothers building something dependable for our community.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "Plain talk, honest timelines, no jargon and no surprises.",
  },
  {
    icon: Handshake,
    title: "Fair, Straightforward Service",
    desc: "Straight pricing and respectful work, every visit.",
  },
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
