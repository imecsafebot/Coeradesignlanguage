# Button

Pill-shaped button for all interactive actions — form submissions, navigation triggers, commands.

## When to Use

Use Button for every interactive action. Never use a raw button element.

## Variants

| Variant | Frequency | Use For |
|---------|-----------|---------|
| `State=Default, Background=Dark` | ~50% | Standard CTA on black/dark backgrounds |
| `State=Hover, Background=Dark` | Active state | Touch/hover active on dark backgrounds |
| `State=Default, Background=Light` | ~10% | CTA on cream/light backgrounds |
| `State=Hover, Background=Light` | Active state | Touch/hover active on light backgrounds |

## Variant Selection

```
┌─ "Which button variant?"
├─ On black or dark background?
│  └─ Background=Dark
└─ On cream or light background?
   └─ Background=Light
```

## Visual Properties

| Property | Value |
|----------|-------|
| Corner radius | pill (10000px) |
| Border | 1px orange (#FF5E00) |
| Padding horizontal | 30px |
| Padding vertical | 14px |
| Min height | 48px |
| Min width | 120px |
| Text font | PP Telegraf Regular |
| Text size | 16px |
| Text line-height | 100% |

## States

| State | Fill | Text Color | Border |
|-------|------|------------|--------|
| Default (dark bg) | Transparent | Cream (#F8F1ED) | Orange (#FF5E00) |
| Hover (dark bg) | Orange (#FF5E00) | Black (#000000) | Orange (#FF5E00) |
| Default (light bg) | Transparent | Near-black (#292424) | Orange (#FF5E00) |
| Hover (light bg) | Orange (#FF5E00) | Black (#000000) | Orange (#FF5E00) |

## Rules — IMPORTANT

- Maximum 2 buttons side by side
- Primary action = filled orange (hover state), secondary = outline only (default state)
- For kiosk displays: preferred size 200px+ wide, 60px+ tall for main CTAs
- Spacing between adjacent buttons: minimum 8px
- Button text should be short and action-oriented
- Footer uses an orange-outlined "Contact us" button

## Do / Don't

| Do | Don't |
|----|-------|
| Use pill shape always | Don't use squared corners |
| Keep label text short | Don't wrap button text to 2 lines |
| One primary CTA per section | Don't use multiple orange-filled buttons |
| 48px minimum height | Don't make buttons smaller than touch targets |
