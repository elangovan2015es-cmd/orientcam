# OrientCam v1.8 — Voice Edition

| Item    | Detail               |
|---------|----------------------|
| Version | 1.8                  |
| Date    | 10-Apr-2026          |
| Cache   | orientcam-v1.8-cache |

## What's New in v1.8

### Voice Only UI
- No manual buttons in viewfinder — clean full-screen camera view
- Floating top bar: brand + Dual toggle + Mic button
- Voice chip strip at very bottom — transparent, minimal

### Share Sheet
- One tap Share button → iPhone share sheet opens
- WhatsApp, Mail, AirDrop, Messages all visible
- Works with Web Share API on iOS Safari

### MP4 Conversion
- Tap "To MP4" → converts webm to MP4 inside app
- Uses FFmpeg.wasm loaded on demand
- MP4 plays everywhere — WhatsApp, Mail, Photos

### Touch Zones (No buttons needed)
- Left screen edge → Roll (start recording)
- Right screen edge → Snap Still
- Swipe down on viewfinder → Stop + Save

### Save Auto-Stops
- Say "Save" while recording → stops recording then shares
- No need to say "Stop" first

### Voice Commands

| Say         | Action                      | Sound       |
|-------------|-----------------------------|-------------|
| "Roll"      | Start recording             | Triple beep |
| "Stop"      | Stop recording              | Descend     |
| "Save"      | Stop if recording + Share   | Ping        |
| "Stills"    | Snap photo                  | Shutter     |
| "Zoom in"   | Zoom in 0.5x                | Rise        |
| "Zoom out"  | Zoom out 0.5x               | Fall        |
| "Landscape" | 90° rotation                | Tick        |
| "Portrait"  | 0° rotation                 | Tick        |
| "Flip"      | Toggle landscape direction  | Tick        |
| "Front"     | Front camera                | Pop         |
| "Back"      | Back camera                 | Pop         |
| "Grid"      | Toggle grid                 | Tick        |

## Version History

| Version | Date        | Changes                                          |
|---------|-------------|--------------------------------------------------|
| 1.0     | 09-Apr-2026 | Initial release                                  |
| 1.1     | 09-Apr-2026 | Video rotation + voice commands                  |
| 1.2     | 09-Apr-2026 | Translucent voice sheet                          |
| 1.3     | 09-Apr-2026 | Transparent sheet + instant voice                |
| 1.4     | 09-Apr-2026 | Sound feedback                                   |
| 1.5     | 09-Apr-2026 | Voice controls live camera via MediaRecorder     |
| 1.6     | 10-Apr-2026 | Video only, dual format, zoom                    |
| 1.7     | 10-Apr-2026 | iOS Safari fix — no 5s cutoff                    |
| 1.8     | 10-Apr-2026 | Voice only UI, Share Sheet, MP4, Touch zones     |
