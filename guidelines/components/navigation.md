# NavigationBar

Fixed top navigation bar with liquid glass effect.

## When to Use

Use at the top of every page/screen. One per page, always fixed.

## Structure

- **Left**: coera wordmark (logo)
- **Right**: Navigation links

Default nav items: Vision, About, Pilot, Careers, Contact

## Visual Properties

| Property | Value |
|----------|-------|
| Width | Full viewport width (1440px desktop) |
| Height | 80px |
| Effect | "Liquid Glass" effect style |
| Fill | Black (#000000) at 10% opacity |
| Padding horizontal | 60px |
| Layout | Horizontal, space-between |

## Nav Link Properties

| Property | Value |
|----------|-------|
| Font | PP Telegraf Regular |
| Size | 14px |
| Line-height | 100% |
| Color | Cream (#F8F1ED) |
| Active indicator | Orange (#FF5E00) underline |

## Rules

- Maximum 6 navigation items
- coera wordmark must follow clearspace rules (see `brand/wordmark.md`)
- Logo links to home/idle state
- Active page indicated with orange underline — only one at a time
- On kiosk displays: NavigationBar may be simplified or hidden depending on app state

## Do / Don't

| Do | Don't |
|----|-------|
| Keep nav links short (1-2 words) | Don't use long labels |
| Use glass effect on dark backgrounds | Don't place on light backgrounds |
| One active indicator at a time | Don't highlight multiple items |
