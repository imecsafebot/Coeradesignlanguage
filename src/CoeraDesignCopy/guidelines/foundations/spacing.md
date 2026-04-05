# Spacing & Layout Tokens

## Spacing Scale

| Token | Value | Use For |
|-------|-------|---------| 
| `--spacing-xs` | 4px | Icon padding, tight gaps |
| `--spacing-sm` | 8px | Inline element spacing, touch target gaps |
| `--spacing-md` | 16px | Default component padding, item spacing |
| `--spacing-lg` | 24px | Between related elements |
| `--spacing-xl` | 32px | Card padding, between groups |
| `--spacing-2xl` | 48px | Section sub-spacing, touch targets |
| `--spacing-3xl` | 64px | Between major elements |
| `--spacing-4xl` | 96px | Large section padding |
| `--spacing-5xl` | 120px | Between page sections |

IMPORTANT: Never use arbitrary spacing values. Always use a token from this scale.

## Border Radius

| Token | Value | Use For |
|-------|-------|---------| 
| `--radius-sm` | 8px | Small elements, status badges |
| `--radius-md` | 16px | Medium containers |
| `--radius-lg` | 30px | Cards, image containers, sections, GlassPanels |
| `--radius-pill` | 10000px | Buttons, nav items, status badges |

## Radius Selection

```
┌─ "Which border radius?"
├─ Button, badge, or nav item?
│  └─ --radius-pill (10000px)
├─ Card, panel, image container, or section?
│  └─ --radius-lg (30px)
├─ Medium-sized container?
│  └─ --radius-md (16px)
└─ Small UI element?
   └─ --radius-sm (8px)
```

## Section Spacing

- Between major page sections: `--spacing-5xl` (120px)
- Section internal padding horizontal: 80–120px
- Section internal padding vertical: 80–200px
- Card internal padding: `--spacing-xl` (32px)
- Between card title and body: `--spacing-md` (16px)

## Grid System

- Desktop: 22-column grid, ~30px gutters
- Content area: spans columns 3 to -3 (leaving margins)
- Full-bleed sections: edge to edge with internal padding
- Mobile grid also available

## Grid Styles

| Style Name | Use For |
|-----------|---------|
| `Desktop grid` | Desktop layouts (1440px+) |
| `Mobile grid` | Mobile layouts (380px) |