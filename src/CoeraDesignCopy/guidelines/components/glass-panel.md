# GlassPanel & GlassCard

Liquid glass containers using Figma's native glass morphism effect. Use for featured, prominent content.

## When to Use

Use GlassPanel for large floating containers, overlays, and feature highlights. Use GlassCard for smaller featured items like stats, metrics, or partner showcases.

## GlassPanel Properties

| Property | Value |
|----------|-------|
| Effect | "Liquid Glass" effect style |
| Fill | Black (#000000) at 10% opacity |
| Corner radius | 30px (`radius/lg`) |
| Padding | 32px all sides (`spacing/xl`) |
| Item spacing | 16px (`spacing/md`) |
| Layout | Vertical (auto-layout) |
| Title | PP Telegraf, 24px, cream |
| Body | PP Mori, 16px, warm gray, 180% line-height |

## GlassCard Properties

| Property | Value |
|----------|-------|
| Effect | "Liquid Glass" effect style |
| Fill | White (#FFFFFF) at 5% opacity |
| Corner radius | 30px (`radius/lg`) |
| Padding | 32px all sides (`spacing/xl`) |
| Item spacing | 16px (`spacing/md`) |
| Layout | Vertical (auto-layout) |

## Selection

```
┌─ "GlassPanel or GlassCard?"
├─ Large container (floating panel, overlay, feature section)?
│  └─ GlassPanel (black 10% fill)
└─ Small card (stat, metric, showcase, partner logo)?
   └─ GlassCard (white 5% fill)
```

## Rules — IMPORTANT

- ONLY use on dark (#000000) backgrounds — glass effect needs contrast
- Never apply glass on cream/light backgrounds — it will be invisible
- Use sparingly — not every container needs glass
- Reserve for featured/prominent elements only
- Pair multiple GlassCards in a grid for dashboard-like layouts
- Standard content → use Card component instead
