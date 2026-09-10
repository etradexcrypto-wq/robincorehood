import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const orb = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/rueyZyJEojBbYXif.png";

const VALIDATION_ICON =
  "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d76f774af5c94cfdd04f8_validation-check-defichain-webflow-template.svg";

/* ------------------------------------------------------------------
   INLINE STYLES (all CSS lives here — no external stylesheet needed)
   ------------------------------------------------------------------ */
const styles: Record<string, React.CSSProperties> = {
  section: {
    background: "#0f2e1f",
    color: "#e8ede8",
    padding: "6rem 0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    WebkitFontSmoothing: "antialiased",
  },

  /* --- green block --- */
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  copy: {
    display: "flex",
    flexDirection: "column",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: "1.5rem",
    color: "#b8d4b8",
  },
  eyebrowDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    background: "#7ea87e",
    borderRadius: "50%",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
    marginBottom: "1.25rem",
    color: "#ffffff",
  },
  h2Em: {
    fontStyle: "normal",
    color: "#9fc09f",
    fontWeight: 400,
  },
  copyP: {
    fontSize: "1.125rem",
    lineHeight: 1.6,
    color: "#c8dcc8",
    marginBottom: "2rem",
    maxWidth: "460px",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#d4e6c3",
    color: "#0a1e12",
    padding: "0.875rem 2rem",
    borderRadius: "60px",
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    width: "fit-content",
  },
  visual: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  visualImg: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
  },
  visualSpan: {
    position: "absolute",
    bottom: "-1rem",
    right: 0,
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    color: "#7ea87e",
    fontWeight: 500,
  },

  /* --- testimonial block (inside same section) --- */
  testimonials: {
    background: "#ffffff",
    color: "#0a0a0c",
    marginTop: "5rem",
    padding: "5rem 0 3rem",
    borderRadius: "40px 40px 0 0",
  },
  containerDefault: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  textCenter: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  display8: {
    fontSize: "2.5rem",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: "#0a0a0c",
    marginBottom: "0.75rem",
  },
  innerContainer: {
    maxWidth: "460px",
    margin: "0 auto",
  },
  innerContainerP: {
    fontSize: "1.125rem",
    color: "#4a4a52",
    lineHeight: 1.6,
  },

  /* marquee wrapper */
  marqueeWrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    overflow: "hidden",
    padding: "1rem 0",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
  },
  marqueeTrack: {
    display: "flex",
    flexWrap: "nowrap",
    width: "max-content",
    willChange: "transform",
    backfaceVisibility: "hidden",
  },
  marqueeContent: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "1.5rem",
    paddingRight: "1.5rem",
    flexShrink: 0,
    willChange: "transform",
  },

  /* card */
  card: {
    background: "#f8f9fc",
    borderRadius: "24px",
    padding: "1.75rem 1.75rem 1.5rem",
    width: "360px",
    minWidth: "360px",
    boxShadow:
      "0 4px 16px rgba(0,0,0,0.02), 0 1px 4px rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    whiteSpace: "normal",
  },
  avatarWrapper: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    background: "#e8ecf2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.375rem",
    justifyContent: "flex-start",
  },
  nameText: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.4,
    color: "#0a0a0c",
  },
  handleText: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.4,
    color: "#7a7a85",
  },
  validationIcon: {
    width: "16px",
    height: "16px",
    display: "inline-block",
    flexShrink: 0,
  },
  cardP: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#3a3a45",
    margin: 0,
  },

  /* overlays */
  overlayLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "60px",
    pointerEvents: "none",
    zIndex: 2,
    background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
  },
  overlayRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "60px",
    pointerEvents: "none",
    zIndex: 2,
    background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
  },

  /* CTA */
  buttonsRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0c",
    color: "#ffffff",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0.875rem 2.5rem",
    borderRadius: "60px",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    lineHeight: 1.4,
  },
};

/* ------------------------------------------------------------------
   TESTIMONIAL DATA
   ------------------------------------------------------------------ */
const row1Cards = [
  {
    name: "John Carter",
    handle: "@johncarter",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Nestprox's AI algorithms have transformed my trading strategy. My portfolio has grown consistently since I started using the platform.",
  },
  {
    name: "Lilly Woods",
    handle: "@lilliwoods",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d777ef1a9c9094983b344_lilly-woods-avatar-defichain-webflow-template.png",
    text: "The predictive analytics are incredibly accurate. I've seen a 40% increase in my returns since switching to Nestprox.",
  },
  {
    name: "Patrick Meyer",
    handle: "@patrickmeyer",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/6862cd18cf2af836da93a3e6_john-carter-testimonial-defichain-webflow-template.png",
    text: "The automated trading features save me hours of market analysis while delivering better results than my manual trading ever did.",
  },
];

