/** Static JPEGs for social / template work (see /login, bottom library). */
export const SOCIAL_TEMPLATE_COUNT = 14;

export function socialTemplateImagePath(index1: number): string {
  const n = String(index1).padStart(2, "0");
  return `/images/social-templates/social-template-${n}.jpg`;
}

export const SOCIAL_TEMPLATE_IMAGES = Array.from({ length: SOCIAL_TEMPLATE_COUNT }, (_, i) => {
  const num = i + 1;
  const path = socialTemplateImagePath(num);
  return {
    id: num,
    path,
    downloadName: `otma-social-template-${String(num).padStart(2, "0")}.jpg`,
    label: `Template ${num}`,
  };
});
