import React, { useEffect, useMemo, useState } from "react";
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

const ExperienceItem = ({ role, org, url, date, line }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
      <span>
        <strong style={{ fontWeight: 500 }}>{role}</strong>
        {" at "}
        {url ? <a href={url} target="_blank" rel="noopener noreferrer">{org}</a> : <span>{org}</span>}
      </span>
      <span style={{ ...smallGray, whiteSpace: "nowrap" }}>{date}</span>
    </div>
    <p style={{ ...secondary, ...small, marginTop: "0.2rem" }}>{line}</p>
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
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en";
  const {
    meta,
    now,
    experience,
    research,
    projects,
    education,
    coursework,
    awards,
    tests,
    skills,
    tutoring,
    reviewImages,
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
          <ExperienceItem key={i} {...e} />
        ))}
      </Section>

      {/* Research */}
      <Section title={t("home.research")}>
        {research.map((r, i) => (
          <ExperienceItem key={i} {...r} />
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
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
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .review-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
