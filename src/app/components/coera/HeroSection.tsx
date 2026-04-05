/**
 * coera Section/Hero
 *
 * First section on every page. Full viewport height, centered.
 * Black background, cream H1 headline, optional warm-gray subhead.
 *
 * Guidelines: composition/sections.md → Section/Hero
 */

import { Button } from "./Button";

interface HeroSectionProps {
  headline: string;
  subhead?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function HeroSection({
  headline,
  subhead,
  ctaLabel,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section
      style={{
        background:     "var(--semantic-bg-primary)",
        /* full viewport height */
        minHeight:      "100vh",
        /* padding: 200px top, 120px bottom, 120px horizontal */
        paddingTop:     "200px",
        paddingBottom:  "120px",
        paddingLeft:    "120px",
        paddingRight:   "120px",
        /* layout: vertical, center */
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            "var(--spacing-xl)",
        textAlign:      "center",
        boxSizing:      "border-box",
      }}
    >
      {/* H1 headline — Desktop-H1 (100px), cream */}
      <h1
        className="desktop-h1"
        style={{
          color:    "var(--semantic-text-primary)",
          margin:   0,
          maxWidth: "900px",
          textWrap: "balance",
        }}
      >
        {headline}
      </h1>

      {/* Optional subhead — PP Mori 20px, warm gray */}
      {subhead && (
        <p
          style={{
            fontFamily:  '"PP Mori", "DM Sans", sans-serif',
            fontSize:    "20px",
            fontWeight:  400,
            lineHeight:  "1.8",
            color:       "var(--brand-warm-gray)",
            margin:      0,
            maxWidth:    "560px",
            textWrap:    "pretty",
            letterSpacing: 0,
          }}
        >
          {subhead}
        </p>
      )}

      {/* Optional CTA */}
      {ctaLabel && (
        <Button label={ctaLabel} variant="dark" onClick={onCtaClick} />
      )}
    </section>
  );
}
