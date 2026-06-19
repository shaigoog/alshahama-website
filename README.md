# Alshahama Medical Equipment — Website / موقع الشهامة للمعدات الطبية

Static, bilingual (Arabic-default RTL / English LTR), mobile-first website for
**ALSHAHAMA Medical Equipments Trading LLC** — Dubai, UAE.
Built with semantic HTML5, modern CSS (logical properties), and vanilla JavaScript.
No backend, no build step, no framework.

موقع ثابت ثنائي اللغة (العربية افتراضياً) مصمّم للجوال أولاً، بدون أي خادم أو إطار عمل.

---

## Structure

```
/
├─ index.html
├─ styles.css
├─ script.js
├─ site.webmanifest
├─ robots.txt
├─ sitemap.xml
├─ .nojekyll
└─ assets/
   ├─ logo/    alshahama-logo.png · og-image.jpg
   ├─ icons/   favicon.ico · icon-16/32/180/192/512.png
   └─ fonts/   Tajawal-{Regular,Medium,Bold,ExtraBold}.woff2  (self-hosted)
```

## Key features

- **Bilingual** with a language switch (العربية | English); choice saved in `localStorage`.
  All content is written into the page/script — no runtime machine translation.
- **Mobile-first**, no horizontal scroll from 320px upward; off-canvas drawer
  (closed on load, backdrop, Escape to close, scroll-lock).
- **Single floating WhatsApp button** that carries the correct message per language.
- **Self-hosted Tajawal font** (~84 KB total) — no external requests, no render-block.
- **Accessibility:** one H1, landmarks, skip link, visible focus, `aria-expanded`
  FAQ accordion, reduced-motion support, AA-oriented contrast.
- **SEO:** title, meta description, canonical, Open Graph + Twitter, theme color,
  favicon, manifest, robots.txt, sitemap.xml, and `MedicalBusiness` JSON-LD
  (verified info only: name, phone, Dubai/UAE, URL, logo).

## Local preview

Serve over HTTP (fonts won't load via `file://`):

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy (GitHub Pages, branch `main`, folder `/root`)

This package is meant to replace the repository root. Suggested flow:

```bash
git checkout -b claude/rebuild-alshahama-website
# copy these files into the repo root (overwrite old ones), then:
git add -A
git commit -m "Rebuild website: bilingual, mobile-first, accessible, SEO"
git push -u origin claude/rebuild-alshahama-website
# open a Pull Request into main on GitHub
```

After merging into `main`, GitHub Pages serves from the root at:
`https://alshahamamedical.com/`

`.nojekyll` is included so all asset folders are served as-is.

## Editing content

- UI strings live in the `I18N` dictionary in `script.js` (`ar` and `en`).
  The default Arabic copy is also inline in `index.html` for SEO and no-JS users.
- Brand colors are CSS variables at the top of `styles.css`
  (navy `#1B1A4E`, teal `#1F9E8C`/`#2FB6A3`, purple `#7B6FC9`).

## Contact (as configured)

ALSHAHAMA Medical Equipments Trading LLC · Office 101, First Floor, Al Abeer Building, Bur Dubai, Dubai, UAE · +971 50 323 8103 · info@alshahamamedical.com
