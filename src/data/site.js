// ─────────────────────────────────────────────────────────────
// Jay Group website copy. Every word on the site lives here.
// Anything in [square brackets] is shown with a dashed gold
// underline on the site and needs confirming before going live.
// ─────────────────────────────────────────────────────────────
import dronagiriSchool from '../assets/contracting/dronagiri-school.webp';
import hospitalSaatRasta from '../assets/contracting/hospital-saat-rasta.webp';
import prideHospital from '../assets/contracting/pride-hospital.webp';
import kshirsagarResidence from '../assets/contracting/kshirsagar-residence.webp';
import residenceSolapur from '../assets/contracting/residence-solapur.webp';
import residenceGharkul from '../assets/contracting/residence-gharkul.webp';
import residenceSolapurEast from '../assets/contracting/residence-solapur-east.webp';
import buildingSolapur from '../assets/contracting/building-solapur.webp';
import apartmentsSolapur from '../assets/contracting/apartments-solapur.webp';
import bungalowSolapur from '../assets/contracting/bungalow-solapur.webp';
import bungalowHyderabadRoad from '../assets/contracting/bungalow-hyderabad-road.webp';
// Line illustrations for contracting work (no site photos supplied).
import artTowers from '../assets/contracting/telecom-towers.svg';
import artInBuilding from '../assets/contracting/in-building.svg';
import artInfill from '../assets/contracting/infill-sites.svg';
import artTrench from '../assets/contracting/trenching.svg';
// Client logos (official files from Wikimedia / the client's own site).
import logoReliance from '../assets/clients/reliance.svg';
import logoJio from '../assets/clients/jio.svg';
import logoVodafone from '../assets/clients/vodafone.svg';
import logoNarayana from '../assets/clients/narayana.svg';
// Taken from the current jaygrp.com site.
import easternOne from '../assets/projects/the-eastern-one.webp';
import founderPhoto from '../assets/people/jayant-hole-patil-portrait.webp';
import director2Photo from '../assets/people/director-2.webp';
import saudagarPhoto from '../assets/people/saudagar.webp';
import director3Photo from '../assets/people/director-3.webp';
import patilPhoto from '../assets/people/pratapsingh-patil.webp';
import jayramImg from '../assets/projects/jayram-residences.webp';
import jvvImg from '../assets/projects/jay-vijay-vihar.webp';
import jaylaxmiImg from '../assets/projects/jaylaxmi-1.webp'; // car number plates blurred
import jaylaxmi2Img from '../assets/projects/jaylaxmi-2.webp'; // car number plates blurred
import jaylaxmi3Img from '../assets/projects/jaylaxmi-3.webp'; // car number plates blurred
import jaylaxmi4Img from '../assets/projects/jaylaxmi-4.webp'; // car number plates blurred
import jayPlazaImg from '../assets/projects/jay-plaza.webp'; // car number plates blurred
import jaykishanImg from '../assets/projects/jaykishan.webp'; // car number plate blurred
import jayneelImg from '../assets/projects/jayneel.webp'; // car plates and house number blurred
import jayendraImg from '../assets/projects/jayendra-arcade.webp'; // car number plates blurred
import logoVaishnavi from '../assets/group/vaishnavi.png';
import logoSpace5121 from '../assets/group/space-5121.png';
import logoViraj from '../assets/group/viraj.png';
import logoJayPalace from '../assets/group/jay-palace-inn.png';
import logoJpBar from '../assets/group/jp-bar-resto.png';
import jvSquareImg from '../assets/projects/jv-square.webp'; // car number plate blurred
import prajayImg from '../assets/projects/prajay-heights.webp'; // car number plates blurred
// From The Eastern One brochure.
import teoFloorplan from '../assets/projects/teo-floorplan.webp';
import teoInterior from '../assets/projects/teo-interior.webp';
import teoTemple from '../assets/projects/teo-temple.webp';
import teoParking from '../assets/projects/teo-parking.webp';
import teoArrival from '../assets/projects/teo-arrival.webp';
import teoSolar from '../assets/projects/teo-rooftop-solar.webp';
import teoTerrace from '../assets/projects/teo-terrace.webp';
import teoFront from '../assets/projects/teo-front.webp';
import teoNight from '../assets/projects/teo-night.webp';
import teoDusk from '../assets/projects/teo-dusk.webp';
import teoLogo from '../assets/projects/teo-logo.webp';
// From the Jay Vijay Vihar brochure.
import jvvEntrance from '../assets/projects/jvv-entrance.webp';
import jvvPlots from '../assets/projects/jvv-plots.webp';
import jvvLayout from '../assets/projects/jvv-layout.webp';



