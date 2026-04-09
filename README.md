# OrientCam — iPhone Edition

| Item     | Detail        |
|----------|---------------|
| Version  | 1.3           |
| Date     | 09-Apr-2026   |
| Platform | iPhone Safari |
| Author   | Elango / EIL  |

## File Versions

| File          | Version | Cache                 |
|---------------|---------|-----------------------|
| index.html    | v1.3    | —                     |
| manifest.json | v1.3    | —                     |
| sw.js         | v1.3    | orientcam-v1.3-cache  |

## What's New in v1.3

### Transparent Voice Sheet
- Background only 15% black — camera fully visible through sheet
- blur(2px) only — scene clearly visible
- Single slim horizontal row of compact chips
- Slides up from bottom edge — minimal footprint

### Near-Instant Voice Response
- `interimResults: true` — fires while you are still speaking
- `lang: en-US` — faster Google recognition engine
- 800ms debounce — prevents double firing
- Command matched on first keyword — no waiting

### Smart Chip Behaviour
- One-time commands (Photo, Video, Landscape, Normal, Flip, Reverse) — fade away after use
- Reusable commands (Capture, Record, Stop, Front, Back, Grid, Mirror) — stay always
- Heard command flashes green instantly

## Version History

| Version | Date        | Changes                                          |
|---------|-------------|--------------------------------------------------|
| 1.0     | 09-Apr-2026 | Initial release                                  |
| 1.1     | 09-Apr-2026 | Video rotation + voice commands                  |
| 1.2     | 09-Apr-2026 | Translucent voice sheet with collapsing chips    |
| 1.3     | 09-Apr-2026 | Transparent sheet + instant voice via interimResults |
