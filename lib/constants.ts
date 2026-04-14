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
} from './types';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: USE_LOCAL_IMAGES
    ? '/images/hero.webp'
    : 'https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=1600&q=80',
  about: USE_LOCAL_IMAGES
    ? '/images/about.webp'
    : 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=800&q=80',
  gallery: USE_LOCAL_IMAGES
    ? [
        '/images/gallery/01.webp',
        '/images/gallery/02.webp',
        '/images/gallery/03.webp',
        '/images/gallery/04.webp',
        '/images/gallery/05.webp',
      ]
    : [
        'https://images.unsplash.com/photo-1586768702658-caf8a84e8b8e?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800&q=80',
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
      ],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: 'Domov', href: '#hero' },
  { label: 'Služby', href: '#services' },
  { label: 'Prečo my', href: '#why-us' },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Recenzie', href: '#reviews' },
  { label: 'Rezervácia', href: '#booking' },
  { label: 'Kontakt', href: '#contact' },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [
  { value: '15+', label: 'Rokov skúseností' },
  { value: '5000+', label: 'Spokojných zákazníkov' },
  { value: '98%', label: 'Spokojnosť' },
  { value: '24h', label: 'Expresné opravy' },
];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  {
    id: '1',
    icon: '🔧',
    title: 'Skúsení mechanici',
    description: 'Certifikovaní odborníci s dlhoročnou praxou na všetkých značkách vozidiel.',
  },
  {
    id: '2',
    icon: '⚡',
    title: 'Rýchly servis',
    description: 'Väčšinu opráv zvládneme do 24 hodín. Expresné opravy na počkanie.',
  },
  {
    id: '3',
    icon: '💰',
    title: 'Férové ceny',
    description: 'Transparentná cenová politika bez skrytých poplatkov. Cenová ponuka zadarmo.',
  },
  {
    id: '4',
    icon: '🛡️',
    title: 'Záruka na prácu',
    description: 'Na všetky opravy poskytujeme 12-mesačnú záruku. Vaša spokojnosť je priorita.',
  },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'diagnostics',
    name: 'Diagnostika',
    items: [
      {
        id: 'd1',
        name: 'Počítačová diagnostika',
        description: 'Kompletná diagnostika elektroniky vozidla',
        price: 'od 30 €',
        icon: '💻',
      },
      {
        id: 'd2',
        name: 'Geometria kolies',
        description: 'Nastavenie geometrie náprav pomocou 3D zariadenia',
        price: 'od 40 €',
        icon: '📐',
      },
      {
        id: 'd3',
        name: 'Kontrola pred kúpou',
        description: 'Detailná prehliadka vozidla pred nákupom',
        price: 'od 60 €',
        icon: '🔍',
      },
    ],
  },
  {
    id: 'repairs',
    name: 'Opravy',
    items: [
      {
        id: 'r1',
        name: 'Oprava motora',
        description: 'Generálna oprava, výmena tesnenia, remont',
        price: 'od 200 €',
        icon: '🔩',
      },
      {
        id: 'r2',
        name: 'Oprava prevodovky',
        description: 'Manuálne aj automatické prevodovky',
        price: 'od 150 €',
        icon: '⚙️',
      },
      {
        id: 'r3',
        name: 'Oprava bŕzd',
        description: 'Výmena platničiek, diskov, brzdových strmeňov',
        price: 'od 50 €',
        icon: '🛑',
      },
    ],
  },
  {
    id: 'maintenance',
    name: 'Údržba',
    items: [
      {
        id: 'm1',
        name: 'Výmena oleja',
        description: 'Motorový olej + filter, reset servisného intervalu',
        price: 'od 35 €',
        icon: '🛢️',
      },
      {
        id: 'm2',
        name: 'Výmena pneumatík',
        description: 'Prezutie, vyváženie, uskladnenie pneumatík',
        price: 'od 10 €/kus',
        icon: '🔄',
      },
      {
        id: 'm3',
        name: 'Klimatizácia',
        description: 'Plnenie, dezinfekcia, oprava klimatizácie',
        price: 'od 45 €',
        icon: '❄️',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Pondelok',
    entries: [
      { time: '08:00', name: 'Ranný servis', instructor: 'Martin K.' },
      { time: '10:00', name: 'Diagnostika', instructor: 'Jozef P.' },
      { time: '14:00', name: 'Odpoludňajší servis', instructor: 'Martin K.' },
    ],
  },
  {
    day: 'Utorok',
    entries: [
      { time: '08:00', name: 'Oprava bŕzd', instructor: 'Jozef P.' },
      { time: '11:00', name: 'Výmena oleja', instructor: 'Peter S.' },
      { time: '15:00', name: 'Geometria', instructor: 'Martin K.' },
    ],
  },
  {
    day: 'Streda',
    entries: [
      { time: '08:00', name: 'Ranný servis', instructor: 'Peter S.' },
      { time: '12:00', name: 'Klimatizácia', instructor: 'Jozef P.' },
      { time: '16:00', name: 'Expresný servis', instructor: 'Martin K.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Predjedlá',
    items: [
      { id: 's1', name: 'Cesnaková polievka', description: 'Tradičná slovenská cesnaková polievka s krutónmi', price: '4,50 €' },
      { id: 's2', name: 'Šalát Caesar', description: 'Rímsky šalát, parmezán, krutóny, Caesar dresing', price: '6,90 €' },
    ],
  },
  {
    id: 'mains',
    name: 'Hlavné jedlá',
    items: [
      { id: 'm1', name: 'Svíčková na smotane', description: 'Hovädzí sviečok, smotanová omáčka, knedľa', price: '13,90 €' },
      { id: 'm2', name: 'Grilovaný losos', description: 'Atlantický losos, zelenina, citronové maslo', price: '15,50 €' },
    ],
  },
  {
    id: 'drinks',
    name: 'Nápoje',
    items: [
      { id: 'd1', name: 'Domáca limonáda', description: 'Čerstvá limonáda s mätou alebo jahodami', price: '3,20 €' },
      { id: 'd2', name: 'Espresso', description: 'Dvojitý taliansky espresso', price: '1,80 €' },
    ],
  },
];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Michal Horváth',
    initial: 'M',
    text: 'Skvelý servis! Auto opravili za jeden deň a cena bola veľmi férová. Určite sa vrátim.',
    rating: 5,
    detail: 'Výmena spojky, Škoda Octavia',
  },
  {
    id: '2',
    name: 'Jana Kováčová',
    initial: 'J',
    text: 'Profesionálny prístup, priateľský personál. Diagnostiku urobili rýchlo a presne. Odporúčam!',
    rating: 5,
    detail: 'Diagnostika, Volkswagen Golf',
  },
  {
    id: '3',
    name: 'Tomáš Novák',
    initial: 'T',
    text: 'Prezutie pneumatík vykonali za 30 minút. Cena rozumná, práca kvalitná. Budem chodiť pravidelne.',
    rating: 5,
    detail: 'Výmena pneumatík, BMW 3',
  },
  {
    id: '4',
    name: 'Lucia Szabóová',
    initial: 'L',
    text: 'Kontrola pred kúpou ojazdenia mi ušetrila veľa starostí. Odhalili skryté závady. Ďakujem!',
    rating: 5,
    detail: 'Kontrola pred kúpou, Toyota Corolla',
  },
];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Adresa',
    lines: ['Priemyselná 15', '010 01 Žilina'],
  },
  {
    icon: '📞',
    title: 'Telefón',
    lines: ['+421 32 123 4567', '+421 903 456 789'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@autofix.sk', 'servis@autofix.sk'],
  },
  {
    icon: '🕐',
    title: 'Otváracie hodiny',
    lines: ['Po–Pia: 07:30–17:30', 'So: 08:00–12:00'],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Ako dlho trvá bežná oprava?',
    answer:
      'Väčšina bežných opráv (výmena oleja, bŕzd, pneumatík) sa vykonáva do 1–2 hodín. Väčšie opravy motora alebo prevodovky môžu trvať 1–3 dni. Presný čas vám povieme pri prevzatí vozidla.',
  },
  {
    id: '2',
    question: 'Poskytujete náhradné vozidlo počas opravy?',
    answer:
      'Áno, pri opravách trvajúcich dlhšie ako 1 deň vám poskytneme náhradné vozidlo zdarma. Stačí si to dopredu rezervovať.',
  },
  {
    id: '3',
    question: 'Aké platobné metódy akceptujete?',
    answer:
      'Akceptujeme hotovosť, platobné karty (Visa, Mastercard) aj bankový prevod. Na väčšie opravy je možné dohodnúť splátkový plán.',
  },
  {
    id: '4',
    question: 'Opravujete všetky značky áut?',
    answer:
      'Áno, opravujeme všetky bežné európske, japonské aj americké značky. Máme skúsenosti s vozidlami od Škody, VW, BMW, Mercedes, Toyota, Ford a mnohých ďalších.',
  },
  {
    id: '5',
    question: 'Je diagnostika spoplatnená?',
    answer:
      'Základná diagnostika je spoplatnená od 30 €. Pri následnom vykonaní opravy u nás vám poplatok za diagnostiku odčítame z celkovej ceny.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Som tu, aby som vám pomohol. Ako vám môžem pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: '📋 Cenník',
      response:
        'Naše ceny začínajú od 30 € za diagnostiku, od 35 € za výmenu oleja a od 50 € za opravu bŕzd. Pre presnú cenovú ponuku nás kontaktujte.',
    },
    {
      id: '2',
      label: '🕐 Otváracie hodiny',
      response: 'Sme otvorení Po–Pia od 07:30 do 17:30 a v Sobotu od 08:00 do 12:00. V nedeľu zatvorené.',
    },
    {
      id: '3',
      label: '📍 Kde sa nachádzate?',
      response: 'Nájdete nás na adrese Priemyselná 15, 010 01 Žilina. Sme 5 minút od diaľnice D1.',
    },
    {
      id: '4',
      label: '📅 Rezervácia',
      response:
        'Rezerváciu môžete urobiť cez formulár na tejto stránke, telefonicky na +421 32 123 4567 alebo nám napíšte e-mail.',
    },
  ],
  fallbackResponse:
    'Ďakujeme za správu! Pre rýchlejšiu odpoveď nás kontaktujte telefonicky na +421 32 123 4567 alebo e-mailom na info@autofix.sk.',
};
