# Stagepulse – FOH Engineer & Ses Sistemi Kiralama

Statik site (HTML/CSS/JS). Domain: https://stagepulse.com.tr

## Yapı
- HTML sayfalar (index, hizmetler, muhendislik, galeri, dokumanlar, ekipman, teklif, ...)
- style.css, script.js, i18n.js (TR/EN)
- media.json + generate_media_json.py (galeri/doküman otomatik)
- sw.js + manifest.webmanifest (PWA)
- sitemap.xml, robots.txt

## Medya
`images/gallery/` → fotoğraflar  
`documents/` → PDF örnekler  
`videos/` → videolar  

Sonra `python3 generate_media_json.py` çalıştır.

## Yerel önizleme
```bash
cd stagepulse
python3 -m http.server 8080
```
