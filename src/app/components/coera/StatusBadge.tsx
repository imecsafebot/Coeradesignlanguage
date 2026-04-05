/**
 * coera StatusBadge Component
 *
 * Device health indicator showing connection/operational state with a colored dot.
 * Always pair with a device name or label.
 *
 * Guidelines: components/status-badge.md
 */

type StatusVariant = "ok" | "warning" | "error";

interface StatusBadgeProps {
  label: string;
  status: StatusVariant;
  className?: string;
}

const DOT_COLORS: Record<StatusVariant, string> = {
  ok:      "var(--semantic-success)",  /* #22C55E */
  warning: "var(--semantic-warning)",  /* #FFB200 */
  error:   "var(--semantic-error)",    /* #EF4444 */
};

export function StatusBadge({ label, status, className = "" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{
        background:   "var(--brand-near-black)",
        borderRadius: "var(--radius-pill)",
        /* padding: 8px top/bottom, 12px left, 16px right */
        padding:      "8px 16px 8px 12px",
        gap:          "var(--spacing-sm)",
      }}
    >
      {/* Status dot — 10×10px */}
      <span
        style={{
          width:        "10px",
          height:       "10px",
          borderRadius: "50%",
          background:   DOT_COLORS[status],
          flexShrink:   0,
        }}
      />
      {/* Label */}
      <span
        style={{
          fontFamily:  '"PP Telegraf", "Space Grotesk", sans-serif',
          fontSize:    "14px",
          fontWeight:  400,
          lineHeight:  "1",
          color:       "var(--brand-cream)",
          letterSpacing: 0,
        }}
      >
        {label}
      </span>
    </span>
  );
}
