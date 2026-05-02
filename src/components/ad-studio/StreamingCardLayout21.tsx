import { AdStudioLogoMark } from "@/components/ad-studio/ad-studio-shared";

/**
 * Template 21 — compact bottom glass strip (~32% height, teal→black). Site URL uses the shared frame footer (bottom center).
 */
export function StreamingCardLayout21() {
  return (
    <div className="streaming-card">
      <header className="streaming-header">
        <div className="streaming-brand">
          <AdStudioLogoMark className="streaming-logo-mark" />
          <span className="streaming-brand-text">On The Move Again</span>
        </div>
        <span className="streaming-pill">Get a quote</span>
      </header>

      <div className="streaming-mid">
        <h2 className="streaming-headline">
          We do the heavy lifting.
          <br />
          You&apos;re in good hands.
        </h2>
        <p className="streaming-sub">
          Experienced movers, wrap-and-cushion detail, live GPS &amp; GIT cover —
          <br />
          PMA / AMOSA crew from quote to the last box off the truck.
        </p>
      </div>
    </div>
  );
}
