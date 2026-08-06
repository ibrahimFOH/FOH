# Stagepulse

A static website for **Stagepulse** — a Turkish FOH (Front of House) audio engineer and professional sound system rental service.

## Stack
- Pure static site: HTML, CSS, JavaScript
- No build step, no framework, no dependencies to install
- Multi-page site with Turkish/English i18n (`i18n.js`)

## Pages
- `index.html` — Home
- `hizmetler.html` — Services
- `ekipman.html` — Equipment
- `galeri.html` — Gallery
- `referanslar.html` — References
- `hakkimda.html` — About
- `muhendislik.html` — Engineering
- `dokumanlar.html` — Documents
- `teklif.html` — Quote
- `nasil-calisiyoruz.html` — How we work
- `sss.html` — FAQ
- `Kvkk.html` — KVKK (privacy)

## How to run
The workflow runs a simple Python HTTP server:
```
python3 -m http.server 5000
```

## External deployment
The site is live at [stagepulse.com.tr](https://stagepulse.com.tr) via the `CNAME` file (GitHub Pages).

## User preferences
