import type { ReactNode } from "react";

type ServiceMastheadProps = {
  kicker?: string;
  title: ReactNode;
  intro: ReactNode;
};

export function ServiceMasthead({ kicker = "Services", title, intro }: ServiceMastheadProps) {
  return (
    <header className="border-b border-zinc-200 pb-10 pt-2 sm:pb-12 sm:pt-4 lg:pt-6">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-700">{kicker}</p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]">
            {title}
          </h1>
        </div>
        <div className="min-w-0 border-t border-zinc-300/90 pt-6 lg:border-l lg:border-t-0 lg:border-zinc-300/80 lg:pl-10 lg:pt-1.5 xl:pl-14">
          <div className="text-base leading-[1.7] text-zinc-700 sm:text-lg sm:leading-relaxed">{intro}</div>
        </div>
      </div>
    </header>
  );
}
