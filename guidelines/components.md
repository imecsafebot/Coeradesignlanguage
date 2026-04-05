# coera Component Guidelines

## Button

Pill-shaped button with rounded-pill shape. Two styles: dark (default) and orange (accent/CTA).

### Variants

| Variant | When to Use |
|---------|-------------|
| Default + Dark bg | Standard CTA on black/dark backgrounds |
| Hover + Dark bg | Active state on dark backgrounds |
| Default + Light bg | CTA on cream/light backgrounds |
| Hover + Light bg | Active state on light backgrounds |

### Rules
- Minimum height: 48px (touch target)
- Minimum width: 120px
- Padding: 30px horizontal, 14px vertical
- Border: 1px orange (#FF5E00)
- Text: PP Telegraf 16px
- Corner radius: pill (fully rounded)
- On hover/active: fill with orange, text goes black
- Never use more than 2 buttons side by side
- Primary action = filled orange, secondary = outline only

## StatusBadge

Device health indicator with colored dot.

### Variants
| Status | Dot Color | When to Use |
|--------|-----------|-------------|
| ok | Green (#22C55E) | Device connected and functioning |
| warning | Amber (#FFB200) | Device has non-critical issue |
| error | Red (#EF4444) | Device disconnected or critical failure |

### Rules
- Background: near-black (#292424)
- Text: cream (#F8F1ED), PP Telegraf 14px
- Always pair with a device name or label
- Place in status bars, debug panels, or system health displays

## Card

Content container for grouped information.

### Rules
- Background: near-black (#292424) on dark pages
- Corner radius: 30px
- Padding: 32px all sides
- Title: PP Telegraf, 24px, cream
- Body: PP Mori, 16px, warm gray
- 16px gap between title and body
- Can contain StatusBadges, text, or other nested content

## GlassPanel

Liquid glass container with Figma's native glass morphism effect.

### Rules
- Effect: "Liquid Glass" effect style (GLASS type)
- Fill: black at 10% opacity (or white at 5% for lighter variant)
- Corner radius: 30px
- Padding: 32px all sides
- Use on dark backgrounds only — glass effect needs contrast to be visible
- Great for: floating panels, feature highlights, overlays, debug panels
- Title: PP Telegraf, 24px, cream
- Body: PP Mori, 16px, warm gray

### Glass Effect Parameters
- Refraction: 1
- Depth: 100
- Light angle: -45 degrees
- Light intensity: 0.5
- No dispersion, no splay

## GlassCard

Glass morphism variant of the Card component.

### Rules
- Same as GlassPanel but for smaller, card-sized content
- Fill: white at 5% opacity
- Use for: stats, metrics, featured items, partner showcases
- Pair multiple GlassCards in a grid for dashboard-like layouts

## NavigationBar

Fixed top navigation bar with liquid glass effect.

### Structure
- coera wordmark (left) + Nav links (right)
- Default nav items: Vision, About, Pilot, Careers, Contact
- Height: 80px
- Background: liquid glass effect (black at 10% opacity + GLASS effect)
- Padding: 60px horizontal

### Rules
- Always fixed to top
- Uses the "Liquid Glass" effect style
- coera wordmark must follow clearspace rules (space = height of "c")
- Nav link text: PP Telegraf, 14px, cream
- Active page: orange underline indicator
- Max 6 navigation items
- Logo links to home/idle state

## Footer

Page footer with branding.

### Structure
- Black background with subtle orange radial gradient overlay
- coera wordmark, tagline, social links, legal text (stacked vertically, centered)
- Tagline: "Tomorrow starts with coera"
- Social icons: LinkedIn, Instagram, YouTube, X
- "Contact us" button: orange-outlined pill shape
- Padding: 80px top, 60px bottom, 60px horizontal

### Rules
- Always at the very bottom
- Social links: warm gray, 14px
- Legal text: warm gray at 60% opacity, 12px
- Do not add additional navigation in footer for kiosk displays

## UI Text Formatting

When generating content with lists:
- **Bullet points**: use orange dot accent (●) as bullet marker
- **Numbered lists**: use orange numbers
- These accent details reinforce the brand signal color in content

## Section Layouts

### Section/Hero
- First section of any page
- Full viewport height, centered content
- Black background, cream headline (H1)
- Optional subhead in warm gray

### Section/ImageText
- Image left, text right (or reversed)
- 50/50 split with 64px gap
- Image has 30px border radius

### Section/TextImpact
- Large centered text for bold statements
- Constrained width (200px padding each side)
- Use for key messages and quotes

### Section/ContentLight
- Cream background for visual contrast
- Near-black text
- Use to break up sequences of dark sections
