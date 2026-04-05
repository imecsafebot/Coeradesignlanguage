/**
 * coera Section/ImageText
 *
 * Feature showcase: image left, text right (or reversed).
 * 50/50 horizontal split with 64px gap.
 * Black background.
 *
 * Guidelines: composition/sections.md → Section/ImageText
 */

import { Button } from "./Button";

interface ImageTextSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  body: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** Reverse puts text left, image right */
  reverse?: boolean;
}

export function ImageTextSection({
  imageUrl,
  imageAlt,
  title,
  body,
  ctaLabel,
  onCtaClick,
  reverse = false,
}: ImageTextSectionProps) {
  return (
    <section
      style={{
        background:    "var(--semantic-bg-primary)",
        /* height: 800px */
        minHeight:     "800px",
        /* padding: 80px all sides */
        padding:       "80px",
        /* layout: horizontal, 50/50 */
        display:       "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems:    "center",
        gap:           "var(--spacing-3xl)",
        boxSizing:     "border-box",
      }}
    >
      {/* Image — fills left half, radius/lg (30px) */}
      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{
            width:        "100%",
            height:       "560px",
            objectFit:    "cover",
            borderRadius: "var(--radius-lg)",
            display:      "block",
          }}
        />
      </div>

      {/* Text block */}
      <div
        style={{
          flex:          "1 1 0",
          minWidth:      0,
          display:       "flex",
          flexDirection: "column",
          gap:           "var(--spacing-lg)",
        }}
      >
        {/* H2 title, cream */}
        <h2
          className="desktop-h2"
          style={{
            color:    "var(--semantic-text-primary)",
            margin:   0,
            textWrap: "pretty",
          }}
        >
          {title}
        </h2>

        {/* Body — Desktop-P, warm gray */}
        <p
          className="desktop-p"
          style={{
            color:    "var(--brand-warm-gray)",
            margin:   0,
            maxWidth: "480px",
          }}
        >
          {body}
        </p>

        {ctaLabel && (
          <div style={{ marginTop: "var(--spacing-md)" }}>
            <Button label={ctaLabel} variant="dark" onClick={onCtaClick} />
          </div>
        )}
      </div>
    </section>
  );
}