// Contact details: fill these in and every Call / WhatsApp button updates.
// Phone in international format without "+" or spaces, e.g. "919876543210".
// Numbers and email from the Jay Vijay Vihar brochure.
export const CONTACT = {
  phone: '919326753399',
  phoneDisplay: '+91 93267 53399',
  phone2Display: '+91 98908 33899',
  whatsapp: '919326753399',
  email: 'contact@jaygrp.com',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jay+Group+Builders+%26+Developers+New+Pachha+Peth+Solapur',
  address: '328/35, New Pachha Peth, opp. Walchand College Hostel, Datta Nagar, Sakhar Peth, Solapur, Maharashtra 413005',
  instagram: 'https://www.instagram.com/jaygroup_builders/',
  facebook: 'https://www.facebook.com/share/1J7MJ4iViw/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/company/jay-group-builders-developers',
};

export const telHref = CONTACT.phone ? `tel:+${CONTACT.phone}` : '/contact';
export const waHref = (CONTACT.whatsapp || CONTACT.phone)
  ? `https://wa.me/${CONTACT.whatsapp || CONTACT.phone}`
  : '/contact';

// ── Navigation ───────────────────────────────────────────────
export const TOP_MENU = [
  { label: 'Ongoing', to: '/projects?status=Ongoing' },
  { label: 'Delivered', to: '/projects?status=Delivered' },
  { label: 'Contracting', to: '/contracting' },
  { label: 'The Group', to: '/group' },
  { label: 'About', to: '/about' },
];

