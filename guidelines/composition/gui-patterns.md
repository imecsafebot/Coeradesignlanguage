# GUI Patterns for Kiosk / Demo Displays

Specific patterns for full-screen Qt-based GUI applications: trade show demos, robotics control interfaces, kiosk displays.

## Screen State Machine

Each screen corresponds to one application state:

| Screen | Key Elements |
|--------|-------------|
| Loading | coera logo, loading animation, status text |
| Idle (attract) | Partner logos, "Play Tic Tac Toe" button, coera branding |
| RobotMoving | Status indicator, animation, "please wait" |
| Game | 3×3 board, turn indicator, timer |
| Win/Loss/Draw | Result message, score |
| GiveUp | Message, return prompt |
| Timeout | Timeout message, return prompt |
| AnotherRound | "Play Again" and "End" buttons |
| RobotReturning | Status indicator, "returning" text |

## Tic-Tac-Toe Board

| Property | Value |
|----------|-------|
| Grid | 3×3 with clear cell boundaries |
| Cell size | Minimum 150×150px (touch target) |
| Grid lines | Warm gray (#E0D7D7) |
| Human stones | Cream/white |
| Robot stones | Orange (#FF5E00) |
| Empty cells | Subtle touch affordance |

## Idle / Attract Screen

- Large coera wordmark centered
- "Play Tic Tac Toe" — prominent Button component
- Partner logos: Staubli, Actemium, Pfizer (balanced, proportional)
- Subtle animations to attract attention
- Smooth transition to game start on button press

## Typography on Kiosk

```
┌─ "Which text size for kiosk?"
├─ Score or timer?
│  └─ Desktop - H1 (100px) — maximum visibility
├─ Game status or turn indicator?
│  └─ Desktop - H2 (50px) or Desktop - H3 (40px)
├─ Instructions or descriptions?
│  └─ Desktop - P (16px) or PP Mori 20px
└─ Debug/status labels?
   └─ PP Telegraf 14px
```

## E-Stop Pattern

- Software E-Stop: hidden (triple-tap on coera logo)
- Visual: red full-screen overlay with stop message
- Physical hardwired E-Stop is the primary safety mechanism
- NEVER make E-Stop visually prominent in normal UI

## Debug Panel Pattern

- Activation: long-press (3 seconds) on coera logo
- Shows: connection state, device health per device, raw WebSocket data
- Uses Card components with StatusBadges inside
- Can inject mock failures for testing
- No visible affordance — completely hidden from visitors

## Animations & Transitions

- Screen transitions: 0.4s smooth
- Loading states: subtle pulsing or progress animation
- No audio feedback — all feedback is visual
- Color transitions for state changes (green ↔ red)
