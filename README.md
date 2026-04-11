# OrientCam v2.2 — EIL Edition

| Item    | Detail               |
|---------|----------------------|
| Version | 2.2                  |
| Date    | 10-Apr-2026          |
| Cache   | orientcam-v2.2-cache |

## Fixes in v2.2

| Bug | Root Cause | Fix |
|-----|-----------|-----|
| JS null addEventListener error | DOM elements referenced before ready | All code moved inside DOMContentLoaded |
| Blank camera after share | Stream not restarted | backToCamera() always calls startCamera() |
| Share fails silently | No fallback | AbortError (user cancel) stays on result; other errors fall back to download |
| Dual portrait showing rotated video | rotation applied to port canvas | Portrait canvas draws raw video with pure centre crop — zero rotation |

## New — Gesture Guide on Permission Screen
- Full gesture reference shown BEFORE camera is enabled
- User knows all gestures before starting

## Dual Format — Land+Port button
Renamed from "Dual" to "Land+Port" for clarity.
- OFF: saves one landscape video (rotated to your selected angle)
- ON: saves TWO videos — landscape (rotated) + portrait (centre crop, no rotation)
- Result screen shows both side by side when ON

## Version History

| Version | Date        | Changes                                               |
|---------|-------------|-------------------------------------------------------|
| 1.0-2.0 | 09-Apr-2026 | Progressive development                               |
| 2.1     | 10-Apr-2026 | Squares, selfie, fade, swipe gestures                 |
| 2.2     | 10-Apr-2026 | Null fix, blank camera fix, gesture guide on perm     |
