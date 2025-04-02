import "./LearnMore.css";
function LearnMore() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__intro">
          <h1 className="portfolio__title">Hi, I’m Letice 👩🏻‍💻</h1>
          <p className="portfolio__description">
            A web developer passionate about building intuitive, user-friendly
            digital experiences. Here’s a glimpse into what I do best.
          </p>
        </div>
        <div className="portfolio__skills-grid">
          <article className="portfolio__skill-card">
            <h2 className="portfolio__skill-title">JavaScript</h2>
            <p className="portfolio__skill-desc">
              I use JS to build interactive web applications and logic-heavy
              components in React projects.
            </p>
          </article>

          <article className="portfolio__skill-card">
            <h2 className="portfolio__skill-title">Node.js</h2>
            <p className="portfolio__skill-desc">
              I built backend APIs and server-side logic using Express and
              MongoDB for clean, scalable apps.
            </p>
          </article>

          <article className="portfolio__skill-card">
            <h2 className="portfolio__skill-title">Node.js</h2>
            <p className="portfolio__skill-desc">
              I built backend APIs and server-side logic using Express and
              MongoDB for clean, scalable apps.
            </p>
          </article>
          <article className="portfolio__skill-card">
            <h2 className="portfolio__skill-title">Node.js</h2>
            <p className="portfolio__skill-desc">
              I built backend APIs and server-side logic using Express and
              MongoDB for clean, scalable apps.
            </p>
          </article>
          <article className="portfolio__skill-card">
            <h2 className="portfolio__skill-title">Node.js</h2>
            <p className="portfolio__skill-desc">
              I built backend APIs and server-side logic using Express and
              MongoDB for clean, scalable apps.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
