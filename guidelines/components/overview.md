# Components — Overview

All available coera design system components. Always use these — never create raw elements.

## Component Catalog

| Component | Type | Variants | Use For | Guideline |
|-----------|------|----------|---------|-----------|
| **Button** | Component Set | 4 (State × Background) | CTAs, interactive actions | `button.md` |
| **StatusBadge** | Component Set | 3 (ok/warning/error) | Device health indicators | `status-badge.md` |
| **Card** | Component | — | Content containers | `card.md` |
| **GlassPanel** | Component | — | Featured panels, overlays | `glass-panel.md` |
| **GlassCard** | Component | — | Featured content cards | `glass-panel.md` |
| **NavigationBar** | Component | — | Top nav bar | `navigation.md` |
| **Footer** | Component | — | Page footer | `footer.md` |

## Component Selection

```
┌─ "What component do I need?"
├─ User needs to take an action?
│  └─ Button (see button.md)
├─ Showing device/system status?
│  └─ StatusBadge (see status-badge.md)
├─ Grouping content on dark background?
│  ├─ Featured/prominent content?
│  │  ├─ Large panel → GlassPanel
│  │  └─ Small card → GlassCard
│  └─ Standard content grouping?
│     └─ Card
├─ Top of page navigation?
│  └─ NavigationBar (see navigation.md)
└─ Bottom of page?
   └─ Footer (see footer.md)
```

## Shared Rules

- All interactive components: minimum 48×48px touch target
- All text in components uses PP Telegraf (labels) or PP Mori (body)
- Corner radius: pill for buttons/badges, 30px for cards/panels
- No hover-only states — everything must work with touch
