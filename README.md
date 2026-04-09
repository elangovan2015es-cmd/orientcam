# OrientCam — iPhone Edition

| Item     | Detail                        |
|----------|-------------------------------|
| Version  | 1.1                           |
| Date     | 09-Apr-2026                   |
| Platform | iPhone — Safari PWA           |
| Author   | Elango / EIL                  |

---

## File Version Reference

| File          | Version | Cache Name            |
|---------------|---------|-----------------------|
| index.html    | v1.1    | —                     |
| manifest.json | v1.1    | —                     |
| sw.js         | v1.1    | orientcam-v1.1-cache  |
| README.md     | v1.1    | —                     |

---

## What's New in v1.1

### 1. Video Post-Processing Rotation
- After recording via iPhone native camera, video is brought back into app
- App re-draws every frame rotated to the selected angle
- Progress bar shows rotation progress
- Saves as rotated .webm file

### 2. Voice Commands
Tap the 🎙 mic button to activate. Say:

| Say          | Action                    |
|--------------|---------------------------|
| "Photo"      | Switch to photo mode      |
| "Video"      | Switch to video mode      |
| "Capture"    | Take photo / start record |
| "Click"      | Take photo                |
| "Record"     | Start video recording     |
| "Stop"       | Stop recording            |
| "Landscape"  | Rotation 90°              |
| "Normal"     | Rotation 0°               |
| "Flip"       | Rotation 180°             |
| "Reverse"    | Rotation -90°             |
| "Front"      | Front camera              |
| "Back"       | Back camera               |
| "Grid"       | Toggle grid               |
| "Mirror"     | Toggle mirror             |

Tap ❓ to see full voice command list inside the app.

---

## Deploy (Overwrite v1.0)

Upload all 4 files to `elangovan2015es-cmd/orientcam` repo — overwrite existing files.
The new cache name in sw.js (`orientcam-v1.1-cache`) forces all iPhones to download fresh.

---

## Version History

| Version | Date        | Changes                                        |
|---------|-------------|------------------------------------------------|
| 1.0     | 09-Apr-2026 | Initial release                                |
| 1.1     | 09-Apr-2026 | Video rotation post-processing + Voice commands|
