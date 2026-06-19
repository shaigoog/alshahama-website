# ALSHAHAMA Medical Equipments Trading — Premium Website

A complete, premium, bilingual (Arabic-default RTL / English LTR), mobile-first
redesign for **Alshahama Medical Equipments Trading LLC**, Dubai, UAE.
Editorial layout, real-photography slots, partners section, and lightweight
premium animations. Static: semantic HTML5 + modern CSS + vanilla JS — no
framework, no build step, GitHub-Pages ready.

موقع متكامل وفاخر، ثنائي اللغة (العربية افتراضياً)، مصمّم للجوال أولاً، بدون أي
إطار عمل أو خطوة بناء.

---

## Files

```
index.html · styles.css · script.js
site.webmanifest · robots.txt · sitemap.xml · .nojekyll · README.md
assets/
  logo/      alshahama-logo.png · og-image.jpg
  icons/     favicon.ico · icon-16/32/180/192/512.png
  fonts/     Tajawal-{Regular,Medium,Bold,ExtraBold}.woff2   (self-hosted)
  images/    hero + 8 service + 4 gallery placeholders   ← REPLACE with real photos
  partners/  dar-al-ber.png · dubai-charity.png           ← REPLACE with official logos
```

## ⚠️ Replace the placeholder images

Every file in `assets/images/` and `assets/partners/` is a **branded placeholder**
that clearly says “REPLACE”. Drop your real files in using the **exact same
filename** and the site updates automatically — no code changes needed.

**Service / hero photos** (real medical-equipment photography — **no patient photos**):

| File | Use | Suggested size |
|------|-----|----------------|
| `images/hero-equipment.jpg` | Hero | 1200×900 |
| `images/01-wheelchair-manual.jpg` | Manual & powered wheelchairs | 900×640 |
| `images/02-wheelchair-rehab.jpg` | Rehab / tilt-recline chairs | 900×640 |
| `images/03-prosthetics.jpg` | Prosthetic limbs | 900×640 |
| `images/04-orthotics.jpg` | Orthotic devices & braces | 900×640 |
| `images/05-walkers.jpg` | Walkers & mobility aids | 900×640 |
| `images/06-medical-beds.jpg` | Medical beds & homecare | 900×640 |
| `images/07-hearing-aids.jpg` | Hearing aids | 900×640 |
| `images/08-fitting-delivery.jpg` | Assessment, fitting & delivery | 900×640 |
| `images/gallery-1..4.jpg` | Equipment gallery | 700×700 / 700×520 |

**Partner logos** (use the official logos — you are a partner of both):
`partners/dar-al-ber.png` (Dar Al Ber Society / جمعية دار البر الخيرية) ·
`partners/dubai-charity.png` (Dubai Charity Association / دبي الخيرية).
Transparent PNG, roughly 520×300, looks best.

Keep filenames identical so no HTML edits are needed. `width`/`height` are already
set on every `<img>` to prevent layout shift; match the aspect ratio for best results.

## Editable content

- **Opening hours:** the contact card shows an editable placeholder
  (“أضف ساعات العمل هنا” / “Add your opening hours here”). Edit the `cHours`
  string in `script.js` (both `ar` and `en`) to set real hours.
- All other UI text lives in the `I18N` dictionary in `script.js` (`ar` + `en`);
  the default Arabic copy is also inline in `index.html` for SEO / no-JS.
- Brand colors are CSS variables at the top of `styles.css`.

## What’s included

- 12 sections: header, hero, trust, services (editorial / alternating /
  asymmetric — **not** a card grid), why, how we work, equipment gallery,
  partners, who we serve, FAQ, contact, footer.
- Bilingual switch (العربية | English), saved in `localStorage`; updates text,
  direction, `<title>`, meta description and the WhatsApp message.
- Premium lightweight animations: scroll reveal, animated gradient orbs, button
  shine, hover lift, image zoom, partner reveal, smooth drawer — all gated by
  `prefers-reduced-motion`.
- Accessibility: one H1, landmarks, skip link, visible focus, `aria-expanded`
  FAQ, alt text on every image.
- SEO: title, description, canonical, Open Graph + Twitter, manifest, sitemap,
  robots, `MedicalBusiness` JSON-LD (verified info only).
- The medical-report-via-WhatsApp FAQ has been **removed** and is not replaced;
  privacy copy does not encourage sending medical reports.

## Local preview

Fonts are self-hosted, so preview over HTTP (not `file://`):

```bash
python3 -m http.server 8000      # → http://localhost:8000/
```

## Deploy (GitHub Pages — branch `main`, folder `/root`)

This package replaces the repository root.

```bash
git checkout -b claude/redesign-alshahama
# copy all files into the repo root (overwrite), then:
git add -A
git commit -m "Premium editorial redesign: bilingual, mobile-first, animated"
git push -u origin claude/redesign-alshahama
# open a Pull Request into main
```

After merging, the site serves at `https://alshahamamedical.com/`
(or `https://shaigoog.github.io/alshahama-website/` on GitHub Pages).
`.nojekyll` keeps the asset folders intact.

## Contact (configured)

Alshahama Medical Equipments Trading LLC · Office 101, First Floor, Al Abeer
Building, Bur Dubai, Dubai, UAE · +971 50 323 8103 · info@alshahamamedical.com
