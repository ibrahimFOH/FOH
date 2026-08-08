# Stagepulse

**FOH Engineer • Ses Sistemi Kiralama • Teknik Mühendislik**

Profesyonel canlı etkinlik, konser, festival ve kurumsal organizasyonlar için  
Front of House (FOH) mühendisliği, ses/ışık kiralama, Stage Plot, SPL hesaplama ve 3D sahne çizimi hizmetleri.

**Canlı site:** https://stagepulse.com.tr  
**Geliştirici:** İbrahim Kavasoğlu

---

## Özellikler

- Tam responsive (mobil öncelikli) tasarım
- Türkçe / İngilizce i18n (dil tercihi kaydedilir)
- Otomatik medya yükleme sistemi (klasöre dosya at → kod değişmeden gallery / video / dokümanlar güncellenir)
- KVKK uyumlu teklif formu + çerez onayı
- Formspree entegrasyonu (kayıt + e-posta) + WhatsApp yedek
- Schema.org (ProfessionalService + LocalBusiness)
- PWA desteği (manifest + service worker)
- Üst düzey güvenlik header’ları (Cloudflare üzerinden)
- Google Analytics 4 + conversion event’leri
- Accessibility iyileştirmeleri (ARIA, focus-visible, klavye navigasyonu)

---

## Medya Ekleme (Kod Değiştirmeden)

1. Fotoğraf → `images/gallery/` klasörüne at (JPG, PNG, WEBP, GIF)
2. Video → `videos/` klasörüne at (MP4, WEBM, MOV)
3. PDF doküman → `documents/` klasörüne at

GitHub Actions veya `python generate_media_json.py` çalışınca `media.json` otomatik güncellenir.  
Site bir sonraki yüklemede yeni dosyaları gösterir.

---

## Formspree Kurulumu

1. https://formspree.io adresinden ücretsiz hesap aç
2. Yeni form oluştur → endpoint’i kopyala (`https://formspree.io/f/xxxxxx`)
3. `script.js` içinde `FORMSPREE_ENDPOINT` sabitini kendi endpoint’inle değiştir
4. Formspree ayarlarından e-posta bildirimini aç

Form hem Formspree’ye kaydeder hem de WhatsApp’a yönlendirir.

---

## Yerel Geliştirme

```bash
# Basit static server
python -m http.server 8080
# veya
npx serve .
```

Medya JSON’u güncellemek için:

```bash
python generate_media_json.py
```

---

## Deploy

Push to `main` = GitHub Pages + Cloudflare üzerinden otomatik yayın.

CNAME dosyası `stagepulse.com.tr` olarak ayarlıdır.

---

## Lisans

MIT License – detaylar için `LICENSE` dosyasına bakın.

---

© 2026 Stagepulse – İbrahim Kavasoğlu
