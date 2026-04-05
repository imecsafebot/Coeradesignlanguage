# coera Design System — Overview

## IMPORTANT: Read This First

This is the coera design system for building interfaces — from marketing pages to industrial kiosk GUIs for robotics demo booths. Every design must feel **minimal, precise, and unmistakably coera**.

## Product Character

- **Dark-first**: Default to black (#000000) backgrounds. High contrast, technical authority
- **Orange is the signal**: Orange (#FF5E00) is used ONLY for CTAs, active states, and key interactions. Never for backgrounds or large areas
- **Clarity over decoration**: Use contrast to guide attention, not decoration
- **Touch-first**: All interactive elements minimum 48x48px. No hover-dependent UI
- **Less, but better**: Only the most important messages. Every element earns its place

## Visual Density

- Generous whitespace — the design breathes
- Sections separated by 120–135px vertical spacing
- Content padding: 60–120px from viewport edges
- Rounded corners: 30px for containers, pill (10000px) for buttons and badges

## Color Distribution

| Color | Hex | Frequency | Role |
|-------|-----|-----------|------|
| Black | #000000 | ~60% | Primary background, dominant surface |
| Cream | #F8F1ED | ~20% | Primary text on dark, light section backgrounds |
| Near-black | #292424 | ~10% | Text on light backgrounds, card backgrounds |
| Orange | #FF5E00 | ~5% | Signal color — CTAs, active states ONLY |
| Warm Gray | #E0D7D7 | ~5% | Borders, dividers, secondary text |
| White | #FFFFFF | Rare | Cards, overlays |
| Orange Gold | #FFB200 | Rare | Gradient partner, warning state |

## Typography

- **PP Telegraf** (Regular 400): Headlines, labels, buttons, status text. Geometric, authoritative
- **PP Mori** (Regular 400): Body copy, descriptions, legal. Legible, neutral

IMPORTANT: Never mix weights. Regular (400) only for both families. Hierarchy is created through size, not weight.

## Reading Order — MUST READ

1. `overview.md` — You are here
2. `foundations/overview.md` — Color, typography, spacing tokens
3. `components/overview.md` — All available components
4. `composition/overview.md` — Layout patterns and section templates
5. `brand/voice.md` — Brand voice and messaging rules

## Critical Rules

1. Brand name is always lowercase: `coera` — never "Coera" or "COERA"
2. NEVER use orange for backgrounds or large areas
3. All touch targets minimum 48x48px
4. No audio feedback — all feedback is visual
5. For kiosk/demo displays: design at 1920x1080, no scrolling, full-screen
6. Use design system components — never raw elements
7. Typography feels deliberate, never expressive for its own sake
8. Photography: real environments, human-machine coexistence, cinematic not futuristic
