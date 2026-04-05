# Styles Reference

All styles are defined as CSS custom properties in the design system stylesheet. This file maps CSS classes and custom properties to their usage.

## Typography Classes

Use these CSS classes for text styling. They set font-family, font-size, line-height, and letter-spacing.

### Desktop

| CSS Class | Font | Size | Line Height | Use For |
|-----------|------|------|-------------|---------|
| `.desktop-h1` | PP Telegraf | 100px | 1 | Hero headlines |
| `.desktop-h2` | PP Telegraf | 50px | 1.2 | Section titles |
| `.desktop-h3` | PP Telegraf | 40px | 1.2 | Sub-section headers |
| `.desktop-h4` | PP Telegraf | 30px | 1.2 | Card titles |
| `.desktop-h5` | PP Telegraf | 24px | 1.2 | Small headers |
| `.desktop-p` | PP Mori | 16px | 1.8 | Body text |

### Mobile

| CSS Class | Font | Size | Line Height | Use For |
|-----------|------|------|-------------|---------|
| `.mobile-h1` | PP Telegraf | 50px | 1 | Mobile hero |
| `.mobile-h2` | PP Telegraf | 30px | 1.2 | Mobile section titles |
| `.mobile-h3-h5` | PP Telegraf | 24px | 1.2 | Mobile sub-headers |
| `.mobile-p` | PP Mori | 16px | 1.8 | Mobile body |

## Font Selection

```
┌─ "Which font family?"
├─ Headline, label, button, nav, status text?
│  └─ PP Telegraf (font-family: "PP Telegraf", sans-serif)
└─ Body copy, description, caption, legal?
   └─ PP Mori (font-family: "PP Mori", sans-serif)
```

IMPORTANT: Regular (400) weight only for both families. Hierarchy through size, not weight.

## Layout Principles

- Default background: black (`var(--brand-black)`)
- Sections separated by 120-135px (`var(--spacing-5xl)`)
- Content padding: 60-120px from viewport edges
- Rounded corners: `var(--radius-lg)` (30px) for containers, `var(--radius-pill)` for buttons
- All interactive elements: minimum 48x48px touch targets

## Color Usage

See [foundations/color.md](./foundations/color.md) for full decision trees.

- Primary text on dark: `var(--semantic-text-primary)` → cream
- Primary text on light: `var(--semantic-text-secondary)` → near-black
- Accent: `var(--semantic-accent)` → orange (CTAs only, sparingly)
- Borders: `var(--semantic-border)` → warm gray

## Responsive Behavior

- Desktop: 22-column grid, 1440px+ width
- Mobile: single column, 380px width
- Section/ImageText stacks vertically on mobile
- Headlines scale down: H1 100px → 50px on mobile