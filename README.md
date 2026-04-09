# OrientCam v1.5 — iPhone Edition

| Item    | Detail        |
|---------|---------------|
| Version | 1.5           |
| Date    | 09-Apr-2026   |
| Cache   | orientcam-v1.5-cache |

## What's New in v1.5

### Voice Controls Live Camera Directly
- No file picker popup anymore
- Say "Record" → camera records immediately on screen
- Red REC badge + timer appears top right while recording
- Say "Stop" → recording stops, video shown for review
- Say "Save" → saves to Files app
- Say "Capture" or "Click" → takes rotated photo instantly

### How It Works
- Uses MediaRecorder on a rotated canvas stream
- Canvas draws each video frame with rotation applied in real time
- Audio from microphone included in recording
- Output is already rotated — no post-processing needed

## Voice Commands

| Say         | Action                    | Sound        |
|-------------|---------------------------|--------------|
| "Photo"     | Photo mode                | Swoosh       |
| "Video"     | Video mode                | Swoosh       |
| "Capture"   | Photo snap or start video | Shutter/Beep |
| "Click"     | Always photo              | Shutter      |
| "Record"    | Start recording           | Double beep  |
| "Stop"      | Stop recording            | Descend tone |
| "Save"      | Save result               | Ping         |
| "Landscape" | 90° rotation              | Tick         |
| "Normal"    | 0° rotation               | Tick         |
| "Flip"      | 180° rotation             | Tick         |
| "Reverse"   | -90° rotation             | Tick         |
| "Front"     | Front camera              | Pop          |
| "Back"      | Back camera               | Pop          |
| "Grid"      | Toggle grid               | Tick         |
| "Mirror"    | Toggle mirror             | Pop          |

## Files Saved To
Files app → Downloads on iPhone

## Version History

| Version | Date        | Changes                                              |
|---------|-------------|------------------------------------------------------|
| 1.0     | 09-Apr-2026 | Initial release                                      |
| 1.1     | 09-Apr-2026 | Video rotation + voice commands                      |
| 1.2     | 09-Apr-2026 | Translucent voice sheet                              |
| 1.3     | 09-Apr-2026 | Transparent sheet + instant voice                    |
| 1.4     | 09-Apr-2026 | Sound feedback for every command                     |
| 1.5     | 09-Apr-2026 | Voice controls live camera — MediaRecorder on stream |
