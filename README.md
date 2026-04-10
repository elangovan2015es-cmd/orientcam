# OrientCam v1.7 — iOS Optimised

| Item    | Detail               |
|---------|----------------------|
| Version | 1.7                  |
| Date    | 10-Apr-2026          |
| Cache   | orientcam-v1.7-cache |

## What's Fixed in v1.7

| Problem | Fix Applied |
|---------|-------------|
| 5-second cutoff | setInterval at 24fps instead of requestAnimationFrame |
| iOS memory pressure | Bitrate reduced from 6Mbps to 2.5Mbps |
| Frequent write pressure | Chunk size increased from 200ms to 1000ms |
| Dual canvas overload | Dual format OFF by default — single canvas |
| Safari throttling | vp8 codec preferred over vp9 for iOS |

## Technical Settings
- Frame rate: 24fps (stable on iOS Safari)
- Bitrate: 2.5 Mbps landscape / 1.5 Mbps portrait
- Chunk interval: 1 second
- Codec: vp8/opus preferred, vp9 fallback

## Voice Commands

| Say          | Action              | Sound        |
|--------------|---------------------|--------------|
| "Roll"       | Start recording     | Triple beep  |
| "Stop"       | Stop recording      | Descend tone |
| "Save"       | Save files          | Ping         |
| "Stills"     | Snap photo          | Shutter      |
| "Zoom in"    | Zoom in             | Rising tone  |
| "Zoom out"   | Zoom out            | Falling tone |
| "Landscape"  | 90° output          | Tick         |
| "Portrait"   | 0° output           | Tick         |
| "Front"      | Front camera        | Pop          |
| "Back"       | Back camera         | Pop          |
| "Grid"       | Toggle grid         | Tick         |

## Version History

| Version | Date        | Changes                                          |
|---------|-------------|--------------------------------------------------|
| 1.0     | 09-Apr-2026 | Initial release                                  |
| 1.1     | 09-Apr-2026 | Video rotation + voice commands                  |
| 1.2     | 09-Apr-2026 | Translucent voice sheet                          |
| 1.3     | 09-Apr-2026 | Transparent sheet + instant voice                |
| 1.4     | 09-Apr-2026 | Sound feedback                                   |
| 1.5     | 09-Apr-2026 | Voice controls live camera via MediaRecorder     |
| 1.6     | 10-Apr-2026 | Video only, dual format, zoom, Roll/Stills       |
| 1.7     | 10-Apr-2026 | iOS Safari fix — no 5s cutoff, 24fps, 2.5Mbps   |
