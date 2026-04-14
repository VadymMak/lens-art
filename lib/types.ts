// Site configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  templateType: 'services' | 'schedule' | 'menu' | 'portfolio';
  palette: {
    primary: string;       // main accent color
    primaryDark: string;
    primaryLight: string;
    bg: string;            // main background
    bgAlt: string;         // alternate section bg
    card: string;          // card background
    cardHover: string;
    text: string;          // main text
    textMuted: string;     // secondary text
    border: string;        // border color
  };
  headingFont: 'oswald' | 'playfair' | 'cormorant' | 'inter';
  whatsappNumber: string;
  contactEmail: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Stats
export interface StatItem {
  value: string;
  label: string;
}

// Services
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

// Schedule
export interface ScheduleEntry {
  time: string;
  name: string;
  instructor: string;
}

export interface DaySchedule {
  day: string;
  entries: ScheduleEntry[];
}

// Menu
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// Why Us
export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Gallery
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Reviews
export interface Review {
  id: string;
  name: string;
  initial: string;
  text: string;
  rating: number;
  detail: string;
}

// Contact
export interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

// FAQ
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Chat Widget
export interface QuickReply {
  id: string;
  label: string;
  response: string;
}

export interface ChatConfig {
  greeting: string;
  quickReplies: QuickReply[];
  fallbackResponse: string;
}

// Images
export interface ImageMap {
  hero: string;
  about: string;
  gallery: string[];
}
