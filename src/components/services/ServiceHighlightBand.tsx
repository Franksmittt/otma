import { ContentImage } from "@/components/ContentImage";
import { sizesThird } from "@/lib/service-page-ui";

export type TriptychTile = {
  src: string;
  alt: string;
};

type ServiceHighlightBandProps = {
  kicker: string;
  heading: string;
  body: string;
  tiles: readonly TriptychTile[];
};

export function ServiceHighlightBand({ kicker, heading, body, tiles }: ServiceHighlightBandProps) {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/50 px-6 py-10 shadow-sm sm:px-10 sm:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-400">{kicker}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-base leading-[1.7] text-zinc-400">{body}</p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
        {tiles.map((t) => (
          <ContentImage
            key={t.alt}
            src={t.src}
            alt={t.alt}
            ratio="editorial"
            sizes={sizesThird}
          />
        ))}
      </div>
    </div>
  );
}