const row2Cards = [
  {
    name: "Sophie Moore",
    handle: "@sophiemoore",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/6862cd18df27b05971ff3cff_sophie-moore-testimonial-defichain-webflow-template.png",
    text: "As a beginner, Nestprox made crypto trading accessible. The AI guidance helped me make informed decisions from day one.",
  },
  {
    name: "Andy Smith",
    handle: "@andysmith",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d777ec95538af57c7bb17_andy-smith-avatar-defichain-webflow-template.png",
    text: "The risk management features give me peace of mind. I know my investments are protected while maximizing growth potential.",
  },
  {
    name: "Jennifer White",
    handle: "@jenniferwhite",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/688ceda4a9a9dcae54be452a_jennifer-white-testimonial-image-defichain-webflow-template.jpg",
    text: "The 24/7 market monitoring means I never miss opportunities. Nestprox executes trades even when I'm sleeping.",
  },
];

const row3Cards = [
  {
    name: "Matt Cannon",
    handle: "@mattcannon",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d77b45bff90b51e5b558d_matt-cannon-avatar-defichain-webflow-template.png",
    text: "The performance analytics dashboard provides incredible insights into my trading patterns and helps optimize my strategies.",
  },
  {
    name: "Kathie Corl",
    handle: "@kathiecorl",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d777e300ea83c015680c7_kathie-corl-avatar-defichain-webflow-template.png",
    text: "Portfolio optimization features have helped me diversify effectively while maintaining strong growth across all my investments.",
  },
  {
    name: "James Davis",
    handle: "@jamesdevis",
    avatar:
      "https://cdn.prod.website-files.com/685d5ba1cf5c7f72f666951c/685d777ea67a4c233323e36a_james-davis-avatar-defichain-webflow-template.png",
    text: "The speed of trade execution is remarkable. Nestprox captures opportunities that manual trading would completely miss.",
  },
];

/* ------------------------------------------------------------------
   TESTIMONIAL CARD
   ------------------------------------------------------------------ */
