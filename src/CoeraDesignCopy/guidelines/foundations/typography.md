# Typography

## Font Families

| Typeface | Role | Character |
|----------|------|-----------|
| **PP Telegraf** | Headlines, labels, buttons, nav, status | Geometric, authoritative, structured |
| **PP Mori** | Body copy, descriptions, legal, captions | Legible, neutral, functional |

IMPORTANT: Use Regular (400) weight only for both families. Never mix weights. Hierarchy is created through size, never weight.

## Figma Text Styles

These are the published text styles in the library. Always use these style names:

### Desktop

| Style Name | Font | Size | Line Height | Use For |
|-----------|------|------|-------------|---------|
| `Desktop - H1` | PP Telegraf | 100px | 100% | Hero headlines, single impactful statements |
| `Desktop - H2` | PP Telegraf | 50px | 120% | Section titles, feature names |
| `Desktop - H3` | PP Telegraf | 40px | 120% | Sub-section headers |
| `Desktop - H4` | PP Telegraf | 30px | 120% | Card titles, group headers |
| `Desktop - H5` | PP Telegraf | 24px | 120% | Small headers, emphasis |
| `Desktop - P` | PP Mori | 16px | 180% | Paragraphs, descriptions |

### Mobile

| Style Name | Font | Size | Line Height | Use For |
|-----------|------|------|-------------|---------|
| `Mobile - H1` | PP Telegraf | 50px | 100% | Mobile hero headlines |
| `Mobile - H2` | PP Telegraf | 30px | 120% | Mobile section titles |
| `Mobile H3, H4, H5` | PP Telegraf | 24px | 120% | Mobile sub-headers |
| `Mobile - P` | PP Mori | 16px | 180% | Mobile body text |

### Component-Level Sizes (No Separate Style)

| Usage | Font | Size | Line Height |
|-------|------|------|-------------|
| Button label | PP Telegraf | 16px | 100% |
| Nav link | PP Telegraf | 14px | 100% |
| Status badge label | PP Telegraf | 14px | 100% |
| Caption / small body | PP Mori | 14px | 160% |
| Large body | PP Mori | 20px | 180% |
| Legal / fine print | PP Mori | 12px | auto |

## Font Selection Decision Tree

```
┌─ "Which font family?"
├─ Is it a headline, label, button, nav item, or status text?
│  └─ PP Telegraf
└─ Is it body copy, description, caption, or legal text?
   └─ PP Mori
```

```
┌─ "Which heading size?"
├─ Hero / page-level headline?
│  └─ Desktop - H1 (100px)
├─ Section title?
│  └─ Desktop - H2 (50px)
├─ Sub-section header?
│  └─ Desktop - H3 (40px)
├─ Card title or group header?
│  └─ Desktop - H4 (30px)
└─ Small header or label emphasis?
   └─ Desktop - H5 (24px)
```

## Rules

- Letter spacing: 0% for all styles (default)
- No italic unless quoting within body text
- Text wrapping: use "pretty" or "balanced" for headlines
- Minimum readable size at 1920x1080: 14px
- For kiosk displays: game status = H2/H3, score/timer = H1, instructions = Desktop - P
