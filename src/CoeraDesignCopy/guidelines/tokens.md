# Design Tokens

All tokens are CSS custom properties defined in the design system stylesheet. Use `var(--token-name)` — never hardcode values.

## Color Tokens

### Brand Colors

| Token | Value | Frequency | Use For |
|-------|-------|-----------|---------|
| `--brand-black` | #000000 | ~60% | Primary background |
| `--brand-near-black` | #292424 | ~10% | Card fills, dark text |
| `--brand-cream` | #F8F1ED | ~20% | Primary text on dark, light backgrounds |
| `--brand-white` | #FFFFFF | Rare | Cards, overlays |
| `--brand-orange` | #FF5E00 | ~5% | Signal — CTAs, accents ONLY |
| `--brand-warm-gray` | #E0D7D7 | ~5% | Borders, secondary text |
| `--brand-orange-gold` | #FFB200 | Rare | Gradient partner, warning |

### Semantic Colors

| Token | Resolves To | Purpose |
|-------|------------|---------|
| `--semantic-bg-primary` | #000000 | Default page background |
| `--semantic-bg-secondary` | #F8F1ED | Light section background |
| `--semantic-text-primary` | #F8F1ED | Text on dark backgrounds |
| `--semantic-text-secondary` | #292424 | Text on light backgrounds |
| `--semantic-accent` | #FF5E00 | Interactive accent |
| `--semantic-border` | #E0D7D7 | Borders, dividers |
| `--semantic-success` | #22C55E | OK state |
| `--semantic-warning` | #FFB200 | Warning state |
| `--semantic-error` | #EF4444 | Error state |

## Spacing Tokens

| Token | Value | Use For |
|-------|-------|---------| 
| `--spacing-xs` | 4px | Icon padding |
| `--spacing-sm` | 8px | Inline spacing |
| `--spacing-md` | 16px | Component padding |
| `--spacing-lg` | 24px | Related elements |
| `--spacing-xl` | 32px | Card padding, groups |
| `--spacing-2xl` | 48px | Section sub-spacing |
| `--spacing-3xl` | 64px | Major elements |
| `--spacing-4xl` | 96px | Large section padding |
| `--spacing-5xl` | 120px | Between sections |

## Border Radius Tokens

| Token | Value | Use For |
|-------|-------|---------| 
| `--radius-sm` | 8px | Small elements |
| `--radius-md` | 16px | Medium containers |
| `--radius-lg` | 30px | Cards, panels, sections |
| `--radius-pill` | 10000px | Buttons, badges, nav items |

## Token Selection Decision Trees

```
┌─ "Which background?"
├─ Page background → var(--semantic-bg-primary)
├─ Light section → var(--semantic-bg-secondary)
├─ Card → var(--brand-near-black)
└─ Glass panel → var(--brand-black) at 10% opacity

┌─ "Which text color?"
├─ On dark bg → var(--semantic-text-primary)
├─ On light bg → var(--semantic-text-secondary)
├─ Secondary text → var(--brand-warm-gray)
└─ Interactive → var(--semantic-accent)

┌─ "Which radius?"
├─ Button/badge → var(--radius-pill)
├─ Card/panel → var(--radius-lg)
└─ Small element → var(--radius-sm)
```

IMPORTANT: Never use arbitrary values. Always reference a token from this system.