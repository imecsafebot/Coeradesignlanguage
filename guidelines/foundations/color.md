# Color Tokens

## Brand Colors

| Token Name | Hex | Usage |
|-----------|-----|-------|
| `brand/black` | #000000 | Primary dark background, wordmark |
| `brand/near-black` | #292424 | Text on light backgrounds, card fills, dark UI |
| `brand/cream` | #F8F1ED | Primary text on dark, warm light backgrounds |
| `brand/white` | #FFFFFF | Cards, surfaces, overlays |
| `brand/orange` | #FF5E00 | Signal color — CTAs, active indicators ONLY |
| `brand/warm-gray` | #E0D7D7 | Borders, dividers, secondary text |
| `brand/orange-gold` | #FFB200 | Gradient end color, warning state |

## Semantic Colors

| Token Name | Hex | Usage |
|-----------|-----|-------|
| `semantic/bg-primary` | #000000 | Default page background |
| `semantic/bg-secondary` | #F8F1ED | Light section backgrounds |
| `semantic/text-primary` | #F8F1ED | Primary text on dark backgrounds |
| `semantic/text-secondary` | #292424 | Primary text on light backgrounds |
| `semantic/accent` | #FF5E00 | Interactive elements, CTAs |
| `semantic/border` | #E0D7D7 | Borders and dividers |
| `semantic/success` | #22C55E | OK/connected states |
| `semantic/warning` | #FFB200 | Warning/caution states |
| `semantic/error` | #EF4444 | Error/disconnected states |

## Background Color Selection

```
┌─ "What background color?"
├─ Primary page/screen background?
│  └─ #000000 (black) — DEFAULT for all screens
├─ Need visual contrast between sections?
│  └─ #F8F1ED (cream) — light section
├─ Card or container on dark background?
│  └─ #292424 (near-black) — solid card
├─ Featured/prominent container?
│  └─ Use GlassPanel component (see components/glass-panel.md)
└─ Overlay or modal?
   └─ #000000 at 86–90% opacity
```

## Text Color Selection

```
┌─ "What text color?"
├─ On black/dark background?
│  ├─ Primary text → #F8F1ED (cream)
│  └─ Secondary/supporting text → #E0D7D7 (warm gray)
├─ On cream/light background?
│  └─ #292424 (near-black)
└─ Interactive text (link, CTA)?
   └─ #FF5E00 (orange)
```

## Orange Usage Rules — IMPORTANT

Orange (#FF5E00) is the signal color. It represents intelligence, action, and key interactions.

**Use orange for:**
- Button borders and hover fills
- Active navigation indicators
- CTA text and links
- Bullet point dots (●) in lists
- Numbers in ordered lists
- Status badge: active/accent states

**NEVER use orange for:**
- Page or section backgrounds
- Large text blocks
- Decorative elements
- Multiple competing elements on the same screen

## Gradient

The orange gradient (#FF5E00 → #FFB200 at 45°) is ONLY for:
- Button hover state fills
- Subtle decorative accents
- Never for text or backgrounds
