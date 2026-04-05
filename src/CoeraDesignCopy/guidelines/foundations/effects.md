# Effects

## Liquid Glass

coera uses Figma's native liquid glass effect on prominent UI elements.

### Effect Style: "Liquid Glass"

Apply this effect style from the library. Parameters:

| Parameter | Value |
|-----------|-------|
| Type | GLASS |
| Refraction | 1 |
| Depth | 100 |
| Light Angle | -45° |
| Light Intensity | 0.5 |
| Dispersion | 0 |
| Splay | 0 |

### Fill Pairing

Always pair the Liquid Glass effect with a semi-transparent fill:

```
┌─ "Which fill with glass?"
├─ Dark glass (default)?
│  └─ Black (#000000) at 10% opacity
└─ Light glass (subtle)?
   └─ White (#FFFFFF) at 5% opacity
```

### Where to Use Glass

- **NavigationBar** — fixed top bar
- **GlassPanel** — floating containers, overlays, feature highlights
- **GlassCard** — featured content, stats, metrics

### Rules — IMPORTANT

- ONLY use on dark backgrounds — glass needs contrast to be visible
- Use sparingly — not every container needs glass
- Reserve for featured/prominent elements
- Never apply glass to text directly
- Never use glass on cream/light backgrounds

## Background Blur

### Effect Style: "Background Blur"

| Parameter | Value |
|-----------|-------|
| Type | BACKGROUND_BLUR |
| Radius | 10px |

Use for frosted glass sub-elements. Pair with semi-transparent white fill at 10% opacity.
