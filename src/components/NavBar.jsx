import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  if (!pathname.startsWith("/blog") && pathname !== "/login" && !pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <nav style={{ paddingTop: "2rem" }}>
      <Link
        to="/"
        style={{
          fontSize: "0.8125rem",
          color: "var(--text-tertiary)",
          textDecoration: "none",
        }}
      >
        ← Atay Kim
      </Link>
    </nav>
  );
}
