# Layout Composition

Rules for composing sections into full pages.

## Page Structure

Every page follows this skeleton:

1. **NavigationBar** — fixed at top
2. **Hero section** — always first
3. **Content sections** — alternating dark/light
4. **Footer** — always last

## Section Ordering Rules

- Start with Section/Hero
- Alternate between dark (black bg) and light (cream bg) sections
- Never stack more than 3 dark sections without a ContentLight break
- End with Footer

## Spacing Between Sections

Sections stack vertically with no gap — each section owns its own padding.

## Responsive Behavior

| Breakpoint | Grid | Behavior |
|-----------|------|----------|
| 1440px+ | 22-column desktop | Full layout |
| 380px | Mobile grid | Stack to single column |

On mobile:
- Section/ImageText stacks vertically (image above text)
- Hero headline uses Mobile - H1 (50px instead of 100px)
- Padding reduces proportionally

## For Kiosk/Demo Displays (1920×1080)

IMPORTANT: Kiosk layouts are fundamentally different from web pages.

- Full-screen, NO scrolling — all content fits one viewport
- Black background always — never cream for primary kiosk screens
- Center the primary interaction area
- Status info in top corners
- Navigation/back buttons at bottom or consistent edge
- All touch targets: minimum 48×48px with 8px spacing between
- Preferred CTA button size: 200px+ wide, 60px+ tall
