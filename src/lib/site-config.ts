/**
 * On The Move Again – site-wide config (NAP, contact, suburbs, SEO).
 * Aligns with strategy docs: Joanique Eco Park, 072 100 0936, PMA/AMOSA.
 */

export const SITE = {
  name: "On The Move Again",
  tagline: "Alberton's Most Secure, Fully Monitored Relocation Experts",
  url: "https://otma.co.za",
  phone: "072 100 0936",
  phoneE164: "+27271000936",
  whatsapp: "27271000936",
  email: "sales@otma.co.za",
  address: {
    street: "Units 9 and 10, Joanique Eco Park, 186 2nd Avenue",
    locality: "Verwoerdpark, Alberton",
    postalCode: "1449",
    country: "ZA",
  },
  geo: {
    latitude: -26.2703,
    longitude: 28.1187,
  },
  hours: [
    { day: "Monday-Saturday", opens: "06:00", closes: "20:00" },
    { day: "Sunday", opens: "07:00", closes: "14:00" },
  ],
  rating: { value: 9.8, count: 35, best: 10 },
  accreditations: ["PMA", "AMOSA"],
} as const;

export const SUBURBS = [
  { slug: "alberton", name: "Alberton", character: "East Rand hub; N1, N3, N12 access" },
  { slug: "meyersdal", name: "Meyersdal", character: "Ultra-affluent; gated estates" },
  { slug: "brackenhurst", name: "Brackenhurst", character: "Family-oriented; large erven" },
  { slug: "new-redruth", name: "New Redruth", character: "Modernizing; high-density clusters" },
  { slug: "randhart", name: "Randhart", character: "Established; peaceful" },
  { slug: "alberante", name: "Alberante", character: "Quiet; high-income" },
] as const;

/** Top-level nav: links and dropdowns */
export const NAV = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All services" },
      { href: "/services/house-removals", label: "House & office removals" },
      { href: "/services/long-distance", label: "Long-distance moves" },
      { href: "/services/packing", label: "Packing & unpacking" },
      { href: "/services/cleaning", label: "Post-move cleaning" },
      { href: "/services/storage", label: "Storage" },
      { href: "/services/crate-rentals", label: "Crate rentals" },
      { href: "/services/pet-relocation", label: "Pet relocation" },
      { href: "/services/vehicle-transport", label: "Vehicle transport" },
    ],
  },
  { href: "/quote", label: "Get a Quote" },
  { href: "/track", label: "Track Your Move" },
  { href: "/about", label: "About" },
  {
    label: "More",
    children: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/partners", label: "Partners" },
    ],
  },
] as const;

/** Flat list for footer / simple menus (backward compatible) */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/track", label: "Track Your Move" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/partners", label: "Partners" },
] as const;
