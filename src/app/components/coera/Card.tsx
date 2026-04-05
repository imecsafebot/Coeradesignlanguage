/**
 * coera Card Component
 *
 * Content container for grouping related information on dark backgrounds.
 * For featured/prominent content, use GlassPanel or GlassCard instead.
 *
 * Guidelines: components/card.md
 */

import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  /** Use "light" variant when card appears on cream backgrounds */
  variant?: "dark" | "light";
}

export function Card({ title, children, className = "", variant = "dark" }: CardProps) {
  const bg      = variant === "dark" ? "var(--brand-near-black)" : "var(--brand-white)";
  const titleColor = "var(--brand-cream)";

  return (
    <div
      className={className}
      style={{
        background:   bg,
        borderRadius: "var(--radius-lg)",
        padding:      "var(--spacing-xl)",
        display:      "flex",
        flexDirection:"column",
        gap:          "var(--spacing-md)",
      }}
    >
      {title && (
        <h3
          style={{
            fontFamily: '"PP Telegraf", "Space Grotesk", sans-serif',
            fontSize:   "24px",
            fontWeight: 400,
            lineHeight: "1.2",
            color:      titleColor,
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
