# Composition — Overview

Layout patterns and section templates for composing full pages and screens.

## Available Composition Files

| File | What It Covers |
|------|---------------|
| `sections.md` | Section layout components (Hero, ImageText, TextImpact, ContentLight) |
| `layout.md` | Page composition rules, section ordering, responsive patterns |
| `gui-patterns.md` | Kiosk/demo display patterns, tic-tac-toe board, debug panel |

## Page Composition Flow

A typical coera page follows this pattern:

```
┌─ NavigationBar (fixed, always on top)
├─ Section/Hero (first section, black bg, large headline)
├─ Section/TextImpact or Section/ImageText (supporting content)
├─ Section/ContentLight (cream bg, for contrast)
├─ Section/ImageText (alternate image/text sides)
├─ ... repeat sections as needed ...
└─ Footer (always last)
```

## Key Rules

- Alternate dark and light sections for visual rhythm
- Never stack more than 3 dark sections without a light break
- Each section is self-contained — content must make sense independently
- For kiosk: single screen, no scrolling, all content visible at once
