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
}: ContentImageProps) {
  const captionStyles =
    captionClassName ??
    "mt-2 text-center text-xs font-medium text-zinc-700 dark:text-zinc-400 sm:text-sm";
  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative w-full min-h-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 ${ratioClass[ratio]}`}
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
