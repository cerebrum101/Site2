import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getSiteData,
} from "../data";

const ME_PHOTO_SRC = new URL("../assets/me.jpg", import.meta.url).href;

const sectionHeading = {
  fontSize: "0.7rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--text-tertiary)",
  marginBottom: "1rem",
};

const secondary = { color: "var(--text-secondary)" };
const tertiary = { color: "var(--text-tertiary)" };
const small = { fontSize: "0.9375rem" };
const smallGray = { fontSize: "0.8125rem", color: "var(--text-tertiary)" };

const Section = ({ title, children, style }) => (
  <section style={{ marginBottom: "3rem", ...style }}>
    <h2 style={sectionHeading}>{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, org, url, date, line, links, details, onOpen }) => (
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
      {Array.isArray(links) && links.length > 0 && (
        <>
          {" "}
          {links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && " / "}
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                [{link.label}]
              </a>
            </span>
          ))}
        </>
      )}
      {Array.isArray(details) && details.length > 0 && (
        <> {" / "}<button type="button" className="detail-link" onClick={onOpen}>more</button></>
      )}
    </p>
  </div>
);

const ProjectItem = ({ name, url, line }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <span style={{ fontWeight: 500 }}>{name}</span>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginLeft: "0.5rem",
        fontSize: "0.8125rem",
        color: "var(--text-tertiary)",
      }}
    >
      [link]
    </a>
    <p style={{ ...secondary, ...small, marginTop: "0.15rem" }}>{line}</p>
  </div>
);

