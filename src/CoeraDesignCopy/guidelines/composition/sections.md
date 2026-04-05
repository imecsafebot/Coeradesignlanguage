# Section Layouts

Reusable section components for building full pages.

## Available Sections

| Component | Background | Use For |
|-----------|-----------|---------|
| `Section/Hero` | Black | First section, hero headline |
| `Section/ImageText` | Black | Feature showcases, side-by-side content |
| `Section/TextImpact` | Black | Bold statements, key messages |
| `Section/ContentLight` | Cream | Visual contrast, light content |

## Section Selection

```
┌─ "Which section?"
├─ First section of a page?
│  └─ Section/Hero
├─ Need to pair an image with text?
│  └─ Section/ImageText
├─ Bold statement or key message?
│  └─ Section/TextImpact
└─ Need visual contrast after dark sections?
   └─ Section/ContentLight
```

## Section/Hero

| Property | Value |
|----------|-------|
| Background | Black (#000000) |
| Height | Full viewport (800px at 1440w) |
| Padding horizontal | 120px |
| Padding top | 200px |
| Padding bottom | 120px |
| Item spacing | 32px |
| Alignment | Center |
| Headline | Desktop - H1 (100px), cream |
| Subhead | PP Mori 20px, warm gray (optional) |

Always the first section on any page. One per page.

## Section/ImageText

| Property | Value |
|----------|-------|
| Background | Black (#000000) |
| Height | 800px |
| Layout | Horizontal, 50/50 split |
| Gap | 64px (`spacing/3xl`) |
| Padding | 80px all sides |
| Image | 30px border radius, fills left half |
| Title | Desktop - H2 (50px), cream |
| Body | Desktop - P (16px), warm gray |

Image left, text right by default. Can be reversed.

## Section/TextImpact

| Property | Value |
|----------|-------|
| Background | Black (#000000) |
| Height | 600px |
| Padding horizontal | 200px |
| Padding vertical | 120px |
| Alignment | Center |
| Text | Desktop - H2 (50px), cream, centered |

Use for core brand messages. Good headlines from `brand/voice.md`:
- "The missing piece in the robotics revolution."
- "Safety that accelerates."
- "Making physical AI safe, everywhere."

## Section/ContentLight

| Property | Value |
|----------|-------|
| Background | Cream (#F8F1ED) |
| Height | 700px |
| Padding horizontal | 120px |
| Padding vertical | 100px |
| Item spacing | 32px |
| Title | Desktop - H3 (40px), near-black (#292424) |
| Body | Desktop - P (16px), near-black (#292424) |

IMPORTANT: On cream backgrounds, all text must be near-black (#292424), never cream.
