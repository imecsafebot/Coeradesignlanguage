/**
 * coera Section/ContentLight
 *
 * Cream background section for visual contrast after dark sections.
 * All text must be near-black — never cream on cream.
 *
 * Guidelines: composition/sections.md → Section/ContentLight
 */

import { ReactNode } from "react";

interface ContentLightSectionProps {
  title: string;
  body?: string;
  children?: ReactNode;
}

export function ContentLightSection({
  title,
  body,
  children,
}: ContentLightSectionProps) {
  return (
    <section
      style={{
        background:    "var(--semantic-bg-secondary)",
        /* height: 700px */
        minHeight:     "700px",
        /* padding: 100px vertical, 120px horizontal */
        paddingTop:    "100px",
        paddingBottom: "100px",
        paddingLeft:   "120px",
        paddingRight:  "120px",
        /* layout: vertical */
        display:       "flex",
        flexDirection: "column",
        gap:           "var(--spacing-xl)",
        boxSizing:     "border-box",
      }}
    >
      {/* H3 title — Desktop-H3 (40px), near-black */}
      <h2
        className="desktop-h3"
        style={{
          color:    "var(--semantic-text-secondary)",
          margin:   0,
          textWrap: "pretty",
        }}
      >
        {title}
      </h2>

      {/* Optional body — Desktop-P, near-black */}
      {body && (
        <p
          className="desktop-p"
          style={{
            color:    "var(--semantic-text-secondary)",
            margin:   0,
            maxWidth: "640px",
          }}
        >
          {body}
        </p>
      )}

      {/* Slot for cards or other content */}
      {children && (
        <div style={{ marginTop: "var(--spacing-md)" }}>
          {children}
        </div>
      )}
    </section>
  );
}
