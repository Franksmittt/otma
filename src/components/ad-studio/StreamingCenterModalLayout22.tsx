import { AdStudioLogoMark, AdStudioSocialIcons } from "@/components/ad-studio/ad-studio-shared";

/**
 * Template 22 — floating centered modal: even margins, vertical teal→black gradient, all center-aligned.
 */
export function StreamingCenterModalLayout22() {
  return (
    <div className="floating-modal-outer">
      <div className="floating-modal-card">
        <div className="floating-brand-row">
          <AdStudioLogoMark className="floating-logo-mark" />
          <span className="floating-brand-text">On The Move Again</span>
        </div>

        <h2 className="floating-headline">
          Your move
          <br />
          in expert
          <br />
          hands
        </h2>

        <p className="floating-sub">
          We shoulder the heavy lifting — tight corners,
          <br />
          careful wrapping, Alberton crew you can trust.
          <br />
          Live GPS, GIT cover, PMA &amp; AMOSA on every booking.
        </p>

        <span className="floating-pill">Get a quote</span>

        <AdStudioSocialIcons className="floating-icons" iconClassName="floating-soc-svg" />

        <p className="floating-fine">
          Promotional creative. Experienced movers; attention to detail on packing, loading, and placement.
          Goods-in-transit and all-risk terms as per your written quote. PMA and AMOSA accredited. On The Move
          Again — Alberton. Images illustrative; crew and fleet may vary by booking.
        </p>
      </div>
    </div>
  );
}