export const MEGA_MENU = [
  {
    title: 'Explore',
    links: [
      { label: 'Ongoing Projects', to: '/projects?status=Ongoing' },
      { label: 'Delivered Projects', to: '/projects?status=Delivered' },
      { label: 'Contracting', to: '/contracting' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Who We Are', to: '/about' },
      { label: 'Our Founder', to: '/about#founder' },
      { label: 'Group Verticals', to: '/group' },
      { label: 'Careers', to: '/contact?type=Careers' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Get in Touch', to: '/contact' },
      { label: 'WhatsApp', href: 'whatsapp' },
      { label: 'Customer Support', to: '/contact?type=Buy a Home' },
      { label: 'Land Owners & JV', to: '/contact?type=Land Owner / Joint Venture' },
      { label: 'Vendors', to: '/contact?type=Vendor & Supplier' },
    ],
  },
];

// ── Hero ─────────────────────────────────────────────────────
// Shown before the film loads, and instead of it for visitors who turn off motion.
export const HERO = {
  poster: teoDusk,
};

export const SEARCH_FILTERS = {
  status: ['Ongoing', 'Delivered'],
  type: ['Residential', 'Commercial', 'Plots'],
  config: ['2 BHK', '3 BHK', 'Shops', 'Offices'],
};

// ── Projects ─────────────────────────────────────────────────
// status: Ongoing | Delivered. category: Residential | Commercial | Mixed Use
export const PROJECTS = [
  {
    slug: 'the-eastern-one',
    name: 'The Eastern One',
    status: 'Ongoing',
    category: 'Residential',
    tags: ['Flagship', 'Ongoing'],
    // Details from the project brochure (public/brochures/the-eastern-one.pdf).
    line: 'Crafted for Elevated Living.',
    type: '2 & 3 BHK Residences',
    size: '811 – 1,206 sq ft carpet',
    configs: ['2 BHK', '3 BHK'],
    starting: '₹82 Lakh onwards',
    logo: teoLogo, // shown in place of the name wherever the project appears
    image: teoFront,
    featureImage: teoNight,
    brochure: '/brochures/the-eastern-one.pdf',
    overview: 'A contemporary residential address at Gentyal Chowk, Solapur, for those who expect more from the place they call home. Thoughtful planning, spacious residences and refined architecture come together. Designed for today, built for tomorrow.',
    highlights: [
      'A distinctive, contemporary façade',
      'Spacious living areas and private balconies',
      'Rooftop terrace with solar power',
      'Two-storey parking',
    ],
    layout: teoFloorplan,
    layoutDark: true,
    plans: [
      { label: '2 BHK', size: '811 – 873 sq ft carpet, incl. balcony' },
      { label: '3 BHK', size: '1,176 – 1,206 sq ft carpet, incl. balcony' },
    ],
    amenities: [
      'Temple, a sacred space close to home',
      'Two-storey parking',
      'Landscaped arrival and pathways',
      'Rooftop solar power',
      'Rooftop terrace with gazebos',
      '24×7 security',
      'CCTV across key common areas',
      'High-speed lifts',
      'Fire safety system',
      'Power backup for common areas',
      '24×7 water supply',
    ],
    distances: [
      'Gentyal Chowk, Solapur',
      'Close to major roads and civic amenities',
    ],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=MW5C%2BX4X+Solapur',
    gallery: [teoNight, teoDusk, easternOne, teoInterior, teoTemple, teoArrival, teoTerrace, teoSolar, teoParking],
  },
  {
    slug: 'jay-vijay-vihar',
    name: 'Jay Vijay Vihar',
    status: 'Ongoing',
    category: 'Residential',
    tags: ['Ongoing', 'Plots'],
    // Details from the project brochure (public/brochures/jay-vijay-vihar.pdf).
    line: 'Room to Build Your Own Legacy.',
    type: 'NA Residential Plots',
    size: '1,000 & 1,100 sq ft',
    configs: ['Plots'],
    starting: '₹13.50 Lakh onwards',
    image: jvvImg,
    brochure: '/brochures/jay-vijay-vihar.pdf',
    overview: 'A planned township of NA-clear residential plots near Old Kumbhari Road and the new Vidi Gharkul Road, beside Vijay Nagar. Choose a 1,000 or 1,100 sq ft plot and build the home you have in mind.',
    highlights: [
      'NA-clear plots',
      'Independent 7/12 for every plot',
      'Independent electricity connection',
      'Gated township with internal roads',
    ],
    plansTitle: 'Plot Sizes & Layout',
    layout: jvvLayout,
    plans: [
      { label: '1,000 sq ft', size: 'Room to give your idea shape.' },
      { label: '1,100 sq ft', size: 'A little more space, more possibilities.' },
    ],
    amenities: [
      'Clean, planned surroundings',
      'Street lights along every road',
      'Water supply',
      'Green, open surroundings',
      '9 m and 6 m internal roads',
      'Open spaces and amenity spaces',
      'Safe, well-planned neighbourhood for families',
    ],
    distances: [
      'Near Old Kumbhari Road',
      'Near the new Vidi Gharkul Road',
      'Beside Vijay Nagar, Solapur',
    ],
    gallery: [jvvEntrance, jvvPlots],
  },
  {
    slug: 'jayram-residences',
    name: 'Jayram Residences',
    status: 'Delivered',
    featured: true, // shown on the home page
    category: 'Residential',
    label: 'Family Living',
    meta: '2 BHK · 980 – 1,220 sq ft',
    line: 'Where legacy meets modern comfort.',
    type: '2 BHK',
    size: '980 – 1,220 sq ft',
    configs: ['2 BHK'],
    image: jayramImg,
  },
  {
    slug: 'jaylaxmi-1',
    name: 'Jaylaxmi I',
    status: 'Delivered',
    category: 'Mixed Use',
    label: 'Landmark Living',
    meta: '2 & 3 BHK · 1,000 – 1,600 sq ft',
    line: 'The first of four phases Solapur grew up with.',
    type: '2 & 3 BHK · Residential & Commercial',
    size: '1,000 – 1,600 sq ft',
    configs: ['2 BHK', '3 BHK', 'Shops'],
    image: jaylaxmiImg,
  },
  {
    slug: 'jaylaxmi-2',
    name: 'Jaylaxmi II',
    status: 'Delivered',
    category: 'Mixed Use',
    label: 'Residential & Commercial',
    line: 'Homes above, shops below.',
    type: '2 & 3 BHK · Residential & Commercial',
    size: '1,000 – 1,600 sq ft',
    configs: ['2 BHK', '3 BHK', 'Shops'],
    image: jaylaxmi2Img,
  },
  {
    slug: 'jaylaxmi-3',
    name: 'Jaylaxmi III',
    status: 'Delivered',
    category: 'Residential',
    label: 'Residential',
    line: 'Glass, colour and light, over covered parking.',
    type: '2 & 3 BHK',
    size: '1,000 – 1,600 sq ft',
    configs: ['2 BHK', '3 BHK'],
    image: jaylaxmi3Img,
  },
  {
    slug: 'jaylaxmi-4',
    name: 'Jaylaxmi IV',
    status: 'Delivered',
    category: 'Residential',
    label: 'Residential',
    line: 'Open balconies on every floor, above stilt parking.',
    type: '2 & 3 BHK',
    size: '1,000 – 1,600 sq ft',
    configs: ['2 BHK', '3 BHK'],
    image: jaylaxmi4Img,
  },
  {
    slug: 'jay-plaza',
    name: 'Jay Plaza',
    status: 'Delivered',
    category: 'Residential',
    label: 'Residential',
    meta: '[Configuration] · [XX sq ft]',
    line: 'Balconies and greenery on every floor, above stilt parking.',
    type: '[Configuration]',
    size: '[XX sq ft]',
    configs: [],
    image: jayPlazaImg,
  },
  {
    slug: 'jaykishan',
    name: 'Jaykishan',
    status: 'Delivered',
    category: 'Residential',
    line: 'Homes designed around family life.',
    type: '2 BHK Family Homes',
    size: '950 – 1,200 sq ft',
    configs: ['2 BHK'],
    image: jaykishanImg,
  },
  {
    slug: 'jayneel',
    name: 'Jayneel',
    status: 'Delivered',
    category: 'Residential',
    line: 'A distinctive address by Jay Group.',
    type: 'Premium Residences',
    size: '[XX sq ft]',
    configs: [],
    image: jayneelImg,
  },
  {
    slug: 'jayendra-arcade',
    name: 'Jayendra Arcade',
    status: 'Delivered',
    featured: true, // shown on the home page
    category: 'Mixed Use',
    label: 'Residential & Commercial',
    line: 'Crafted for comfort. Built to last.',
    type: 'Shops & Residences',
    size: '[XX sq ft]',
    configs: [],
    image: jayendraImg,
  },
  {
    slug: 'jv-square',
    name: 'JV Square',
    status: 'Delivered',
    featured: true, // shown on the home page
    category: 'Mixed Use',
    label: 'Residential & Commercial',
    line: 'Street-front showrooms with homes rising above.',
    type: 'Shops & Residences',
    size: '[XX sq ft]',
    configs: ['Shops'],
    image: jvSquareImg,
  },
  {
    slug: 'prajay-heights',
    name: 'Prajay Heights',
    status: 'Delivered',
    featured: true, // shown on the home page
    category: 'Mixed Use',
    label: 'Residential & Commercial',
    line: 'Ten floors of homes above street-level shops.',
    type: 'Shops & Residences',
    size: '[XX sq ft]',
    configs: ['Shops'],
    image: prajayImg,
  },
];

export const ONGOING_SECTION = {
  eyebrow: 'NOW BUILDING',
  heading: "What We're Building Next.",
  subtext: 'Two new addresses taking shape in Solapur. Scroll to explore.',
};

export const FEATURED_ONGOING = {
  slug: 'the-eastern-one',
  eyebrow: 'THE EASTERN ONE',
  heading: 'Your Next Address.',
  subtext: 'A contemporary residential address at Gentyal Chowk, Solapur. Thoughtful planning, spacious residences and refined architecture.',
  points: [
    '2 & 3 BHK residences with private balconies',
    'Rooftop terrace with solar power',
    '24×7 security, CCTV and high-speed lifts',
  ],
  cta: 'Explore The Eastern One',
};

export const DELIVERED_SECTION = {
  eyebrow: 'DELIVERED',
  heading: 'Built. Delivered. Lived In.',
  subtext: 'Addresses across Solapur where families live and businesses grow.',
};

// ── Beyond Real Estate ───────────────────────────────────────
export const VERTICALS_SECTION = {
  heading: 'Beyond Real Estate.',
  subtext: 'The same care, in the businesses we run beyond buildings.',
};

// Logos cut from the Jay Group banner artwork (JAYBANNER LOGO.svg).
export const VERTICALS = [
  { title: 'Vaishnavi Clinic', line: 'Skin, hair and laser clinic.', logo: logoVaishnavi },
  { title: 'Space 5121', line: 'Coworking space in Solapur.', logo: logoSpace5121 },
  { title: 'Viraj Builders & Developers', line: 'Builders and developers.', logo: logoViraj },
  { title: 'Hotel Jay Palace Inn', line: 'Hotel stays in Solapur.', logo: logoJayPalace },
  { title: 'JP Bar & Resto', line: 'Bar and restaurant.', logo: logoJpBar },
];

// ── Legacy ───────────────────────────────────────────────────
export const LEGACY = {
  heading: 'A Legacy, Chapter by Chapter.',
  subtext: 'From electrical contracting to a diversified group.',
  journey: [
    { title: 'Electrical Contracting', line: 'Where the discipline began.' },
    { title: 'Business Ventures', line: 'Growing into complementary enterprises.' },
    { title: 'Construction & Infrastructure', line: 'Scaling execution to larger projects.' },
    { title: 'Real Estate', line: 'Landmarks from Jaylaxmi to The Eastern One.' },
    { title: 'Today', line: 'A diversified group, building its next chapter.' },
  ],
  numbers: [
    { value: 20, suffix: '+', label: 'Years of Entrepreneurship' },
    { value: 15, suffix: '+', label: 'Residential & Commercial Projects' },
    { value: 1000, suffix: '+', label: 'Homes & Spaces Delivered' },
  ],
};

// ── Leadership ───────────────────────────────────────────────
export const FOUNDER = {
  eyebrow: 'THE VISION BEHIND JAY GROUP',
  name: 'Mr. Jayant Hole-Patil',
  title: 'Founder & Managing Director',
  quote: '"A business is not defined by how it begins, but by how well it continues."',
  body: 'He started in electrical contracting. Today he leads a group across real estate, construction and more, built on one belief: businesses should be sustainable, professionally run and valuable to Solapur for decades.',
  photo: founderPhoto,
};

export const BOARD = {
  heading: 'The People Behind Jay Group.',
  subtext: 'The leadership behind every Jay Group project.',
  directors: [
    { name: 'Dr. Pratapsingh Vedprakash Patil', designation: 'Director', photo: patilPhoto },
    { name: 'Mr. Saudagar Shivaji Takale', designation: 'Director', photo: saudagarPhoto },
    { name: 'Mr. Shridhar Pulgam', designation: 'Director', photo: director2Photo },
    { name: 'Mr. Shrikant Mallade', designation: 'Director', photo: director3Photo },
  ],
};

// ── Contact ──────────────────────────────────────────────────
export const CONTACT_SECTION = {
  heading: 'Every Address Begins with a Conversation.',
  subtext: "Looking for a home, an office, a partnership or a business opportunity? Tell us, and we'll take it from there.",
  enquiryTypes: ['Buy a Home', 'Commercial Space', 'Land Owner / Joint Venture', 'Vendor & Supplier', 'Careers'],
};

// ── Contracting page ─────────────────────────────────────────
export const CONTRACTING = {
  headline: 'Built for Others. Built Beyond Spec.',
  // Services and the featured project are drawn from the Dronagiri school tender (Aug 2025).
  services: [
    { title: 'Civil & RCC Works', line: 'Plinth, RCC frame, slabs, staircases and blockwork, built to structural drawings.' },
    { title: 'Finishing & MEP', line: 'Plaster, tiling, doors, windows, waterproofing, painting, plumbing and electrical.' },
    { title: 'Telecom Infrastructure', line: 'Electrical, civil and trenching works for 4G tower and in-building sites.' },
    { title: 'Site Infrastructure', line: 'Compound walls, gates, pathways, drainage and landscaped grounds.' },
  ],
  featured: [
    {
      group: 'institutions',
      name: 'Composite School & Junior College, Dronagiri',
      meta: [
        'Shri Bhairavnath Nisarg Mandal',
        'Dronagiri, Uran, Navi Mumbai',
        'Phase I (G+2)',
        '52,814 sq ft',
        '2025',
        'Ongoing',
      ],
      summary: 'A composite school and junior college building on Plot 73, Sector 55, designed by Dhumal & Associates. Phase I covers the ground and two upper floors: plinth and RCC frame, blockwork, plaster, tiling, doors and windows, plumbing, electrical, waterproofing and painting, plus a 3,00,000-litre underground tank, compound wall, pathways and landscaped grounds.',
      image: dronagiriSchool,
      impression: true,
    },
    {
      group: 'institutions',
      name: 'Dr Gore Hospital, Saat Rasta',
      meta: [
        'Saat Rasta, Solapur',
        'Hospital building (Stilt + 4)',
        'Ongoing',
      ],
      summary: 'A multi-storey hospital on a corner plot, with stilt parking, a cantilevered dark-clad frontage, timber-finish and textured white façades, deep-set windows and a secure gated forecourt.',
      image: hospitalSaatRasta, // car number plate blurred
      impression: true,
    },
    {
      group: 'institutions',
      name: 'Pride Multispeciality Hospital, Solapur',
      meta: [
        'Solapur',
        'Multispeciality hospital',
        'Ongoing',
      ],
      summary: 'A multi-storey multispeciality hospital with a full-height glazed atrium, deep brown textured cladding, vertical fins on the main façade and a landscaped, gated street frontage.',
      image: prideHospital, // car number plates blurred
      impression: true,
    },
    {
      group: 'homes',
      name: 'Private Residence, Akashvani',
      meta: [
        'Akashvani, Solapur',
        'Private residence (G+1)',
        'Completed',
      ],
      summary: 'A two-storey family home in Akashvani, Solapur: a crisp white form with terracotta jaali screens, a timber-clad entrance, landscaped planters and a paved forecourt.',
      image: kshirsagarResidence, // number plate blurred
      impression: true,
    },
    {
      group: 'homes',
      name: 'Private Residence, Solapur',
      meta: [
        'Solapur',
        'Independent bungalow',
        'Completed',
      ],
      summary: 'A compact family bungalow with a layered grey and cream façade, natural stone cladding, a cantilevered white canopy over the entrance and a matching slatted gate and compound wall.',
      image: residenceSolapur, // house number blurred
      impression: true,
    },
    {
      group: 'homes',
      name: 'Shop & Residence, Gharkul',
      meta: [
        'Gharkul, Solapur',
        'Retail + residence (G+2)',
        'Completed',
      ],
      summary: 'A three-storey building with a glass-fronted showroom at street level and two floors of family home above, finished in stone cladding, warm render and plum accents, with glass-railed balconies.',
      image: residenceGharkul,
      impression: true,
    },
    {
      group: 'homes',
      name: 'Private Residence, Solapur East',
      meta: [
        'Solapur East',
        'Independent bungalow',
        'Completed',
      ],
      summary: 'A family bungalow with a bold ochre, plum and white façade, stone-clad entrance, a terrace with steel railings above, and a landscaped compound wall with a slatted gate.',
      image: residenceSolapurEast,
      impression: true,
    },
    {
      group: 'homes',
      name: 'Residential Building, Solapur',
      meta: [
        'Solapur',
        'Residential building (G+2)',
        'Completed',
      ],
      summary: 'A three-storey residential building with a bold ochre, maroon and grey façade, framed planter windows, a stone-clad stair tower and an open entrance court with a timber-slat gate.',
      image: buildingSolapur,
      impression: true,
    },
    {
      group: 'homes',
      name: 'Apartment Building, Solapur',
      meta: [
        'Solapur',
        'Stilt + 3 floors',
        'Completed',
      ],
      summary: 'A four-level apartment building over stilt parking, with a gold-framed façade, textured stone cladding, ochre panels, a balcony on every floor and a rooftop terrace.',
      image: apartmentsSolapur,
      impression: true,
    },
    {
      group: 'homes',
      name: 'Single-Storey Bungalow, Solapur',
      meta: [
        'Solapur',
        'Independent bungalow (G)',
        'Completed',
      ],
      summary: 'A ground-floor family bungalow with ochre and grey grooved panels, a stone-clad entrance under a deep white canopy, framed side windows and a landscaped compound wall.',
      image: bungalowSolapur,
      impression: true,
    },
    {
      group: 'homes',
      name: 'Private Residence, Hyderabad Road',
      meta: [
        'Hyderabad Road, Solapur',
        'Independent bungalow (G)',
        'Completed',
      ],
      summary: 'A single-storey corner bungalow in soft yellow and sage, with framed planter windows, a pergola-shaded entrance porch with steel railings and a paved, landscaped forecourt.',
      image: bungalowHyderabadRoad,
      impression: true,
    },
  ],
  // From work and contract orders issued to Jay International (2014–2017). Values kept private.
  others: [
    {
      name: 'Reliance Jio 4G Tower Sites',
      client: 'Reliance Corporate IT Park Ltd.',
      year: '2014',
      line: 'Electrical installation and services for about 120 4G sites across Maharashtra: poles, rooftop towers and ground-based masts and towers.',
      image: artTowers,
    },
    {
      name: 'Solapur In-Building Works',
      client: 'Reliance Corporate IT Park Ltd.',
      year: '2014',
      line: 'Trenching, ducting and manholes for building approaches at 20 sites in Solapur.',
      image: artInBuilding,
    },
    {
      name: '4G Infill Sites, Civil & Electrical',
      client: 'Reliance Corporate IT Park Ltd.',
      year: '2016–17',
      line: 'Open raft foundations, RCC, cabling and utilities for ten ground-based tower sites in Maharashtra.',
      image: artInfill,
    },
    {
      name: 'Endlink Project, Aurangabad',
      client: 'Vodafone Cellular Ltd.',
      year: '2014',
      line: '6,100 m of trenching and ducting across four sites in Aurangabad.',
      image: artTrench,
    },
  ],
  numbers: [
    // Contracting since 1998; the count updates itself each year.
    { value: new Date().getFullYear() - 1998, suffix: '+', label: 'Years in Contracting' },
    { value: 30, suffix: '+', label: 'Projects Completed' },
    { value: 10, suffix: '+', label: 'Clients' },
  ],
  clients: [
    { name: 'Reliance Industries', logo: logoReliance },
    { name: 'Jio', logo: logoJio },
    { name: 'Vodafone', logo: logoVodafone },
    { name: 'Narayana Schools', logo: logoNarayana },
  ],
  contact: {
    heading: 'Have a Project in Mind?',
    subtext: "Tell us the scope. We'll take it from there.",
  },
};

// ── Footer ───────────────────────────────────────────────────
export const FOOTER = {
  newsletterHeading: 'Be first to know.',
  newsletterText: 'Get launch news before it goes public.',
  legal: ['Privacy Policy', 'Terms & Conditions'],
  copyright: '© 2026 Jay Group. All rights reserved.',
};
