import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  PortfolioCategory,
  PricingPlan,
} from './types';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: USE_LOCAL_IMAGES
    ? '/images/hero.webp'
    : 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80',
  about: USE_LOCAL_IMAGES
    ? '/images/about.webp'
    : 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop',
  gallery: USE_LOCAL_IMAGES
    ? [
        '/images/gallery/01.webp',
        '/images/gallery/02.webp',
        '/images/gallery/03.webp',
        '/images/gallery/04.webp',
        '/images/gallery/05.webp',
      ]
    : [
        'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=350&fit=crop',
      ],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Služby', href: '#why-us' },
  { label: 'Cenník', href: '#cennik' },
  { label: 'Recenzie', href: '#reviews' },
  { label: 'Kontakt', href: '#contact' },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [
  { value: '500+', label: 'fotení' },
  { value: '8', label: 'rokov skúseností' },
  { value: '4.9★', label: 'hodnotenie' },
  { value: '48h', label: 'dodanie fotiek' },
];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  {
    id: '1',
    icon: '📸',
    title: 'Profesionálne vybavenie',
    description: 'Canon R5, Sony A7IV, Profoto osvetlenie — najlepšia technika pre dokonalé výsledky.',
  },
  {
    id: '2',
    icon: '🎨',
    title: 'Retušovanie v cene',
    description: 'Každá fotka prejde profesionálnym retušom. Žiadne skryté poplatky za úpravy.',
  },
  {
    id: '3',
    icon: '⚡',
    title: 'Rýchle dodanie',
    description: 'Hotové fotky do 48 hodín v online galérii. Vždy včas, bez čakania.',
  },
  {
    id: '4',
    icon: '💯',
    title: 'Spokojnosť garantovaná',
    description: 'Ak nie ste spokojní, fotografujeme znova zdarma. Vaša spokojnosť je priorita.',
  },
];

