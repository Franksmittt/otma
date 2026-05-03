import type { ReactNode } from "react";

export type ServiceFeatureCard = {
  title: string;
  body: ReactNode;
};

type Surface = "light" | "dark";

const cardShell: Record<Surface, string> = {
  light:
    "min-w-0 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm",
  dark: "min-w-0 rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-5 shadow-sm",
};

const h3Shell: Record<Surface, string> = {
  light: "border-l-[3px] border-sky-600 pl-3 text-lg font-semibold tracking-tight text-zinc-900",
  dark: "border-l-[3px] border-sky-500 pl-3 text-lg font-semibold tracking-tight text-white",
};

const bodyClass: Record<Surface, string> = {
  light: "mt-3 text-base leading-[1.7] text-zinc-700",
  dark: "mt-3 text-base leading-[1.7] text-zinc-400",
};

type ServiceFeatureCardGridProps = {
  surface?: Surface;
  cards: readonly ServiceFeatureCard[];
};

export function ServiceFeatureCardGrid({ surface = "light", cards }: ServiceFeatureCardGridProps) {
  return (
    <div className="mt-8 grid min-w-0 grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
      {cards.map((c) => (
        <div key={c.title} className={cardShell[surface]}>
          <h3 className={h3Shell[surface]}>{c.title}</h3>
          <div className={bodyClass[surface]}>{c.body}</div>
        </div>
      ))}
    </div>
  );
}
