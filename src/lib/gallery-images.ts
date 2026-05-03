/**
 * OTMA photo gallery. Source files were imported from Facebook export filenames and
 * copied to `public/images/gallery/otma-gallery-001.jpg` … `otma-gallery-116.jpg`.
 * Re-order list in `scripts/gallery-order.txt` and re-run the copy script if you replace images.
 */

export type GalleryImage = {
  src: string;
  alt: string;
};

const GALLERY_COUNT = 116;

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: GALLERY_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(3, "0");
  return {
    src: `/images/gallery/otma-gallery-${n}.jpg`,
    alt: `On The Move Again monitored furniture removals, fleet, and crew in Alberton and Gauteng (photo ${i + 1} of ${GALLERY_COUNT})`,
  };
});
