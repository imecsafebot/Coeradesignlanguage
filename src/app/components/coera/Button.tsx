/**
 * coera Button Component
 *
 * Pill-shaped button for all interactive actions.
 * Two variants: dark (for black/dark backgrounds) and light (for cream backgrounds).
 *
 * Guidelines: components/button.md
 */

interface ButtonProps {
  label: string;
  variant?: "dark" | "light";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({
  label,
  variant = "dark",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const isDark = variant === "dark";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center transition-all duration-200 ${className}`}
      style={{
        /* radius/pill */
        borderRadius: "var(--radius-pill)",
        /* padding: 14px vertical, 30px horizontal */
        padding: "14px 30px",
        /* min-height 48px touch target */
        minHeight: "48px",
        minWidth: "120px",
        /* 1px orange border */
        border: "1px solid var(--brand-orange)",
        /* default fill: transparent */
        background: "transparent",
        /* font: PP Telegraf 16px */
        fontFamily: '"PP Telegraf", "Space Grotesk", sans-serif',
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "1",
        letterSpacing: 0,
        cursor: "pointer",
        /* text color based on variant */
        color: isDark ? "var(--brand-cream)" : "var(--brand-near-black)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background =
          "var(--brand-orange)";
        (e.currentTarget as HTMLButtonElement).style.color = "#000000";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color = isDark
          ? "var(--brand-cream)"
          : "var(--brand-near-black)";
      }}
    >
      {label}
    </button>
  );
}
