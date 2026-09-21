const cards = [
  ["People with a plan", "Human guidance for the decisions that matter.", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/WtfCkEDVJDZSyzQs.png", "collage-investor"],
  ["Build for tomorrow", "Save toward a life with more options.", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/RHpygqOgUHbsqkWb.png", "collage-savings"],
  ["Ideas in motion", "Invest in the businesses moving the world forward.", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/ikUvdRerWweugRzg.png", "collage-vehicle"],
  ["Generational thinking", "Make a plan that gives the next chapter room to grow.", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/pHjezRrfKseuAeun.png", "collage-family"],
  ["Work together", "The clearest plans are built in conversation.", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/LMIkgRVKrfrwDWjI.png", "collage-workers"],
] as const;

export default function HomeCollage() {
  return (
    <section className="home-collage section-pad">
      <style>{`
        .home-collage {
          overflow: visible;      /* never clip the heading */
          position: relative;
        }

        /* Push the whole heading block down so the top isn't tight against the kicker */
        .home-collage .collage-heading {
          margin-top: 3.5rem;
          padding-top: 0.5rem;
        }

        .home-collage .collage-heading h2 {
          line-height: 1.15;      /* was likely too tight and clipping caps */
          padding-top: 0.15em;    /* safety so ascenders/caps aren't cut */
          margin: 0;
          overflow: visible;
        }

        .home-collage .collage-heading h2 em {
          display: inline-block;  /* stops the italic from being clipped at top */
          line-height: 1.15;
        }

        .home-collage .collage-heading p {
          margin-top: 1.25rem;
        }

        /* Grid + cards */
        .home-collage .collage-grid {
          margin-top: 3rem;
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(12, 1fr);
        }

        .home-collage .collage-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          background: #111;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 260px;
        }

        .home-collage .collage-card > div {
          padding: 1.5rem 1.5rem 1rem;
          position: relative;
          z-index: 2;
        }

        .home-collage .collage-card small {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 0.75rem;
        }

        .home-collage .collage-card h3 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }

        .home-collage .collage-card p {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          opacity: 0.85;
        }

        .home-collage .collage-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Example column spans — adjust to match your design */
        .home-collage .collage-investor { grid-column: span 6; }
        .home-collage .collage-savings  { grid-column: span 6; }
        .home-collage .collage-vehicle  { grid-column: span 4; }
        .home-collage .collage-family   { grid-column: span 4; }
        .home-collage .collage-workers  { grid-column: span 4; }

        @media (max-width: 900px) {
          .home-collage .collage-grid { grid-template-columns: repeat(2, 1fr); }
          .home-collage .collage-card { grid-column: span 1 !important; }
        }

        @media (max-width: 600px) {
          .home-collage .collage-grid { grid-template-columns: 1fr; }
          .home-collage .collage-heading { margin-top: 2.5rem; }
        }
      `}</style>

      <div className="container">
        <div className="section-kicker">
          <span>06 / Your next chapter</span>
          <span className="line" />
        </div>

        <div className="collage-heading">
          <h2>
            Money is a tool
            <br />
            <em>for the life ahead.</em>
          </h2>
          <p>
            Whether you are building a business, saving for your family, or
            creating more freedom, the right plan gives your future more shape.
          </p>
        </div>

        <div className="collage-grid">
          {cards.map(([title, body, image, className]) => (
            <article className={`collage-card ${className}`} key={title}>
              <div>
                <small>robincorehood / {title}</small>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <img src={image} alt="" loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}