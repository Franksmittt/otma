/**
 * Editorial stock imagery (Unsplash) for credibility until real OTMA photos live in /public.
 * Replace with on-brand shots (e.g. fleet at Joanique Eco Park) when available.
 */
export const marketingImages = {
  deliveryVan: {
    src: "https://images.unsplash.com/photo-1581578731548-c64688cc19f2?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional delivery van, monitored furniture removal operations",
  },
  movingBoxes: {
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80",
    alt: "Stacked moving boxes ready for careful loading and transport",
  },
  warehouse: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    alt: "Organised warehouse shelving, secure storage and logistics",
  },
  modernHome: {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    alt: "Bright residential living space, home furniture removal context",
  },
  officePlanning: {
    src: "https://images.unsplash.com/photo-1600880312082-16cb4fccd6be?auto=format&fit=crop&w=1600&q=80",
    alt: "Office team planning session, commercial relocation services",
  },
  cityLogistics: {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
    alt: "Urban road network, long-distance and regional moving logistics",
  },
  apartmentInterior: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern apartment interior, typical Alberton and East Rand relocations",
  },
  livingRoomFurniture: {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80",
    alt: "Living room with sofa and furnishings, careful furniture handling",
  },
  houseKeys: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    alt: "House keys on a table, new home handover and property moves",
  },
  bedroomInterior: {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    alt: "Bedroom interior, packing and bedroom furniture removals",
  },
  cozyInterior: {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    alt: "Well-lit home interior, residential moving and placement",
  },
  connectivity: {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    alt: "Global connectivity concept, live GPS tracking for monitored moves",
  },
  petDog: {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
    alt: "Dog on a walk, pet-friendly relocation and VIP pet moves",
  },
  classicCar: {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    alt: "Vehicle detail, specialist monitored vehicle transport",
  },
  bathroomClean: {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    alt: "Clean modern bathroom, post-move cleaning and handover standards",
  },
  packingSupplies: {
    src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
    alt: "Labels, tape, and packing materials, organised prep before furniture is moved",
  },
  protectiveWrapping: {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    alt: "Bubble wrap and cushioning, extra protection for fragile items and glassware",
  },
} as const;

export type MarketingImageKey = keyof typeof marketingImages;
