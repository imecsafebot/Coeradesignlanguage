# Card

Content container for grouping related information on dark backgrounds.

## When to Use

Use Card to group text, status indicators, or other content into a visual container. For featured/prominent content, use GlassPanel or GlassCard instead (see `glass-panel.md`).

## Visual Properties

| Property | Value |
|----------|-------|
| Background | Near-black (#292424) |
| Corner radius | 30px (`radius/lg`) |
| Padding | 32px all sides (`spacing/xl`) |
| Item spacing | 16px (`spacing/md`) |
| Layout | Vertical (auto-layout) |

## Content Structure

1. **Title** — PP Telegraf, 24px, cream (#F8F1ED)
2. **Body** — PP Mori, 16px, warm gray (#E0D7D7), 180% line-height

## Card Selection

```
┌─ "Which container?"
├─ Standard content grouping?
│  └─ Card (solid near-black background)
├─ Featured or prominent content?
│  ├─ Large panel → GlassPanel (see glass-panel.md)
│  └─ Small card → GlassCard (see glass-panel.md)
└─ On a light/cream background?
   └─ Card with white (#FFFFFF) background instead
```

## Rules

- Cards can contain StatusBadges, text, buttons, or other nested content
- Maintain 32px internal padding consistently
- On kiosk/debug screens: use Cards in a grid layout for device monitoring
