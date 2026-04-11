# OrientCam v2.0 — EIL Professional Edition

| Item      | Detail                          |
|-----------|---------------------------------|
| Version   | 2.0                             |
| Date      | 10-Apr-2026                     |
| Owner     | Elango Industries Limited (EIL) |
| Protected | Yes — domain locked, watermarked|

## Files (5)

| File         | Purpose                              |
|--------------|--------------------------------------|
| index.html   | Main app                             |
| manifest.json| PWA install config                   |
| sw.js        | Service worker + auto-update         |
| version.json | Version trigger for auto-update      |
| README.md    | This file                            |

## What's New in v2.0

### Bugs Fixed
- Camera starts in Portrait by default (rotation=0)
- Landscape uses anti-clockwise rotation (-90°)
- Dual mode: landscape canvas rotated, portrait canvas centre crop only — no rotation applied to portrait

### New Features
- 3-2-1 countdown before recording starts
- Tap screen anywhere to focus (with focus ring indicator)
- Cinema letterbox mode (black bars top/bottom)
- Shot counter (Shot 1, Shot 2...)
- "Cinema" voice command

### Copy Protection
- Right-click disabled
- Long press on video/image blocked
- Text selection disabled
- Keyboard save shortcuts blocked (Ctrl+S etc)
- Domain locked to elangovan2015es-cmd.github.io
- Subtle watermark burned into all videos and stills: "OrientCam © EIL"
- DevTools detection alert

## Voice Commands

| Say         | Action                         | Sound       |
|-------------|--------------------------------|-------------|
| "Roll"      | 3-2-1 countdown + record       | Triple beep |
| "Stop"      | Stop recording                 | Descend     |
| "Save"      | Stop if recording + Share      | Ping        |
| "Stills"    | Snap photo                     | Shutter     |
| "Zoom in"   | Zoom in 0.5x                   | Rise        |
| "Zoom out"  | Zoom out 0.5x                  | Fall        |
| "Landscape" | Anti-clockwise wide output     | Tick        |
| "Portrait"  | Normal upright output          | Tick        |
| "Flip"      | Toggle between portrait/land   | Tick        |
| "Cinema"    | Toggle letterbox bars          | Tick        |
| "Front"     | Front camera                   | Pop         |
| "Back"      | Back camera                    | Pop         |
| "Grid"      | Rule of thirds grid            | Tick        |

## Version History

| Version | Date        | Changes                                              |
|---------|-------------|------------------------------------------------------|
| 1.0-1.8 | 09-Apr-2026 | Progressive development                              |
| 1.9     | 10-Apr-2026 | Auto-return after share, gestures, dual solid        |
| 1.9p    | 10-Apr-2026 | Auto-update banner system                            |
| 2.0     | 10-Apr-2026 | Portrait default, anti-CW landscape, dual fix, cinema|
