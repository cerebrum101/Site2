import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  if (!pathname.startsWith("/blog") && pathname !== "/login" && !pathname.startsWith("/admin")) {
    return null;
  }

  const lang = i18n.resolvedLanguage || "en";

  return (
    <nav style={{ paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
      <Link
        to="/"
        style={{
          fontSize: "0.8125rem",
          color: "var(--text-tertiary)",
          textDecoration: "none",
        }}
      >
        {t("nav.backHome")}
      </Link>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
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
          }}
        >
          {t("lang.ru")}
        </button>
      </div>
    </nav>
  );
}
