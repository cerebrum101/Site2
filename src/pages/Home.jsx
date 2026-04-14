import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
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
} from "../data";

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

  /* ---- Left column: identity + short sections ---- */
  const left = (
    <div>
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
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
        <p style={{ fontSize: "0.8125rem", ...tertiary }}>
          <a href={`mailto:${meta.email}`}>{meta.email}</a>
          {" / "}
          <a href={meta.telegram} target="_blank" rel="noopener noreferrer">telegram</a>
          {" / "}
          <a href={meta.github} target="_blank" rel="noopener noreferrer">github</a>
          {" / "}
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          {" / "}
          <a href="/cv.pdf" target="_blank">cv</a>
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
          src="/photo.jpg"
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
      <Section title="Now">
        <p style={secondary}>{now}</p>
      </Section>

      {/* Education */}
      <Section title="Education">
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
            {showCourses ? "Hide coursework" : "Selected coursework"}
          </button>
          {showCourses && (
            <p style={{ ...secondary, fontSize: "0.875rem", marginTop: "0.4rem" }}>
              {coursework.join(" · ")}
            </p>
          )}
        </div>
      </Section>

      {/* Awards */}
      <Section title="Awards">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {awards.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
              <span style={{ ...smallGray, whiteSpace: "nowrap", minWidth: "3.25rem" }}>{a.year}</span>
              <span style={{ ...secondary, ...small }}>{a.text}</span>
            </div>
          ))}
        </div>
        <p style={{ ...tertiary, fontSize: "0.8125rem", marginTop: "0.75rem" }}>
          Tests: {tests.join(" · ")}
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills">
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
      <Section title="Experience">
        {experience.map((e, i) => (
          <ExperienceItem key={i} {...e} />
        ))}
      </Section>

      {/* Research */}
      <Section title="Research">
        {research.map((r, i) => (
          <ExperienceItem key={i} {...r} />
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} />
        ))}
      </Section>

      {/* Tutoring */}
      <Section title="Tutoring">
        <p style={{ ...secondary, marginBottom: "0.5rem" }}>{tutoring.tagline}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }} className="tutor-grid">
          <div>
            <p style={{ ...smallGray, marginBottom: "0.5rem" }}>Prep</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
              {tutoring.prep.map((x, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>
              ))}
            </ul>

            <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>University</p>
            <p style={{ ...secondary, ...small, margin: 0 }}>{tutoring.uniCourses.join(" · ")}</p>
          </div>

          <div>
            <p style={{ ...smallGray, marginBottom: "0.5rem" }}>My scores</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", ...secondary, ...small }}>
              {tutoring.myScores.map((x, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{x}</li>
              ))}
            </ul>

            <p style={{ ...smallGray, marginTop: "1rem", marginBottom: "0.5rem" }}>Student outcomes</p>
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
          <a href={tutoring.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          {" / "}
          <span style={tertiary}>{tutoring.contacts.phone}</span>
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ ...smallGray, marginBottom: "0.75rem" }}>Reviews</p>
          <div className="reviews-grid">
            {reviewImages.map((img, i) => (
              <div key={i} className="review-tile">
                <img src={img.src} alt={img.alt} className="review-img" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog */}
      <Section title="Writing">
        <p style={secondary}>
          I occasionally write about math and education.{" "}
          <Link to="/blog">Read the blog</Link>.
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
          <a href={meta.telegram} target="_blank" rel="noopener noreferrer">telegram</a>
          {" · "}
          <a href={meta.github} target="_blank" rel="noopener noreferrer">github</a>
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
        }
        .review-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
}
