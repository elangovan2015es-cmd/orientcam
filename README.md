# OrientCam — iPhone Edition

| Item        | Detail                          |
|-------------|---------------------------------|
| App name    | OrientCam                       |
| Version     | 1.0                             |
| Date        | 09-Apr-2026                     |
| Platform    | iPhone — Safari PWA             |
| Developer   | Elango / EIL                    |
| Hosted at   | elangovan2015es-cmd.github.io   |

---

## File Version Reference

| File          | Version | Cache / Key            | Notes                        |
|---------------|---------|------------------------|------------------------------|
| index.html    | v1.0    | —                      | Main app file                |
| manifest.json | v1.0    | —                      | PWA install config           |
| sw.js         | v1.0    | orientcam-v1-cache     | Bump cache name on update    |

> When releasing v1.1, v2.0 etc:
> - Update version number in all 4 files
> - Change CACHE_NAME in sw.js to `orientcam-v1.1-cache` (old cache auto-cleared)

---

## Features (v1.0)

- Photo mode: live rotated preview → saves rotated JPG
- Video mode: opens iPhone native camera → brings video back → save to Files
- Rotation presets: 0° / 90° / -90° / 180°
- Custom rotation slider: -180° to +180°
- Rule-of-thirds grid overlay
- Front / back camera flip
- Mirror mode
- Offline support via service worker

---

## Deploy Steps

1. Create GitHub repo named `orientcam` under `elangovan2015es-cmd`
2. Upload: `index.html`, `manifest.json`, `sw.js`, `README.md`
3. Settings → Pages → main branch → Save
4. Live at: `https://elangovan2015es-cmd.github.io/orientcam/`

## Add to iPhone Home Screen

1. Open link in **Safari**
2. Tap **Share** button (bottom centre)
3. Tap **Add to Home Screen**
4. Tap **Add**
5. Opens fullscreen — no browser bar

---

## Version History

| Version | Date        | Changes          |
|---------|-------------|------------------|
| 1.0     | 09-Apr-2026 | Initial release  |