export default function Home() {
  const [showCourses, setShowCourses] = useState(false);
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
    const onKeyDown = (e) => e.key === "Escape" && setActiveDetail(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeDetail]);

  /* ---- Left column: identity + short sections ---- */
  const left = (
    <div>
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h1
              style={{
                fontSize: "1.75rem",
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
                fontSize: "0.75rem",
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
                fontSize: "0.75rem",
                color: lang === "ru" ? "var(--text-primary)" : "var(--text-tertiary)",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {t("lang.ru")}
            </button>
          </div>
        </div>
        <p style={{ fontSize: "0.8125rem", ...tertiary }}>
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
              '<span style="color: var(--text-tertiary); font-size: 0.8125rem;">photo</span>';
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
        <div style={{ marginTop: "0.75rem" }}>
          <button
            onClick={() => setShowCourses(!showCourses)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontSize: "0.8125rem",
              color: "var(--text-tertiary)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "var(--divider)",
              fontFamily: "inherit",
            }}
          >
            {showCourses ? t("home.hideCoursework") : t("home.selectedCoursework")}
          </button>
          {showCourses && (
            <p style={{ ...secondary, fontSize: "0.875rem", marginTop: "0.4rem" }}>
              {coursework.join(" · ")}
            </p>
          )}
        </div>
      </Section>

      {/* Awards */}
      <Section title={t("home.awards")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {awards.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
              <span style={{ ...smallGray, whiteSpace: "nowrap", minWidth: "3.25rem" }}>{a.year}</span>
              <span style={{ ...secondary, ...small }}>{a.text}</span>
            </div>
          ))}
        </div>
        <p style={{ ...tertiary, fontSize: "0.8125rem", marginTop: "0.75rem" }}>
          {t("home.tests")}: {tests.join(" · ")}
        </p>
      </Section>

      {/* Skills */}
      <Section title={t("home.skills")}>
        <p style={{ ...secondary, ...small }}>{skills.stack}</p>
        <p style={{ ...secondary, ...small }}>{skills.tools}</p>
        <p style={{ ...secondary, ...small }}>{skills.languages}</p>
      </Section>
    </div>
  );

  /* ---- Right column: longer sections ---- */
  const right = (
    <div>
      {/* Experience */}
      <Section title={t("home.experience")}>
        {experience.map((e, i) => (
          <ExperienceItem key={i} {...e} onOpen={() => setActiveDetail(e)} />
        ))}
      </Section>

      {/* Research */}
      <Section title={t("home.research")}>
        {research.map((r, i) => (
          <ExperienceItem key={i} {...r} onOpen={() => setActiveDetail(r)} />
        ))}
      </Section>

      <Section title={t("home.publications")}>
        {publications.map((p, i) => (
          <ExperienceItem key={i} role={p.title} org={p.venue} date={p.date} line={p.line} links={p.links} details={p.details} onOpen={() => setActiveDetail(p)} />
        ))}
      </Section>

      {/* Projects */}
      <Section title={t("home.projects")}>
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} />
        ))}
      </Section>

      {/* Tutoring */}
      <Section title={t("home.tutoring")}>
        <p style={{ ...secondary, marginBottom: "0.5rem" }}>{tutoring.tagline}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }} className="tutor-grid">
          <div>
            <p style={{ ...smallGray, marginBottom: "0.5rem" }}>{t("home.prep")}</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
              {tutoring.prep.map((x, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>
              ))}
            </ul>

            <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>{t("home.university")}</p>
            <p style={{ ...secondary, ...small, margin: 0 }}>{tutoring.uniCourses.join(" · ")}</p>
          </div>

          <div>
            <p style={{ ...smallGray, marginBottom: "0.5rem" }}>{t("home.myScores")}</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
              {tutoring.myScores.map((x, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>
              ))}
            </ul>

            <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>{t("home.studentOutcomes")}</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
              {tutoring.studentResults.map((x, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ ...tertiary, fontSize: "0.8125rem", marginTop: "1rem" }}>{tutoring.note}</p>

        <p style={{ fontSize: "0.875rem", marginTop: "0.75rem" }}>
          <a href={tutoring.contacts.telegramUrl} target="_blank" rel="noopener noreferrer">
            TG {tutoring.contacts.telegramHandle}
          </a>
          {" / "}
          <a href={tutoring.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer">{t("common.whatsapp")}</a>
          {" / "}
          <span style={tertiary}>{tutoring.contacts.phone}</span>
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ ...smallGray, marginBottom: "0.25rem" }}>{t("home.reviews")}</p>
          <p style={{ ...tertiary, fontSize: "0.8125rem", margin: 0, marginBottom: "0.75rem" }}>
            {t("home.reviewsHint")}
          </p>
          <div className="reviews-grid">
            {reviewImages.map((img, i) => (
              <button
                key={i}
                type="button"
                className="review-tile"
                onClick={() => setActiveReviewIdx(i)}
                aria-label={img.alt}
              >
                <img src={img.src} alt={img.alt} className="review-img" />
                <span className="review-overlay">{t("home.reviewsHint")}</span>
              </button>
            ))}
          </div>
        </div>
      </Section>

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
              {certificate.pdf ? <span className="certificate-pdf">PDF</span> : <img src={certificate.src} alt="" />}
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
        <div className="detail-backdrop" role="dialog" aria-modal="true" onClick={() => setActiveDetail(null)}>
          <article className="detail-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="detail-close" onClick={() => setActiveDetail(null)} aria-label={t("home.close")}>×</button>
            <p className="detail-kicker">{activeDetail.date}</p>
            <h2>{activeDetail.title || activeDetail.role}</h2>
            <p className="detail-org">{activeDetail.venue || activeDetail.org}</p>
            <p>{activeDetail.line}</p>
            <ul>{activeDetail.details?.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>{activeDetail.links?.map((link, i) => <span key={link.url}>{i > 0 && " / "}<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></span>)}</p>
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
          fontSize: "0.8125rem",
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
        .home-left {
          position: sticky;
          top: 3rem;
        }
        @media (max-width: 768px) {
          .home-layout {
            grid-template-columns: 1fr;
            gap: 0;
            padding-top: 3rem;
          }
          .home-left {
            position: static;
          }
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
          aspect-ratio: 3 / 4;
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
          font-size: 0.75rem;
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
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
        }
        .review-modal-close:hover {
          background: rgba(0,0,0,0.5);
        }
        .detail-link { border: 0; padding: 0; background: none; color: var(--text); text-decoration: underline; text-decoration-color: var(--divider); text-underline-offset: 3px; font: inherit; cursor: pointer; }
        .detail-backdrop { position: fixed; inset: 0; z-index: 60; background: rgba(0,0,0,.36); display: flex; justify-content: flex-end; }
        .detail-panel { position: relative; width: min(520px, 100%); height: 100%; overflow: auto; padding: 4rem 3rem; background: var(--bg); box-shadow: -12px 0 40px rgba(0,0,0,.12); }
        .detail-panel h2 { font-size: 1.6rem; line-height: 1.25; margin: .35rem 0 .2rem; }
        .detail-panel li { margin-bottom: .75rem; color: var(--text-secondary); }
        .detail-kicker, .detail-org { color: var(--text-tertiary); font-size: .85rem; }
        .detail-close { position: absolute; top: 1rem; right: 1rem; border: 1px solid var(--divider); border-radius: 999px; width: 36px; height: 36px; background: transparent; font-size: 22px; cursor: pointer; }
        .certificate-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; }
        .certificate-card { display: flex; flex-direction: column; gap: .45rem; font-size: .8rem; color: var(--text-secondary); text-decoration: none; }
        .certificate-card img, .certificate-pdf { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #e8e6e1; border: 1px solid var(--divider); }
        .certificate-pdf { display: grid; place-items: center; font-weight: 600; letter-spacing: .08em; color: var(--text-tertiary); }
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .review-overlay {
            opacity: 1;
            transform: translateY(0);
          }
          .detail-panel { width: 100%; padding: 4rem 1.25rem 2rem; box-shadow: none; }
        }
      `}</style>
    </>
  );
}
