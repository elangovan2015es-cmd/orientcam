# OrientCam v1.9 — Auto-Update Edition

| Item    | Detail               |
|---------|----------------------|
| Version | 1.9                  |
| Date    | 10-Apr-2026          |
| Cache   | orientcam-v1.9-cache |

## Files in This Version (5 files — version.json is new)

| File         | Purpose                                      |
|--------------|----------------------------------------------|
| index.html   | Main app                                     |
| manifest.json| PWA install config                           |
| sw.js        | Service worker with auto-update logic        |
| version.json | Version number — update this for each release|
| README.md    | This file                                    |

## Auto-Update System — No More Manual Deletion!

### How it works:
1. App opens → waits 3 seconds → fetches version.json from GitHub
2. Compares live version number with current app version
3. If different → green banner appears at top: "New version available!"
4. User taps banner → cache cleared → new version loads
5. Checks again every 5 minutes while app is open

### What YOU do when releasing a new version:
1. Upload new index.html and sw.js with new version number
2. Update version.json → change "version" to the new number
3. That's it — all users see the update banner next time they open the app

### Example — releasing v2.0:
- index.html → change APP_VERSION to '2.0'
- sw.js → change CACHE to 'orientcam-v2.0-cache'
- manifest.json → change _version to '2.0'
- version.json → change "version" to "2.0"
- Upload all 5 files → done

## Gesture Zones
- Left edge (52px) → tap = Roll (start recording)
- Right edge (52px) → tap = Still snap
- Swipe down on screen → Stop + Share

## After Share
- App automatically returns to live camera
- Ready to shoot again — no deletion, no reload needed

## Version History

| Version | Date        | Changes                                              |
|---------|-------------|------------------------------------------------------|
| 1.0-1.8 | 09-Apr-2026 | See previous versions                                |
| 1.9     | 10-Apr-2026 | Auto-return after share, gestures fixed, dual solid  |
| 1.9p    | 10-Apr-2026 | Auto-update banner — no manual deletion ever again   |
