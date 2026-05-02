import { AdStudioLogoMark, AdStudioSocialIcons } from "@/components/ad-studio/ad-studio-shared";

/**
 * Template 23 — solid canvas, opaque gradient card; cyan sub above headline; pricing tier; icons. Site on frame footer.
 */
export function StreamingInvertedPricingLayout23() {
  return (
    <div className="inv3-outer">
      <div className="inv3-card">
        <div className="inv3-brand-row">
          <AdStudioLogoMark className="inv3-logo-mark" />
          <span className="inv3-brand-text">On The Move Again</span>
        </div>

        <p className="inv3-sub">
          Experienced movers who sweat the small stuff —
          <br />
          careful heavy lifting, live GPS, GIT cover, and
          <br />
          PMA / AMOSA crew on every Alberton booking.
        </p>

        <h2 className="inv3-headline">
          Relax
          <br />
          while we
          <br />
          handle it
        </h2>

        <p className="inv3-price">
          Clear limits
          <br />
          on every quote —
          <br />
          <span className="inv3-price-em">GIT to R250k*</span>
        </p>

        <span className="inv3-pill">Get a quote</span>

        <AdStudioSocialIcons className="inv3-icons" iconClassName="inv3-soc-svg" />

        <p className="inv3-fine">
          Promotional creative. On The Move Again provides trained crews and equipment suited to your inventory;
          we plan access, protection, and placement so you are not left guessing on move day.
          <br />
          Goods-in-transit and all-risk cover are subject to the limits, excesses, and exclusions on your written
          quote. PMA and AMOSA accredited. Alberton-based service area as per booking.
          <br />
          * GIT / all-risk limits as confirmed on your written quote. Imagery for illustration only; crew and fleet
          may vary by booking.
        </p>
      </div>
    </div>
  );
}
