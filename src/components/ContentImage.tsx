import Image from "next/image";

type Ratio = "photo" | "wide" | "tall" | "editorial";

const ratioClass: Record<Ratio, string> = {
  photo: "aspect-[4/3] sm:aspect-[3/2]",
  wide: "aspect-[16/10] sm:aspect-[2/1]",
  tall: "aspect-[3/4] sm:aspect-[4/5] max-w-sm mx-auto lg:mx-0",
  /** Consistent 3:2 for grids / spreads (magazine-style strips). */
  editorial: "aspect-[3/2]",
};

type ContentImageProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: Ratio;
  priority?: boolean;
  className?: string;
  /** Override default sizes when the image sits in a wide (e.g. max-w-screen-2xl) layout. */
  sizes?: string;
  /** Optional figcaption classes (default: centred, small). */
  captionClassName?: string;
  /**
   * On `lg+`, drop fixed aspect ratio and fill the parent height (e.g. match a text column in a stretched grid).
   * Below `lg`, keeps the normal `ratio` aspect box.
   */
  fillRowHeight?: boolean;
  /** With `ratio="wide"`, use a much shorter strip (~half the default height at the same width). */
  slimWide?: boolean;
};

export function ContentImage({
  src,
  alt,
  caption,
  ratio = "photo",
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 56rem",
  captionClassName,
  fillRowHeight = false,
  slimWide = false,
}: ContentImageProps) {
  const captionStyles =
    captionClassName ??
    "mt-2 text-center text-xs font-medium text-zinc-700 dark:text-zinc-400 sm:text-sm";
  const wideSlim = "aspect-[16/5] sm:aspect-[16/5]";
  const resolvedRatioClass =
    ratio === "wide" && slimWide && !fillRowHeight ? wideSlim : ratioClass[ratio];
  const ratioBoxClass = fillRowHeight
    ? `${resolvedRatioClass} lg:aspect-auto lg:min-h-0 lg:h-full lg:flex-1`
    : resolvedRatioClass;
  const figureClass = fillRowHeight ? `lg:flex lg:h-full lg:min-h-0 lg:flex-col ${className}` : className;
  return (
    <figure className={`w-full min-w-0 ${figureClass}`.trim()}>
      <div
        className={`relative w-full min-h-0 min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 ${ratioBoxClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {caption ? <figcaption className={captionStyles}>{caption}</figcaption> : null}
    </figure>
  );
}

type ContentImageThumbProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Fixed aspect thumbnail for lists (blog index, cards). */
export function ContentImageThumb({ src, alt, className = "" }: ContentImageThumbProps) {
  return (
    <div
      className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-t-xl border-b border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 sm:aspect-[5/4] sm:w-44 sm:rounded-l-xl sm:rounded-tr-none sm:border-b-0 sm:border-r md:w-52 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 176px"
      />
    </div>
  );
}
