import { SUBURBS } from "./site-config";

export type SuburbSlug = (typeof SUBURBS)[number]["slug"];

export const SUBURB_CONTENT: Record<
  SuburbSlug,
  { title: string; h1: string; description: string; landmarks: string[]; tips?: string }
> = {
  alberton: {
    title: "Furniture removals Alberton",
    h1: "Furniture removals Alberton – secure, monitored moves",
    description:
      "On The Move Again is your local furniture removals expert in Alberton. Based at Joanique Eco Park, we serve the East Rand with real-time tracking, PMA accreditation, and full-service moves from local to long-distance.",
    landmarks: ["Joanique Eco Park", "N1, N3, N12 access", "Verwoerdpark", "Alberton CBD"],
  },
  meyersdal: {
    title: "Movers in Meyersdal",
    h1: "Best moving companies Meyersdal – estate & high-value relocations",
    description:
      "Meyersdal movers who understand estate living. We specialise in secure, white-glove relocations for Meyersdal Eco Estate, Nature Estate, and the wider area, with full monitoring and high-value care.",
    landmarks: ["Meyersdal Eco Estate", "Meyersdal Mall", "Meyersdal Primary", "Nature Estate"],
  },
  brackenhurst: {
    title: "Movers in Brackenhurst",
    h1: "Furniture removals Brackenhurst – family moves, large erven",
    description:
      "Reliable movers in Brackenhurst for families and large properties. We know the area: Hennie Alberts Avenue, schools, and the close-knit community. We deliver monitored, professional moves.",
    landmarks: ["Hennie Alberts Avenue", "Hoërskool Alberton", "Laerskool Orion"],
  },
  "new-redruth": {
    title: "Movers in New Redruth",
    h1: "Moving companies New Redruth – clusters & new developments",
    description:
      "New Redruth movers for townhouses and new developments. We serve Redruth Village, Clinton Clinic area, and Netcare Alberton Hospital vicinity with efficient, tracked furniture removals.",
    landmarks: ["Redruth Village", "Clinton Clinic", "Netcare Alberton Hospital"],
  },
  randhart: {
    title: "Movers in Randhart",
    h1: "Furniture removals Randhart – established, peaceful moves",
    description:
      "Trusted movers in Randhart. We bring years of reliability and monitored service to Laerskool Randhart, Reading Golf Club, and the wider Randhart community.",
    landmarks: ["Laerskool Randhart", "Reading Golf Club"],
  },
  alberante: {
    title: "Movers in Alberante",
    h1: "Moving companies Alberante – quiet, high-income relocations",
    description:
      "Professional movers in Alberante. We serve Douglas Harris Drive and the Alrode-proximate area with secure, fully monitored furniture removals and storage options.",
    landmarks: ["Douglas Harris Drive", "Proximity to Alrode"],
  },
};
