# PolarisFFA website

Static site (no backend, no build step). Edit staff and rewards in the `STAFF` / `REWARDS` arrays at the top of the script in `index.html`.

## Deploy on GitHub Pages
1. Create a repo and push these files to the `main` branch root (`index.html`, `CNAME`, `.nojekyll`).
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` / `(root)`.
3. Under **Custom domain** enter `polaris-ffa.com` and save (the `CNAME` file already contains it).

## DNS (at your domain registrar)
| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-github-username>.github.io` |

Optional AAAA records for @: 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153.
Check the current values in GitHub's docs ("Managing a custom domain for your GitHub Pages site") before saving.

## HTTPS
After DNS propagates (minutes to 24h), tick **Enforce HTTPS** in Settings → Pages. GitHub issues the certificate automatically. If the box is greyed out, remove and re-add the custom domain.

## Notes
- Player count comes from the public mcsrvstat.us API in the browser; it falls back to a message if unavailable.
- Staff heads load from mc-heads.net with a Steve fallback.

## Photos du staff
Édite `photos.json` directement sur GitHub (crayon ✏️ → Commit) : `"Pseudo": "https://lien-direct-image.png"`.
Laisse `""` pour utiliser `assets/staff/Pseudo.png` ou la tête automatique.

## Galerie photos
Mets tes images dans `assets/gallery/` puis liste-les dans `gallery.json` :
```json
["assets/gallery/spawn.jpg", {"src": "assets/gallery/arene.jpg", "caption": "L'arène SpearMace"}, "https://lien-direct/photo.png"]
```
Les liens externes marchent aussi. Une image introuvable est ignorée.
