/**
 * coera GlassPanel & GlassCard Components
 *
 * Liquid glass containers — CSS approximation of Figma's native glass effect
 * using backdrop-filter blur + semi-transparent fill.
 *
 * ONLY use on dark (#000000) backgrounds — glass needs contrast to be visible.
 * Use sparingly — reserve for featured/prominent elements.
 *
 * Guidelines: components/glass-panel.md
 */

import { ReactNode } from "react";

interface GlassPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
  /**
   * "panel" = large floating container (black 10% fill)
   * "card"  = small featured card (white 5% fill)
   */
  variant?: "panel" | "card";
}

export function GlassPanel({
  title,
  children,
  className = "",
  variant = "panel",
}: GlassPanelProps) {
  const bg =
    variant === "panel"
      ? "rgba(0, 0, 0, 0.10)"     /* GlassPanel: black at 10% */
      : "rgba(255, 255, 255, 0.05)"; /* GlassCard:  white at 5% */

  return (
    <div
      className={className}
      style={{
        background:         bg,
        backdropFilter:     "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius:       "var(--radius-lg)",
        border:             "1px solid rgba(224, 215, 215, 0.15)",
        padding:            "var(--spacing-xl)",
        display:            "flex",
        flexDirection:      "column",
        gap:                "var(--spacing-md)",
      }}
    >
      {title && (
        <h3
          style={{
            fontFamily: '"PP Telegraf", "Space Grotesk", sans-serif',
            fontSize:   "24px",
            fontWeight: 400,
            lineHeight: "1.2",
            color:      "var(--brand-cream)",
            margin:     0,
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          fontFamily: '"PP Mori", "DM Sans", sans-serif',
          fontSize:   "16px",
          fontWeight: 400,
          lineHeight: "1.8",
          color:      "var(--brand-warm-gray)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
