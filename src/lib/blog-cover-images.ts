import { marketingImages } from "./marketing-images";

/** Optional cover per post (editorial, not a gallery). */
export function getBlogCover(slug: string): { src: string; alt: string } | undefined {
  const covers: Record<string, { src: string; alt: string }> = {
    "meyersdal-eco-estate-moving-guide": marketingImages.modernHome,
    "blind-moving-trucks-cargo-theft-risk": marketingImages.cityLogistics,
    "plastic-crates-vs-cardboard-boxes": marketingImages.movingBoxes,
    "moving-insurance-south-africa-git-vs-carriers-liability": marketingImages.houseKeys,
    "new-redruth-brackenhurst-relocation-guide-2026": marketingImages.apartmentInterior,
    "service-recovery-paradox-moving-companies": marketingImages.officePlanning,
    "moving-company-scams-gauteng-2026": marketingImages.deliveryVan,
    "hidden-cost-cheap-movers": marketingImages.livingRoomFurniture,
    "moving-checklist-south-africa-2026": marketingImages.movingBoxes,
    "office-relocations-alberton-alrode": marketingImages.officePlanning,
  };
  return covers[slug];
}
