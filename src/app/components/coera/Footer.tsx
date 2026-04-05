/**
 * coera Footer Component
 *
 * Page footer with branding, tagline, social links, "Contact us" button, and legal text.
 * Black background with subtle orange radial gradient overlay.
 * Always the very last element on the page.
 *
 * Guidelines: components/footer.md
 */

import { Button } from "./Button";
import coeraLogoWhite from "../../../imports/Coera-logo-white.svg";

const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube",   href: "#" },
  { label: "X",         href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{
        width:      "100%",
        background: "#000000",
        /* subtle orange radial gradient overlay */
        backgroundImage:
          "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,94,0,0.12) 0%, transparent 70%)",
        /* padding: 80px top, 60px bottom, 60px horizontal */
        paddingTop:    "80px",
        paddingBottom: "60px",
        paddingLeft:   "60px",
        paddingRight:  "60px",
        /* layout: vertical, center-aligned */
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           "40px",
      }}
    >
      {/* coera wordmark — SVG logo, cream on dark */}
      <img
        src={coeraLogoWhite}
        alt="coera"
        style={{
          height: "32px",
          width:  "auto",
        }}
      />

      {/* Tagline — always "Tomorrow starts with coera" */}
      <p
        style={{
          fontFamily:    '"PP Mori", "DM Sans", sans-serif',
          fontSize:      "16px",
          fontWeight:    400,
          lineHeight:    "1.8",
          color:         "var(--brand-cream)",
          letterSpacing: 0,
          margin:        0,
          textAlign:     "center",
        }}
      >
        Tomorrow starts with coera
      </p>

      {/* Social links — warm gray, 14px, PP Mori */}
      <ul
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        "var(--spacing-3xl)",
          listStyle:  "none",
          margin:     0,
          padding:    0,
        }}
      >
        {SOCIAL_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                fontFamily:    '"PP Mori", "DM Sans", sans-serif',
                fontSize:      "14px",
                fontWeight:    400,
                lineHeight:    "1.6",
                color:         "var(--brand-warm-gray)",
                textDecoration:"none",
                letterSpacing: 0,
                transition:    "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--brand-cream)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--brand-warm-gray)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* "Contact us" button — orange-outlined pill */}
      <Button label="Contact us" variant="dark" />

      {/* Legal text — warm gray at 60% opacity, 12px, PP Mori */}
      <p
        style={{
          fontFamily:    '"PP Mori", "DM Sans", sans-serif',
          fontSize:      "12px",
          fontWeight:    400,
          lineHeight:    "auto",
          color:         "rgba(224, 215, 215, 0.60)",
          letterSpacing: 0,
          margin:        0,
          textAlign:     "center",
        }}
      >
        2026 coera. All rights reserved.
      </p>
    </footer>
  );
}