# Stagepulse – FOH Engineer & Ses Sistemi Kiralama

Profesyonel ses & sahne çözümleri web sitesi.

## Yapı

- Tüm sayfalar statik HTML
- `i18n.js` – Türkçe / İngilizce çeviriler
- `script.js` – dil değiştirme, galeri, form, cookie
- `style.css` – stil
- `media.json` – galeri fotoğrafları ve doküman listesi
- `images/flags/` – yerel bayrak SVG’leri (Twemoji CDN kaldırıldı)
- `images/gallery/` – proje fotoğrafları
- `documents/` – örnek PDF’ler

## Bayrak düzeltmesi

Mobilde soru işareti / PC’de dünya simgesi sorununu çözmek için:
- Twemoji CDN kaldırıldı
- Bayraklar `images/flags/tr.svg` ve `gb.svg` olarak yerel tutuluyor
- CSS’te yuvarlak yerine dikdörtgen bayrak kullanıldı

## Çalıştırma

Basit bir static server ile:

```bash
npx serve .
# veya
python3 -m http.server 8000
```

## Form

Formspree endpoint: `https://formspree.io/f/xrpzeegb`
WhatsApp: +90 532 068 3012

## Not

Cloudflare challenge scriptleri temizlendi. Production’da Cloudflare kullanıyorsanız yeniden ekleyebilirsiniz.
