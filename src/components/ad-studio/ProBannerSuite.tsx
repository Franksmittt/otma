"use client";

import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { toJpeg } from "html-to-image";
import { SITE } from "@/lib/site-config";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop";

const TABS: { id: number; label: string }[] = [
  { id: 1, label: "V1: GPS Radar" },
  { id: 2, label: "V2: Service Bento" },
  { id: 3, label: "V3: The Crate" },
  { id: 4, label: "V4: Corp Trust" },
  { id: 5, label: "V5: Long Haul" },
  { id: 6, label: "V6: Checklist" },
  { id: 7, label: "V7: Glass UI" },
  { id: 8, label: "V8: Editorial" },
  { id: 9, label: "V9: Tracker" },
  { id: 10, label: "V10: Framed" },
  { id: 11, label: "V11: Motion" },
  { id: 12, label: "V12: App View" },
];

function bgStyle(url: string) {
  return { backgroundImage: `url(${url})` } as const;
}

export function ProBannerSuite() {
  const [activeTab, setActiveTab] = useState(1);
  const [bgUrl, setBgUrl] = useState(DEFAULT_BG);

  const onUpload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") setBgUrl(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const downloadBanner = useCallback(async () => {
    const bannerElement = document.getElementById(`otma-banner-v${activeTab}`);
    const scaler = document.querySelector<HTMLElement>(".otma-ad-studio-root .banner-suite-scaler");
    const prev = scaler?.style.transform ?? "";
    if (scaler) scaler.style.transform = "scale(1)";
    if (!bannerElement) {
      if (scaler) scaler.style.transform = prev;
      return;
    }
    try {
      const dataUrl = await toJpeg(bannerElement, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: "#2A2F35",
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `OTMA_Moving_Banner_V${activeTab}.jpg`;
      link.click();
    } catch (error) {
      console.error("Download failed!", error);
      window.alert(
        "Something went wrong rendering the image. If you use a remote background, try uploading a local image instead.",
      );
    } finally {
      if (scaler) scaler.style.transform = prev;
    }
  }, [activeTab]);

  const phone = SITE.phone;
  const acc = SITE.accreditations.join(" & ");

  return (
    <section className="banner-suite" aria-label="12-in-1 Pro Banner Suite">
      <div className="banner-suite-dashboard">
        <div className="banner-suite-upload-row">
          <label className="banner-suite-upload-label" htmlFor="banner-suite-image-upload">
            <i className="fa-solid fa-truck-fast" aria-hidden />
            Upload background image:
          </label>
          <input id="banner-suite-image-upload" type="file" accept="image/*" onChange={onUpload} />
        </div>

        <div className="banner-suite-tab-grid" role="tablist" aria-label="Banner variants">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={activeTab === t.id}
              className={`banner-suite-tab${activeTab === t.id ? " active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <button type="button" className="banner-suite-btn-dl" onClick={() => void downloadBanner()}>
          <i className="fa-solid fa-download" aria-hidden /> Download selected banner
        </button>
      </div>

      <div className="banner-suite-scaler">
        <div className="banner-suite-wrapper">
          {/* V1 */}
          <div
            id="otma-banner-v1"
            className={`bs-banner bs-v1${activeTab === 1 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="content">
              <div className="otma-logo bs-v1-logo" style={{ marginBottom: "var(--bs-sp-2)" }}>
                On The Move <span>Again</span>
              </div>
              <div className="bs-v1-live-row">
                <span className="live-dot" aria-hidden />
                No Black-Box Logistics
              </div>
              <h1>
                Live GPS
                <br />
                Monitored
                <br />
                Moves
              </h1>
              <div className="tech-box">
                <div className="tech-row">
                  <i className="fa-solid fa-location-crosshairs" aria-hidden />
                  Follow the truck on the map
                </div>
                <div className="tech-row">
                  <i className="fa-solid fa-bell" aria-hidden />
                  Real-time milestone updates
                </div>
                <div className="tech-row">
                  <i className="fa-solid fa-shield-halved" aria-hidden />
                  Goods-in-Transit (GIT) Cover
                </div>
                <hr className="bs-v1-hr" />
                <div className="bs-v1-footer-row">
                  <div>
                    <div className="bs-v1-foot-lbl">Book your move</div>
                    <div className="bs-v1-foot-phone">{phone}</div>
                  </div>
                  <div className="trust-badge">{acc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* V2 */}
          <div
            id="otma-banner-v2"
            className={`bs-banner bs-v2${activeTab === 2 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="bento-wrapper">
              <div className="bento-card card-title">
                <h1>
                  Full-Service
                  <br />
                  Relocation
                </h1>
              </div>
              <div className="bento-card">
                <i className="fa-solid fa-house-chimney bs-v2-ico" aria-hidden />
                <div className="bento-label">Core Service</div>
                <div className="bento-val">
                  House & Office
                  <br />
                  Removals
                </div>
              </div>
              <div className="bento-card">
                <i className="fa-solid fa-box-open bs-v2-ico" aria-hidden />
                <div className="bento-label">Preparation</div>
                <div className="bento-val">
                  Packing &
                  <br />
                  Unpacking
                </div>
              </div>
              <div className="bento-card">
                <i className="fa-solid fa-warehouse bs-v2-ico" aria-hidden />
                <div className="bento-label">Facility</div>
                <div className="bento-val">
                  Secure Eco Park
                  <br />
                  Storage
                </div>
              </div>
              <div className="bento-card">
                <i className="fa-solid fa-paw bs-v2-ico" aria-hidden />
                <div className="bento-label">Specialist</div>
                <div className="bento-val">
                  VIP Pet &
                  <br />
                  Vehicle Transit
                </div>
              </div>
              <div className="bento-card contact-card">
                <div className="bs-v2-foot-rail">
                  <div className="bs-v2-foot-rail-main">
                    <p className="bs-v2-foot-eyebrow">Book your move</p>
                    <p className="bs-v2-foot-phone">{phone}</p>
                    <p className="bs-v2-foot-meta">
                      <span className="bs-v2-foot-meta-strong">On The Move Again</span>
                      <span className="bs-v2-foot-meta-sep" aria-hidden>
                        {" "}
                        ·{" "}
                      </span>
                      Alberton based
                    </p>
                  </div>
                  <div className="bs-v2-foot-wa-col" aria-hidden>
                    <i className="fa-brands fa-whatsapp bs-v2-wa" />
                    <span className="bs-v2-foot-wa-lbl">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* V3 */}
          <div
            id="otma-banner-v3"
            className={`bs-banner bs-v3${activeTab === 3 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="box-container">
              <div className="otma-logo bs-v3-logo">
                On The Move
                <br />
                <span>Again</span>
              </div>
              <div className="brutal-box">
                <h1>
                  Replace
                  <br />
                  Guesswork
                  <br />
                  With GPS.
                </h1>
              </div>
              <div className="brutal-box brutal-dark">
                <div className="bs-v3-why">Why choose us?</div>
                <div className="check-list">
                  <div>
                    <i className="fa-solid fa-check" aria-hidden /> Live Fleet Tracking
                  </div>
                  <div>
                    <i className="fa-solid fa-check" aria-hidden /> PMA & AMOSA Accredited
                  </div>
                  <div>
                    <i className="fa-solid fa-check" aria-hidden /> Goods-in-Transit Cover
                  </div>
                  <div>
                    <i className="fa-solid fa-check" aria-hidden /> Crate Rentals & Packing
                  </div>
                </div>
              </div>
              <div className="brutal-box bs-v3-cta-box">
                <div className="bs-v3-cta-title">GET A FREE QUOTE</div>
                <div className="bs-v3-cta-phone">{phone}</div>
              </div>
            </div>
          </div>

          {/* V4 */}
          <div
            id="otma-banner-v4"
            className={`bs-banner bs-v4${activeTab === 4 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="solid-bg" />
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="content-block">
              <div className="rating-block">
                <div>
                  <div className="bs-v4-rating-lbl">Google Rating</div>
                  <div className="bs-v4-rating-val">
                    {SITE.rating.value}/{SITE.rating.best.toFixed(1)}
                  </div>
                </div>
                <div className="stars" aria-hidden>
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star-half-stroke" />
                </div>
              </div>
              <h2>
                High Trust
                <br />
                Alberton Movers
              </h2>
              <p>
                Owner-led, Alberton-based removals with a client portal so you replace anxiety with live milestones.
              </p>
              <div className="accreditations bs-v4-acc">
                <div className="acc-badge">PMA Approved</div>
                <div className="acc-badge">AMOSA Standard</div>
                <div className="acc-badge">GIT Insured</div>
              </div>
              <div className="bs-v4-bottom">
                <div className="otma-logo bs-v4-otma">OTMA</div>
                <div className="bs-v4-wa-row">
                  <i className="fa-brands fa-whatsapp" aria-hidden /> {phone}
                </div>
              </div>
            </div>
          </div>

          {/* V5 */}
          <div
            id="otma-banner-v5"
            className={`bs-banner bs-v5${activeTab === 5 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="content">
              <div className="trust-badge bs-v5-badge">National Fleet Tracking</div>
              <h1 className="huge-text">
                LONG
                <br />
                <span className="turq-text">HAUL</span>
                <br />
                MOVES
              </h1>
              <div className="route-box">
                <div className="route">
                  <span>Gauteng</span>
                  <div className="route-line" />
                  <i className="fa-solid fa-truck bs-v5-truck" aria-hidden />
                  <div className="route-line" />
                  <span>Cape Town</span>
                </div>
                <div className="bs-v5-route-sub">N1 & N3 Corridors • Live Milestone Updates</div>
              </div>
              <div className="bs-v5-bottom">
                <div className="bs-v5-foot-split">
                  <div className="bs-v5-foot-brandstack">
                    <div className="bs-v5-foot-otmark">
                      On The Move <span>Again</span>
                    </div>
                    <div className="bs-v5-foot-tagline">Alberton · GPS on every load</div>
                  </div>
                  <div className="bs-v5-foot-cta">
                    <div className="bs-v5-foot-cta-lbl">Call or WhatsApp</div>
                    <div className="bs-v5-foot-cta-num">{phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* V6 */}
          <div
            id="otma-banner-v6"
            className={`bs-banner bs-v6${activeTab === 6 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="sidebar">
              <div className="bs-v6-brandblock">
                <div className="bs-v6-brand-accent" aria-hidden />
                <div className="bs-v6-brand-panel">
                  <div className="bs-v6-brand">
                    On The Move <span>Again</span>
                  </div>
                  <div className="bs-v6-brand-divider" aria-hidden />
                  <div className="bs-v6-brand-phone">{phone}</div>
                </div>
              </div>
              <div className="bs-v6-mid">
                <h1>
                  Secure
                  <br />
                  Your
                  <br />
                  <span className="turq-text">Move.</span>
                </h1>
                <div className="list-item">
                  <div className="list-icon">
                    <i className="fa-solid fa-map-location-dot" aria-hidden />
                  </div>
                  <div>
                    <div className="list-title">Live GPS Tracking</div>
                    <div className="list-text">Monitor your truck on the map in real-time.</div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">
                    <i className="fa-solid fa-box" aria-hidden />
                  </div>
                  <div>
                    <div className="list-title">Full Packing Service</div>
                    <div className="list-text">Eco-crates, blanketing, and fragile wrapping.</div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">
                    <i className="fa-solid fa-file-shield" aria-hidden />
                  </div>
                  <div>
                    <div className="list-title">Fully Accredited</div>
                    <div className="list-text">PMA & AMOSA certified with GIT cover.</div>
                  </div>
                </div>
              </div>
              <div className="bs-v6-bottom-icon" aria-hidden>
                <i className="fa-solid fa-truck-fast" />
              </div>
            </div>
          </div>

          {/* V7 */}
          <div
            id="otma-banner-v7"
            className={`bs-banner bs-v7${activeTab === 7 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="glass-panel">
              <div>
                <div className="trust-badge bs-v7-badge">On The Move Again</div>
                <h1>
                  Relocation
                  <br />
                  Mastered.
                </h1>
                <p className="bs-v7-lede">
                  From packing to post-move cleaning, we handle every detail so you don&apos;t have to.
                </p>
                <div className="glass-divider" />
                <div className="glass-feat">
                  <i className="fa-solid fa-truck-ramp-box" aria-hidden /> Full House & Office Removals
                </div>
                <div className="glass-feat">
                  <i className="fa-solid fa-box-archive" aria-hidden /> Packing & Plastic Crate Rentals
                </div>
                <div className="glass-feat">
                  <i className="fa-solid fa-warehouse" aria-hidden /> Secure Eco Park Storage
                </div>
              </div>
              <div className="bs-v7-cta">
                <div className="bs-v7-cta-lbl">Book Your Move</div>
                <div className="bs-v7-cta-phone">{phone}</div>
              </div>
            </div>
          </div>

          {/* V8: Editorial — photo slab + rail + typographic stack */}
          <div
            id="otma-banner-v8"
            className={`bs-banner bs-v8${activeTab === 8 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="bs-v8-photo">
              <div className="banner-suite-bg bs-v8-photo-bg" style={bgStyle(bgUrl)} />
              <div className="bs-v8-photo-overlay" aria-hidden />
              <div className="bs-v8-photo-ribbon" aria-hidden />
            </div>
            <div className="bs-v8-lower">
              <div className="bs-v8-rail" aria-hidden />
              <div className="bs-v8-stack">
                <div className="bs-v8-main">
                  <h1 className="bs-v8-head">
                    <span className="bs-v8-head-l1">Trusted</span>
                    <span className="bs-v8-head-l2">Relocation</span>
                  </h1>
                  <p className="bs-v8-dek">
                    Owner-led moves with live GPS milestones, house, office, packing, and storage under one roof.
                  </p>
                  <div className="bs-v8-meta">
                    <span className="bs-v8-meta-chip">
                      <i className="fa-solid fa-satellite-dish" aria-hidden /> Live fleet view
                    </span>
                    <span className="bs-v8-meta-chip">
                      <i className="fa-solid fa-stamp" aria-hidden /> {acc}
                    </span>
                  </div>
                </div>
                <div className="bs-v8-cta-strip">
                  <div className="bs-v8-cta-brand">
                    <span className="bs-v8-cta-brand-l1">On The Move</span>
                    <span className="bs-v8-cta-brand-l2">Again</span>
                  </div>
                  <div className="bs-v8-cta-action">
                    <span className="bs-v8-cta-hint">Free quote</span>
                    <span className="bs-v8-cta-num">{phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* V9 */}
          <div
            id="otma-banner-v9"
            className={`bs-banner bs-v9${activeTab === 9 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="radar-bg" aria-hidden />
            <h2 className="bs-v9-brand-top">
              On The Move <span>Again</span>
            </h2>
            <div className="content">
              <div className="marker">
                <i className="fa-solid fa-truck-fast" aria-hidden />
              </div>
              <h1>
                Smile! You&apos;re
                <br />
                On Camera.
              </h1>
              <p className="bs-v9-sub">
                Live GPS tracking and in-transit monitoring on every single move.
              </p>
              <div className="bs-v9-pill">Track Your Move</div>
            </div>
          </div>

          {/* V10 */}
          <div
            id="otma-banner-v10"
            className={`bs-banner bs-v10${activeTab === 10 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="prestige-frame">
              <div className="frame-badge">On The Move Again</div>
              <div className="bs-v10-bottom-cluster">
                <div className="bs-v10-panel">
                  <div className="bs-v10-mid">
                    <h1>
                      Estate
                      <br />
                      Approved
                    </h1>
                    <p className="desc">
                      We navigate rigid estate gates and HOA windows flawlessly. Clean trucks, uniform crews, and total
                      asset protection.
                    </p>
                  </div>
                  <div className="bs-v10-phone-block">
                    <div className="bs-v10-area">Alberton & Surrounds</div>
                    <div className="bs-v10-phone">{phone}</div>
                  </div>
                </div>
                <div className="bottom-creds">
                  <div className="cred">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> All-Risk Cover
                  </div>
                  <div className="cred">
                    <i className="fa-solid fa-paw" aria-hidden /> VIP Pet Transit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* V11 */}
          <div
            id="otma-banner-v11"
            className={`bs-banner bs-v11${activeTab === 11 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="solid-bg" />
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="slash-accent" aria-hidden />
            <div className="content">
              <div className="bs-v11-inner">
                <p className="bs-v11-kicker">On The Move Again</p>
                <h1 className="bs-v11-title">
                  <span className="bs-v11-title-l1">Every move,</span>
                  <span className="bs-v11-title-l2">on the map.</span>
                </h1>
                <div className="bs-v11-metrics" role="list">
                  <div className="bs-v11-metric" role="listitem">
                    <span className="bs-v11-metric-val">100%</span>
                    <span className="bs-v11-metric-lbl">GPS monitored</span>
                  </div>
                  <div className="bs-v11-metric" role="listitem">
                    <span className="bs-v11-metric-val">8-Ton</span>
                    <span className="bs-v11-metric-lbl">Heavy fleet</span>
                  </div>
                  <div className="bs-v11-metric" role="listitem">
                    <span className="bs-v11-metric-val">All-risk</span>
                    <span className="bs-v11-metric-lbl">Cover in transit</span>
                  </div>
                </div>
                <p className="bs-v11-copy">
                  Sealed loads, uniform crews, and condition checks from Alberton to your next address, documented so
                  there&apos;s no grey area.
                </p>
                <div className="bs-v11-foot">
                  <div className="bs-v11-contact">
                    <span className="bs-v11-area">Alberton &amp; Surrounds</span>
                    <span className="bs-v11-foot-phone">{phone}</span>
                  </div>
                  <span className="bs-v11-foot-cta">Free quote</span>
                </div>
              </div>
            </div>
          </div>

          {/* V12 */}
          <div
            id="otma-banner-v12"
            className={`bs-banner bs-v12${activeTab === 12 ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="banner-suite-bg" style={bgStyle(bgUrl)} />
            <div className="overlay" />
            <div className="app-container">
              <div className="app-header">
                <h2>Live Tracking Portal</h2>
              </div>
              <div className="map-area">
                <div className="map-marker" aria-hidden />
              </div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">Quote & Plan</div>
                    <div className="tl-desc">Origin, destination, and fleet size confirmed.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">Pack & Load</div>
                    <div className="tl-desc">Furniture protected, crates packed securely.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active" />
                  <div>
                    <div className="tl-title bs-v12-active-title">Track & Deliver</div>
                    <div className="tl-desc bs-v12-active-desc">Truck is in transit on the N3. ETA updated.</div>
                  </div>
                </div>
              </div>
              <div className="app-footer">No Black-Box Anxiety.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
