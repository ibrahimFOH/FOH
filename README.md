# Stagepulse – FOH Engineer & Ses Sistemi Kiralama

Profesyonel ses & sahne çözümleri sitesi. Cloudflare Pages / Workers için hazır.

## Yapılan düzeltmeler (2026-08-08)

- Bayrak sorunu çözüldü → **inline SVG** (klasör / CDN yok, telefonda ekstra yükleme gerekmez)
- Cloudflare email-protection kaldırıldı → gerçek `mailto:ibrahimkavasoglu7@gmail.com`
- Cloudflare challenge / email-decode scriptleri temizlendi
- Logo ve ana sayfa linkleri `index.html` olarak standardize edildi
- Boşluklu dosya adı düzeltildi (`2025-12-10_22-07-22.JPG`)
- `robots.txt` + `sitemap.xml` eklendi
- Tüm sayfalarda `i18n.js` + `script.js` sırası doğru
- CSS bayrak stilleri inline SVG’ye uygun hale getirildi

## Klasör yapısı (yeni klasör açma)

```
/
├── index.html
├── hizmetler.html
├── muhendislik.html
├── teklif.html
├── galeri.html
├── hakkimda.html
├── dokumanlar.html
├── nasil-calisiyoruz.html
├── referanslar.html
├── sss.html
├── ekipman.html
├── Kvkk.html
├── style.css
├── script.js
├── i18n.js
├── media.json
├── sw.js
├── manifest.webmanifest
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── images/
│   └── gallery/          ← fotoğraflar burada
└── documents/            ← PDF’ler burada
```

**Not:** `images/flags` klasörü **yok**. Bayraklar HTML içinde gömülü.

## Cloudflare’e yükleme (telefon uyumlu adımlar)

1. Bu zip’i indirip aç.
2. Cloudflare Dashboard → Pages → Create project → Upload assets
3. Açılan `stagepulse` klasörünün **içindeki tüm dosyaları** seçip yükle  
   (içindeki `images` ve `documents` klasörleri de gelsin)
4. Deploy sonrası domain’i bağla: `stagepulse.com.tr`

Alternatif: GitHub’a push + Cloudflare Pages Git entegrasyonu.

## Test

Yerelde:

```bash
npx serve .
# veya
python3 -m http.server 8000
```

Galeri, dil değiştirme, form ve WhatsApp butonunu kontrol et.

## Form & iletişim

- Formspree: `https://formspree.io/f/xrpzeegb`
- WhatsApp: +90 532 068 3012
- E-posta: ibrahimkavasoglu7@gmail.com
