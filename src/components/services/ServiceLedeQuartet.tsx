import { ContentImage } from "@/components/ContentImage";
import { sizesLedeTile } from "@/lib/service-page-ui";

export type LedeTile = {
  src: string;
  alt: string;
};

export function ServiceLedeQuartet({ items }: { items: readonly LedeTile[] }) {
  return (
    <div className="mx-auto mt-2 w-full min-w-0 max-w-6xl sm:mt-4">
      <div className="grid min-w-0 grid-cols-2 gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-2 sm:gap-3 sm:p-3 lg:grid-cols-4 lg:gap-4 lg:p-4">
        {items.map((item) => (
          <ContentImage
            key={item.alt}
            src={item.src}
            alt={item.alt}
            ratio="editorial"
            sizes={sizesLedeTile}
          />
        ))}
      </div>
    </div>
  );
}
