# OrientCam v2.1 — EIL Professional Edition

| Item    | Detail               |
|---------|----------------------|
| Version | 2.1                  |
| Date    | 10-Apr-2026          |
| Cache   | orientcam-v2.1-cache |
| Owner   | EIL — Protected      |

## Fixes in v2.1

| Bug | Fix |
|-----|-----|
| Dual landscape shows portrait video | Portrait canvas now draws RAW unrotated video — centre crop only — no rotation applied |
| Selfie video not working | "Selfie" command switches front camera → 3-2-1 → records |

## New Features in v2.1

### Opening Squares Animation
- Before every Roll — camera bracket squares animate in from corners
- Outer + inner bracket corners appear with stagger
- Hold for 1 second then fade out → countdown begins

### Selfie with 3-2-1
- Say "Selfie" → switches to front camera → squares → 3-2-1 → records
- Front camera mirror correctly handled in both landscape and portrait canvases

### Fade to Black on Stop/Save
- When recording stops via voice "Stop" or "Save" → screen fades to black
- Then result screen appears — cinematic feel

### Swipe Gestures on Viewfinder
- Swipe left → Landscape (anti-clockwise -90°)
- Swipe right → Portrait (0°)
- Swipe up → Zoom In
- Swipe down (80px+) → Stop + Save + fade

### Dual Mode Result Preview
- When dual is ON — result shows both videos side by side
- Landscape preview on left, Portrait preview on right
- Labels clearly show which is which

## Voice Commands

| Say        | Action                                  | Sound       |
|------------|-----------------------------------------|-------------|
| "Roll"     | Squares → 3-2-1 → Record               | Triple beep |
| "Selfie"   | Front cam → Squares → 3-2-1 → Record   | Triple beep |
| "Stop"     | Fade → Stop recording                   | Descend     |
| "Save"     | Fade → Stop → Share sheet              | Ping        |
| "Stills"   | Snap photo                              | Shutter     |
| "Zoom in"  | Zoom in 0.5x                            | Rise        |
| "Zoom out" | Zoom out 0.5x                           | Fall        |
| "Landscape"| Anti-clockwise -90° output              | Tick        |
| "Portrait" | Normal 0° output                        | Tick        |
| "Flip"     | Toggle landscape/portrait               | Tick        |
| "Cinema"   | Letterbox bars                          | Tick        |
| "Front"    | Front camera                            | Pop         |
| "Back"     | Back camera                             | Pop         |
| "Grid"     | Rule of thirds grid                     | Tick        |

## Version History

| Version | Date        | Changes                                                  |
|---------|-------------|----------------------------------------------------------|
| 1.0-1.9p| 09-Apr-2026 | Progressive development                                  |
| 2.0     | 10-Apr-2026 | Portrait default, anti-CW landscape, cinema, protection  |
| 2.1     | 10-Apr-2026 | Dual fix, selfie, fade, squares, swipe gestures          |
