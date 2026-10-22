import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getSiteData,
} from "../data";
import { getDetailStory } from "../detailStories";

const ME_PHOTO_SRC = new URL("../assets/me.jpg", import.meta.url).href;

const sectionHeading = {
  fontSize: "0.9375rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--text-tertiary)",
  marginBottom: "1rem",
};

const secondary = { color: "var(--text-secondary)" };
const tertiary = { color: "var(--text-tertiary)" };
const small = { fontSize: "0.9375rem" };
const smallGray = { fontSize: "0.9375rem", color: "var(--text-tertiary)" };

const Section = ({ title, children, style }) => (
  <section style={{ marginBottom: "3rem", ...style }}>
    <h2 style={sectionHeading}>{title}</h2>
    {children}
  </section>
);

const ResourceLinks = ({ url, links }) => {
  const resources = [...(url ? [{ label: "website", url }] : []), ...(links || [])];
  if (!resources.length) return null;
  return <div className="resource-links">{resources.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">[{link.label}]</a>)}</div>;
};

const ExperienceItem = ({ role, org, url, date, line, links, onOpen, detailLabel }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
      <span>
        <strong style={{ fontWeight: 500 }}>{role}</strong>
        {" at "}
        {url ? <a href={url} target="_blank" rel="noopener noreferrer">{org}</a> : <span>{org}</span>}
      </span>
      <span style={{ ...smallGray, whiteSpace: "nowrap" }}>{date}</span>
    </div>
    <p style={{ ...secondary, ...small, marginTop: "0.2rem" }}>
      {line}
    </p>
    <div className="entry-actions">
      <ResourceLinks links={links} />
      <button type="button" className="more-button" onClick={onOpen}>[{detailLabel}]</button>
    </div>
  </div>
);

const ProjectItem = ({ name, url, line, onOpen, detailLabel }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <span style={{ fontWeight: 500 }}>{name}</span>
    <p style={{ ...secondary, ...small, marginTop: "0.15rem" }}>{line}</p>
    <div className="entry-actions">
      <ResourceLinks url={url} />
      <button type="button" className="more-button" onClick={onOpen}>[{detailLabel}]</button>
    </div>
  </div>
);

export default function Home() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en";
  const {
    meta,
    now,
    experience,
    research,
    publications,
    projects,
    education,
    coursework,
    awards,
    tests,
    skills,
    tutoring,
    reviewImages,
    certificates,
  } = getSiteData(lang);
  const detailLabel = lang === "ru" ? "Подробнее" : "Read more";

  const activeReview = useMemo(() => {
    if (activeReviewIdx == null) return null;
    return reviewImages?.[activeReviewIdx] || null;
  }, [activeReviewIdx, reviewImages]);

  useEffect(() => {
    if (!activeReview) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveReviewIdx(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeReview]);

  useEffect(() => {
    if (!activeDetail) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (e) => e.key === "Escape" && setActiveDetail(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDetail]);

  const tutoringSection = (
    <Section title={t("home.tutoring")}>
      <p style={{ ...secondary, marginBottom: "0.5rem" }}>{tutoring.tagline}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }} className="tutor-grid">
        <div>
          <p style={{ ...smallGray, marginBottom: "0.5rem" }}>{t("home.prep")}</p>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
            {tutoring.prep.map((x, i) => <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>)}
          </ul>
          <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>{t("home.university")}</p>
          <p style={{ ...secondary, ...small, margin: 0 }}>{tutoring.uniCourses.join(" · ")}</p>
        </div>
        <div>
          <p style={{ ...smallGray, marginBottom: "0.5rem" }}>{t("home.myScores")}</p>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
            {tutoring.myScores.map((x, i) => <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>)}
          </ul>
          <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>{t("home.studentOutcomes")}</p>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
            {tutoring.studentResults.map((x, i) => <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>)}
          </ul>
        </div>
      </div>
      <p style={{ ...tertiary, fontSize: "0.9375rem", marginTop: "1rem" }}>{tutoring.note}</p>
      <p style={{ fontSize: "0.9375rem", marginTop: "0.75rem" }}>
        <a href={tutoring.contacts.telegramUrl} target="_blank" rel="noopener noreferrer">TG {tutoring.contacts.telegramHandle}</a>
        {" / "}<a href={tutoring.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer">{t("common.whatsapp")}</a>
        {" / "}<span style={tertiary}>{tutoring.contacts.phone}</span>
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ ...smallGray, marginBottom: "0.25rem" }}>{t("home.reviews")}</p>
        <p style={{ ...tertiary, fontSize: "0.9375rem", margin: 0, marginBottom: "0.75rem" }}>{t("home.reviewsHint")}</p>
        <div className="reviews-grid">
          {reviewImages.map((img, i) => (
            <button key={i} type="button" className="review-tile" onClick={() => setActiveReviewIdx(i)} aria-label={img.alt}>
              <img src={img.src} alt={img.alt} className="review-img" />
              <span className="review-overlay">{t("home.reviewsHint")}</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );

  const skillsSection = (
    <Section title={t("home.skills")}>
      <p style={{ ...secondary, ...small }}>{skills.stack}</p>
      <p style={{ ...secondary, ...small }}>{skills.tools}</p>
      <p style={{ ...secondary, ...small }}>{skills.languages}</p>
    </Section>
  );

  /* ---- Left column: identity + short sections ---- */
  const left = (
    <div>
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h1
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              {meta.name}
            </h1>
            <p style={{ ...secondary, marginBottom: "0.75rem" }}>{meta.title}</p>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              aria-pressed={lang === "en"}
              style={{
                background: "none",
                border: "1px solid var(--divider)",
                padding: "0.25rem 0.5rem",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "0.9375rem",
                color: lang === "en" ? "var(--text-primary)" : "var(--text-tertiary)",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {t("lang.en")}
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("ru")}
              aria-pressed={lang === "ru"}
              style={{
                background: "none",
                border: "1px solid var(--divider)",
                padding: "0.25rem 0.5rem",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "0.9375rem",
                color: lang === "ru" ? "var(--text-primary)" : "var(--text-tertiary)",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {t("lang.ru")}
            </button>
          </div>
        </div>
        <p style={{ fontSize: "0.9375rem", ...tertiary }}>
          <a href={`mailto:${meta.email}`}>{meta.email}</a>
          {" / "}
          <a href={meta.telegram} target="_blank" rel="noopener noreferrer">{t("common.telegram")}</a>
          {" / "}
          <a href={meta.github} target="_blank" rel="noopener noreferrer">{t("common.github")}</a>
          {" / "}
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">{t("common.linkedin")}</a>
          {" / "}
          <a href="/cv.pdf" target="_blank">{t("common.cv")}</a>
        </p>
      </header>

      {/* Photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "3 / 2",
          backgroundColor: "#e8e6e1",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={ME_PHOTO_SRC}
          alt="Atay Kim"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML =
              '<span style="color: var(--text-tertiary); font-size: 0.9375rem;">photo</span>';
          }}
        />
      </div>

      {/* Now */}
      <Section title={t("home.now")}>
        <p style={secondary}>{now}</p>
      </Section>

      {/* Education */}
      <Section title={t("home.education")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {education.map((ed, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
              <span>
                <strong style={{ fontWeight: 500 }}>{ed.degree}</strong>
                {", "}
                <span style={secondary}>{ed.school}</span>
              </span>
              <span style={{ ...smallGray, whiteSpace: "nowrap" }}>{ed.date}</span>
            </div>
          ))}
        </div>
        <p style={{ ...tertiary, marginTop: "0.9rem", marginBottom: "0.25rem" }}>{t("home.selectedCoursework")}</p>
        <p style={{ ...secondary, marginTop: 0 }}>{coursework.join(" · ")}</p>
      </Section>

      {/* Awards */}
      <Section title={t("home.awards")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {awards.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
              <span style={{ ...smallGray, whiteSpace: "nowrap", minWidth: "3.25rem" }}>{a.year}</span>
              <span style={{ ...secondary, ...small }}>
                {a.text}
                {a.links?.map((link) => <span key={link.url}> · <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></span>)}
              </span>
            </div>
          ))}
        </div>
        <p style={{ ...secondary, fontSize: "0.9375rem", marginTop: "0.75rem" }}>
          {t("home.tests")}: {tests.join(" · ")}
        </p>
      </Section>

      {/* Skills */}
      <div className="mobile-only">{skillsSection}</div>
      <div className="desktop-only">{tutoringSection}</div>
    </div>
  );

  /* ---- Right column: longer sections ---- */
  const right = (
    <div>
      <div className="desktop-only">{skillsSection}</div>
      {/* Experience */}
      <Section title={t("home.experience")}>
        {experience.map((e, i) => (
          <ExperienceItem key={i} {...e} detailLabel={detailLabel} onOpen={() => setActiveDetail({ ...e, title: e.role, subtitle: e.org, story: getDetailStory(lang, e.id) || getDetailStory(lang, e.role) })} />
        ))}
      </Section>

      {/* Research */}
      <Section title={t("home.research")}>
        {research.map((r, i) => (
          <ExperienceItem key={i} {...r} detailLabel={detailLabel} onOpen={() => setActiveDetail({ ...r, title: r.role, subtitle: r.org, story: getDetailStory(lang, r.id) || getDetailStory(lang, r.role) })} />
        ))}
      </Section>

      <Section title={t("home.publications")}>
        {publications.map((p, i) => (
          <ExperienceItem key={i} role={p.title} org={p.venue} date={p.date} line={p.line} links={p.links} detailLabel={detailLabel} onOpen={() => setActiveDetail({ ...p, subtitle: p.venue, story: getDetailStory(lang, p.id) || getDetailStory(lang, p.title) })} />
        ))}
      </Section>

      {/* Projects */}
      <Section title={t("home.projects")}>
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} detailLabel={detailLabel} onOpen={() => setActiveDetail({ ...p, title: p.name, subtitle: "Project", links: [{ label: "website", url: p.url }], story: getDetailStory(lang, p.id) || getDetailStory(lang, p.name) })} />
        ))}
      </Section>

      <div className="mobile-only">{tutoringSection}</div>

      {/* Blog */}
      <Section title={t("home.writing")}>
        <p style={secondary}>
          {t("home.writingLine")}{" "}
          <Link to="/blog">{t("home.readBlog")}</Link>.
        </p>
      </Section>

      <Section title={t("home.certificates")}>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <a key={certificate.src} className="certificate-card" href={certificate.src} target="_blank" rel="noopener noreferrer">
              <span className="certificate-sheet">
                <img src={certificate.preview || certificate.src} alt="" loading="lazy" />
              </span>
              <span>{certificate.title}</span>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );

  return (
    <>
      <main className="home-layout">
        <div className="home-left">{left}</div>
        <div className="home-right">{right}</div>
      </main>

      {activeReview && (
        <div
          className="review-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveReviewIdx(null)}
        >
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="review-modal-close"
              onClick={() => setActiveReviewIdx(null)}
              aria-label={t("home.close")}
            >
              ×
            </button>
            <img src={activeReview.src} alt={activeReview.alt} className="review-modal-img" />
          </div>
        </div>
      )}

      {activeDetail && (
        <div className="detail-backdrop" role="presentation" onClick={() => setActiveDetail(null)}>
          <article className="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(e) => e.stopPropagation()}>
            <header className="detail-drawer-header">
              <button type="button" className="detail-close" onClick={() => setActiveDetail(null)} aria-label={t("home.close")}>Close</button>
              <p className="detail-meta">{activeDetail.date}{activeDetail.subtitle ? ` · ${activeDetail.subtitle}` : ""}</p>
              <h2 id="detail-title">{activeDetail.title}</h2>
              <p className="detail-lede">{activeDetail.line}</p>
              <ResourceLinks links={activeDetail.links} />
            </header>
            <div className="detail-article">
              {(activeDetail.story?.length ? activeDetail.story : activeDetail.details || [activeDetail.line]).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </article>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--divider)",
          paddingTop: "1.5rem",
          paddingBottom: "3rem",
          marginTop: "1rem",
          fontSize: "0.9375rem",
          color: "var(--text-tertiary)",
        }}
      >
        <p>
          © {new Date().getFullYear()} Atay Kim
          {" · "}
          <a href={`mailto:${meta.email}`}>{meta.email}</a>
          {" · "}
          <a href={meta.telegram} target="_blank" rel="noopener noreferrer">{t("common.telegram")}</a>
          {" · "}
          <a href={meta.github} target="_blank" rel="noopener noreferrer">{t("common.github")}</a>
        </p>
      </footer>

      <style>{`
        .home-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding-top: 5rem;
          padding-bottom: 2rem;
          align-items: start;
        }
        .home-left, .home-right { min-width: 0; }
        .mobile-only { display: none; }
        .entry-actions { display: flex; align-items: center; flex-wrap: wrap; gap: .5rem; margin-top: -.35rem; }
        .resource-links { display: flex; flex-wrap: wrap; gap: .4rem; }
        .resource-links a, .more-button {
          display: inline-flex;
          align-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          color: #185f94;
          font: inherit;
          text-decoration: underline;
          text-decoration-color: #b7d8f2;
          text-underline-offset: 3px;
          cursor: pointer;
        }
        .resource-links a:hover, .more-button:hover { color: #0b4f82; text-decoration-color: currentColor; }
        .resource-links a:focus-visible, .more-button:focus-visible, .detail-close:focus-visible { outline: 2px solid #185f94; outline-offset: 2px; }
        .certificate-grid { display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; padding: .1rem 0 .8rem; scrollbar-width: thin; }
        .certificate-card { flex: 0 0 min(72%, 18rem); display: flex; flex-direction: column; gap: .45rem; color: #185f94; text-decoration: none; scroll-snap-align: start; }
        .certificate-sheet { aspect-ratio: 4 / 3; display: grid; place-items: center; padding: .5rem; border: 1px solid var(--divider); background: #fff; }
        .certificate-card img { display: block; width: 100%; height: 100%; object-fit: contain; }
        .detail-backdrop { position: fixed; inset: 0; z-index: 60; background: rgba(26,26,26,.28); display: flex; justify-content: flex-end; }
        .detail-drawer { width: min(720px, 92vw); height: 100%; overflow-y: auto; overscroll-behavior: contain; background: var(--bg); padding: 2rem 4rem 5rem; box-shadow: -14px 0 42px rgba(0,0,0,.12); animation: drawer-in 220ms ease-out; }
        .detail-drawer-header { padding-bottom: 1.5rem; border-bottom: 1px solid var(--divider); }
        .detail-close { min-height: 30px; padding: .2rem .65rem; border: 1px solid #b7d8f2; border-radius: 999px; background: #eaf5ff; color: #185f94; font: inherit; cursor: pointer; }
        .detail-meta { color: var(--text-tertiary); margin: 1.5rem 0 .3rem; }
        .detail-drawer h2 { font-size: inherit; line-height: inherit; margin: 0 0 .75rem; }
        .detail-lede { color: var(--text-secondary); margin-bottom: 1rem; }
        .detail-article { max-width: 42rem; padding-top: 1.3rem; color: var(--text-secondary); }
        .detail-article p { margin: 0 0 1.2rem; }
        @keyframes drawer-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .detail-drawer { animation: none; } }
        @media (max-width: 768px) {
          .home-layout {
            grid-template-columns: 1fr;
            gap: 0;
            padding-top: 3rem;
          }
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .resource-links a, .more-button { min-height: 44px; padding: .55rem 0; }
          .detail-close { min-height: 44px; }
          .certificate-card { flex-basis: 86%; }
          .detail-drawer { width: 100%; padding: 1.25rem 1.25rem 4rem; box-shadow: none; }
          .tutor-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }
        .review-tile {
          background: #e8e6e1;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          padding: 0;
          border: 0;
          cursor: pointer;
          position: relative;
          display: block;
        }
        .review-tile:focus-visible {
          outline: 2px solid var(--text-tertiary);
          outline-offset: 2px;
        }
        .review-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .review-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.5rem 0.6rem;
          font-size: 0.9375rem;
          color: rgba(255,255,255,0.92);
          background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0));
          text-align: left;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 150ms ease, transform 150ms ease;
          pointer-events: none;
        }
        .review-tile:hover .review-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .review-tile:hover .review-img {
          filter: contrast(1.05) brightness(0.97);
        }

        .review-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: grid;
          place-items: center;
          padding: 1.5rem;
          z-index: 50;
        }
        .review-modal {
          position: relative;
          max-width: min(1000px, 92vw);
          max-height: 92vh;
          display: grid;
          align-items: center;
          justify-items: center;
        }
        .review-modal-img {
          max-width: 100%;
          max-height: 92vh;
          width: auto;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          background: rgba(255,255,255,0.04);
        }
        .review-modal-close {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(0,0,0,0.35);
          color: rgba(255,255,255,0.9);
          font-size: 0.9375rem;
          line-height: 1;
          cursor: pointer;
        }
        .review-modal-close:hover {
          background: rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .review-tile { aspect-ratio: 3 / 4; }
          .review-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
