# StatusBadge

Device health indicator showing connection/operational state with a colored dot.

## When to Use

Use StatusBadge to display device health, connection state, or system status. Always pair with a device name or label.

## Variants

| Variant | Dot Color | Hex | Use For |
|---------|-----------|-----|---------|
| `Status=ok` | Green | #22C55E | Device connected and functioning normally |
| `Status=warning` | Amber | #FFB200 | Non-critical issue, degraded performance |
| `Status=error` | Red | #EF4444 | Device disconnected, critical failure |

## Variant Selection

```
┌─ "Which status?"
├─ Device connected and working?
│  └─ Status=ok (green)
├─ Device has a non-critical issue?
│  └─ Status=warning (amber)
└─ Device disconnected or failed?
   └─ Status=error (red)
```

## Visual Properties

| Property | Value |
|----------|-------|
| Background | Near-black (#292424) |
| Corner radius | pill (10000px) |
| Padding | 12px left, 16px right, 8px top/bottom |
| Item spacing | 8px (between dot and label) |
| Dot size | 10×10px circle |
| Text font | PP Telegraf Regular |
| Text size | 14px |
| Text line-height | 100% |
| Text color | Cream (#F8F1ED) |

## Usage Patterns

- Place in status bars, debug panels, or system health displays
- Group multiple StatusBadges in a horizontal row for multi-device monitoring
- In the debug panel: pair with device name and raw connection data
- On kiosk screens: use in top corners for system status