function TestimonialCard({
  avatar,
  name,
  handle,
  text,
}: {
  avatar: string;
  name: string;
  handle: string;
  text: string;
}) {
  return (
    <div
      style={{
        ...styles.card,
      }}
    >
      <div style={styles.avatarWrapper}>
        <img src={avatar} alt={name} style={styles.avatarImage} />
      </div>
      <div>
        <div style={{ marginBottom: "0.25rem" }}>
          <div style={styles.nameRow}>
            <div style={styles.nameText}>{name}</div>
            <img
              src={VALIDATION_ICON}
              alt="Validation Check"
              style={styles.validationIcon}
            />
            <div style={styles.handleText}>{handle}</div>
          </div>
        </div>
        <p style={styles.cardP}>{text}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   MARQUEE TRACK
   ------------------------------------------------------------------ */
function MarqueeTrack({
  cards,
  direction = "left",
  speed = 38,
}: {
  cards: typeof row1Cards;
  direction?: "left" | "right";
  speed?: number;
}) {
  const duplicated = [...cards, ...cards];

  return (
    <div
      className="marquee-track"
      data-direction={direction}
      data-speed={speed}
      style={styles.marqueeTrack}
    >
      {duplicated.map((card, i) => (
        <div
          key={i}
          className="marquee-content"
          aria-hidden={i >= cards.length}
          style={styles.marqueeContent}
        >
          <TestimonialCard {...card} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   MARQUEE ENGINE
   ------------------------------------------------------------------ */
function useMarqueeEngine(
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tracks = container.querySelectorAll<HTMLDivElement>(".marquee-track");
    if (!tracks.length) return;

    const states = new Map<
      HTMLDivElement,
      {
        offset: number;
        contentWidth: number;
        direction: string;
        speed: number;
        lastTimestamp: number | null;
        rafId: number | null;
      }
    >();

    function initTrack(track: HTMLDivElement) {
      const contents = track.querySelectorAll<HTMLDivElement>(".marquee-content");
      if (contents.length < 2) return;

      const direction = track.dataset.direction || "left";
      const speed = parseFloat(track.dataset.speed || "40");
      const firstContent = contents[0];
      const contentWidth = firstContent.offsetWidth;

      const state = {
        offset: direction === "left" ? 0 : -contentWidth,
        contentWidth,
        direction,
        speed,
        lastTimestamp: null as number | null,
        rafId: null as number | null,
      };

      states.set(track, state);

      track.style.transform =
        direction === "left"
          ? "translate3d(0px, 0, 0)"
          : `translate3d(${-contentWidth}px, 0, 0)`;

      startTrackLoop(track, state);
    }

    function startTrackLoop(
      track: HTMLDivElement,
      state: {
        offset: number;
        contentWidth: number;
        direction: string;
        speed: number;
        lastTimestamp: number | null;
        rafId: number | null;
      }
    ) {
      function step(timestamp: number) {
        if (!state.lastTimestamp) {
          state.lastTimestamp = timestamp;
          state.rafId = requestAnimationFrame(step);
          return;
        }

        const wrapper = track.closest(".marquee-wrapper") as HTMLElement | null;
        if (wrapper && wrapper.matches(":hover")) {
          state.lastTimestamp = timestamp;
          state.rafId = requestAnimationFrame(step);
          return;
        }

        const delta = Math.min(timestamp - state.lastTimestamp, 64);
        state.lastTimestamp = timestamp;

        const moveAmount = (state.speed * delta) / 1000;

        if (state.direction === "left") {
          state.offset -= moveAmount;
          if (state.offset <= -state.contentWidth) {
            state.offset += state.contentWidth;
          }
        } else {
          state.offset += moveAmount;
          if (state.offset >= 0) {
            state.offset -= state.contentWidth;
          }
        }

        track.style.transform = `translate3d(${state.offset}px, 0, 0)`;
        state.rafId = requestAnimationFrame(step);
      }

      state.rafId = requestAnimationFrame(step);
    }

    const initTimer = setTimeout(() => {
      tracks.forEach(initTrack);
    }, 100);

    let resizeTimer: number | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        states.forEach((state) => {
          if (state.rafId) cancelAnimationFrame(state.rafId);
        });
        states.clear();

        tracks.forEach((track) => {
          const contents = track.querySelectorAll<HTMLDivElement>(
            ".marquee-content"
          );
          if (contents.length < 2) return;

          const direction = track.dataset.direction || "left";
          const speed = parseFloat(track.dataset.speed || "40");
          const firstContent = contents[0];
          const contentWidth = firstContent.offsetWidth;

          const state = {
            offset: direction === "left" ? 0 : -contentWidth,
            contentWidth,
            direction,
            speed,
            lastTimestamp: null as number | null,
            rafId: null as number | null,
          };

          states.set(track, state);

          track.style.transform =
            direction === "left"
              ? "translate3d(0px, 0, 0)"
              : `translate3d(${-contentWidth}px, 0, 0)`;

          startTrackLoop(track, state);
        });
      }, 250);
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("resize", onResize);
      states.forEach((state) => {
        if (state.rafId) cancelAnimationFrame(state.rafId);
      });
    };
  }, [containerRef]);
}

/* ------------------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------------------ */
export default function CryptoFutureSection() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  useMarqueeEngine(marqueeRef);

  return (
    <section style={styles.section}>
      {/* ======================================================== */}
      {/* GREEN BLOCK (original content)                            */}
      {/* ======================================================== */}
      <div style={styles.container}>
        <div className="crypto-future-inner" style={styles.inner}>
          <div style={styles.copy}>
            <p style={styles.eyebrow}>
              <span style={styles.eyebrowDot} /> copyspheretx / digital frontier
            </p>
            <h2 style={styles.h2}>
              Try the portfolio
              <br />
              of the future, <em style={styles.h2Em}>today.</em>
            </h2>
            <p style={styles.copyP}>
              Explore digital assets with a calmer framework, clearer context,
              and a long-term view of what comes next.
            </p>
            <a
              href="https://app.copyspheretx.com"
              style={styles.button}
            >
              Access portfolio <ArrowUpRight size={16} />
            </a>
          </div>
          <div style={styles.visual}>
            <img
              src={orb}
              alt="copyspheretx digital asset orb"
              style={styles.visualImg}
            />
            <span style={styles.visualSpan}>RS / 03</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TESTIMONIAL MARQUEE — INSIDE THE SAME SECTION             */}
      {/* ======================================================== */}
      <div style={styles.testimonials}>
        <div style={styles.containerDefault}>
          <div style={styles.textCenter}>
            <h2 style={styles.display8}>What Our Traders Say</h2>
            <div style={styles.innerContainer}>
              <p style={styles.innerContainerP}>
                Thousands of traders trust Nestprox's AI algorithms to maximize
                their crypto investments with precision and efficiency.
              </p>
            </div>
          </div>

          <div
            ref={marqueeRef}
            className="marquee-wrapper testimonial-marquee"
            style={styles.marqueeWrapper}
          >
            <MarqueeTrack cards={row1Cards} direction="left" speed={38} />
            <MarqueeTrack cards={row2Cards} direction="right" speed={42} />
            <MarqueeTrack cards={row3Cards} direction="left" speed={45} />

            <div style={styles.overlayLeft} />
            <div style={styles.overlayRight} />
          </div>

          <div style={styles.buttonsRow}>
            <a
              href="https://app.copyspheretx.com/login-register"
              style={styles.primaryButton}
            >
              <div>Start Trading</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}