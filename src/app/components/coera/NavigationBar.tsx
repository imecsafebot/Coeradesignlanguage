/**
 * coera NavigationBar Component
 *
 * Fixed top nav with liquid glass effect.
 * Logo (left) + nav links (right).
 * Active link indicated by orange underline — one at a time.
 *
 * Guidelines: components/navigation.md
 */

import { useState } from "react";
import coeraLogoWhite from "../../../imports/Coera-logo-white.svg";

const NAV_ITEMS = ["Vision", "About", "Pilot", "Careers", "Contact"];

export function NavigationBar() {
  const [active, setActive] = useState("Vision");

  return (
    <nav
      style={{
        position:   "fixed",
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        /* height: 80px */
        height:     "80px",
        /* glass effect */
        background:           "rgba(0, 0, 0, 0.10)",
        backdropFilter:       "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom:         "1px solid rgba(224, 215, 215, 0.08)",
        /* layout */
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        /* padding horizontal: 60px */
        paddingLeft:  "60px",
        paddingRight: "60px",
      }}
    >
      {/* coera wordmark — always lowercase, cream on dark */}
      <a
        href="#"
        style={{
          display:       "flex",
          alignItems:    "center",
          textDecoration:"none",
          userSelect:    "none",
        }}
      >
        <img
          src={coeraLogoWhite}
          alt="coera"
          style={{
            height: "24px",
            width:  "auto",
          }}
        />
      </a>

      {/* Nav links */}
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
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActive(item); }}
              style={{
                fontFamily:    '"PP Telegraf", "Space Grotesk", sans-serif',
                fontSize:      "14px",
                fontWeight:    400,
                lineHeight:    "1",
                color:         "var(--brand-cream)",
                textDecoration:"none",
                letterSpacing: 0,
                /* active state: orange underline */
                borderBottom:
                  active === item
                    ? "1px solid var(--brand-orange)"
                    : "1px solid transparent",
                paddingBottom: "2px",
                transition:    "border-color 0.2s",
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}