// ---------------------------------------------------------------------------
// PORTFOLIO CATEGORIES (templateType: 'portfolio')
// ---------------------------------------------------------------------------
export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'svadby',
    name: 'Svadby',
    images: [
      { id: 's1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 1' },
      { id: 's2', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 2' },
      { id: 's3', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 3' },
      { id: 's4', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 4' },
      { id: 's5', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 5' },
      { id: 's6', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop', alt: 'Svadobné fotenie 6' },
    ],
  },
  {
    id: 'portraty',
    name: 'Portréty',
    images: [
      { id: 'p1', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', alt: 'Portrét 1' },
      { id: 'p2', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', alt: 'Portrét 2' },
      { id: 'p3', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', alt: 'Portrét 3' },
      { id: 'p4', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', alt: 'Portrét 4' },
    ],
  },
  {
    id: 'produktove',
    name: 'Produktové',
    images: [
      { id: 'pr1', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop', alt: 'Produktové fotenie 1' },
      { id: 'pr2', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop', alt: 'Produktové fotenie 2' },
      { id: 'pr3', src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop', alt: 'Produktové fotenie 3' },
      { id: 'pr4', src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop', alt: 'Produktové fotenie 4' },
    ],
  },
  {
    id: 'eventy',
    name: 'Eventy',
    images: [
      { id: 'e1', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', alt: 'Event 1' },
      { id: 'e2', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop', alt: 'Event 2' },
      { id: 'e3', src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop', alt: 'Event 3' },
      { id: 'e4', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop', alt: 'Event 4' },
    ],
  },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services') — not used for portfolio
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule') — not used for portfolio
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu') — not used for portfolio
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// PRICING PLANS (templateType: 'portfolio')
// ---------------------------------------------------------------------------
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'mini',
    name: 'Mini',
    price: '€149',
    features: [
      '1 hodina fotenia',
      '20 retušovaných fotiek',
      'Online galéria',
    ],
  },
  {
    id: 'standard',
    name: 'Štandard',
    price: '€299',
    highlighted: true,
    features: [
      '2 hodiny fotenia',
      '50 retušovaných fotiek',
      'Online galéria',
      '5 printov 20×30 cm',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '€499',
    features: [
      '4 hodiny fotenia',
      '100+ retušovaných fotiek',
      'Online galéria',
      'Fotoalbum 30×30 cm',
    ],
  },
];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Lucia M.',
    initial: 'L',
    text: 'Najkrajšie svadobné fotky aké sme mohli dostať. Fotograf bol diskrétny, priateľský a zachytil každý moment dokonale.',
    rating: 5,
    detail: 'Svadba',
  },
  {
    id: '2',
    name: 'Peter K.',
    initial: 'P',
    text: 'Profesionálny prístup, fotky boli hotové do 24 hodín. Naši kolegovia boli nadšení z výsledkov firemného eventu.',
    rating: 5,
    detail: 'Firemný event',
  },
  {
    id: '3',
    name: 'Jana S.',
    initial: 'J',
    text: 'S deťmi to nie je jednoduché ale fotograf bol trpezlivý a výsledky sú úžasné. Rodinné fotenie sa podarilo na výbornú.',
    rating: 5,
    detail: 'Rodinné fotenie',
  },
  {
    id: '4',
    name: 'Marek H.',
    initial: 'M',
    text: 'Naše produkty konečne vyzerajú ako z katalógu. Spolupráca bola príjemná a rýchla. Jednoznačne odporúčam.',
    rating: 5,
    detail: 'Produktové fotky',
  },
];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Adresa',
    lines: ['Hlavná 15', '911 01 Trenčín'],
  },
  {
    icon: '📞',
    title: 'Telefón',
    lines: ['+421 901 234 567'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@lensart.sk'],
  },
  {
    icon: '🕐',
    title: 'Otváracie hodiny',
    lines: ['Po–Pi: 9:00–18:00', 'So: podľa dohody'],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Ako prebieha fotenie?',
    answer:
      'Dohodneme si termín, miesto a štýl fotenia. Fotenie trvá 1–4 hodiny podľa zvoleného balíka. Poradím vám s oblečením aj lokáciou.',
  },
  {
    id: '2',
    question: 'Kedy dostanem fotky?',
    answer:
      'Hotové retušované fotky dostanete do 48 hodín v súkromnej online galérii. Printy a fotoalbum doručíme do 7 pracovných dní.',
  },
  {
    id: '3',
    question: 'Môžem si vybrať fotky na retušovanie?',
    answer:
      'Áno, po fotení vám pošlem náhľady všetkých snímok a vy si vyberiete tie, ktoré chcete retušovať v rámci vášho balíka.',
  },
  {
    id: '4',
    question: 'Fotografujete aj v exteriéri?',
    answer:
      'Áno, fotografujem kdekoľvek — ateliér, príroda, mesto, vaša firma alebo domov. Lokáciu si dohodneme podľa vašich predstáv.',
  },
  {
    id: '5',
    question: 'Čo ak prší v deň fotenia?',
    answer:
      'Externé fotenie v prípade nepriaznivého počasia presunieme na náhradný termín zdarma. Vnútorné fotenie prebieha za každého počasia.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Som asistent LensArt. Ako vám môžem pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: 'Cenník služieb',
      response:
        'Naše balíky začínajú od €149 (Mini — 1 hodina, 20 fotiek), €299 (Štandard — 2 hodiny, 50 fotiek) a €499 (Premium — 4 hodiny, 100+ fotiek). Všetky ceny zahŕňajú profesionálny retuš a online galériu.',
    },
    {
      id: '2',
      label: 'Objednať fotenie',
      response:
        'Skvelá voľba! Vyplňte prosím rezervačný formulár nižšie na stránke alebo nás kontaktujte na +421 901 234 567. Ozveme sa vám do 24 hodín.',
    },
    {
      id: '3',
      label: 'Ukážky prác',
      response:
        'Naše portfolio nájdete priamo na tejto stránke — svadby, portréty, produktové fotky aj eventy. Pozrite si jednotlivé kategórie vyššie.',
    },
  ],
  fallbackResponse:
    'Ďakujem za správu. Ozvem sa vám čo najskôr. Prípadne nás kontaktujte na info@lensart.sk alebo +421 901 234 567.',
};

// ---------------------------------------------------------------------------
// Unused gallery images type — kept for GallerySection compatibility
// ---------------------------------------------------------------------------
export const GALLERY_IMAGES: GalleryImage[] = [];
