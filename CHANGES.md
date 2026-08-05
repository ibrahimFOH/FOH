# FOH Sitesi — Düzeltme Özeti

Bu klasördeki dosyalar, `ibrahimFOH/FOH` reposundaki mevcut dosyaların **düzeltilmiş
halidir**. Aşağıdaki değişiklikleri yaptım. Bunu GitHub Copilot Chat'e (veya PR
açıklamasına) context olarak verebilirsin.

## 1. Dil sistemi (TR/EN) artık tüm sayfalarda gerçekten çalışıyor
**Sorun:** Çeviri sözlüğü ve `setLanguage()` sadece `index.html` içinde tanımlıydı.
`hizmetler.html`, `muhendislik.html`, `galeri.html`, `dokumanlar.html`, `404.html`
sayfalarında dil butonu hiç yoktu. `teklif.html`'deki dil butonları ise sadece
CSS "active" durumunu değiştiriyor, metni çevirmiyordu.

**Çözüm:**
- `translations` sözlüğü ve `setLanguage()` / `initLanguage()` fonksiyonları
  **tek kaynak** olarak `script.js`'e taşındı.
- Her sayfaya `data-i18n` (metin) ve `data-i18n-placeholder` (form alanları)
  attribute'ları eklendi.
- Her sayfanın `<nav>` bölümüne aynı dil seçici (TR/EN) eklendi.

## 2. CSS tekrarları birleştirildi
**Sorun:** Her HTML dosyasında `style.css` linkliyken, neredeyse aynı kurallar
içeren büyük bir `<style>` bloğu da vardı. Küçük farklar (örn. nav arkaplan
opaklığı `.93` vs `.9`) tutarsızlığa yol açıyordu.

**Çözüm:** Tüm sayfa-özel stiller (`.doc-grid`, `.gallery`, `.videos`,
`.not-found`, `#offerForm`, `.highlight-box`, `.card-cta` vb.) `style.css`'e
taşındı. Artık hiçbir HTML dosyasında inline `<style>` bloğu yok — hepsi tek
dosyadan yönetiliyor.

## 3. `dokumanlar.html` footer'ındaki eksik link düzeltildi
Kendi sayfasına ("Dokümanlar") link vermiyordu, footer'da 5 link vardı; 6'ya
tamamlandı.

## 4. `hizmetler.html` / `muhendislik.html`'deki `.btn` çakışması düzeltildi
Bu sayfalar `.btn` sınıfını doğrudan sarı arkaplanla override ediyordu; bu da
`teklif.html`'deki `.btn` + `.btn-whatsapp` / `.btn-instagram` kombinasyonuyla
çakışabilirdi. Artık tüm sayfalarda `btn btn-primary` / `btn btn-whatsapp` /
`btn btn-instagram` / `btn btn-outline` kombinasyonları tutarlı kullanılıyor.

## 5. Görsel `alt` metinleri artık benzersiz
**Sorun:** `script.js`'te galeri görsellerinin tümü `alt="Event Technologies"`
idi (SEO ve ekran okuyucular için tekrarlayan, açıklayıcı olmayan).

**Çözüm:** Artık `alt="Event Technologies – saha fotoğrafı 1"`, `... 2` şeklinde
sıralı ve dil sözlüğüne bağlı (`g_alt` anahtarı).

## 6. Boşluklu dosya adları artık URL olarak güvenli
`media.json`'daki `2025-12-10 22-07-22.JPG` gibi boşluklu dosya adları
tarayıcıda sorun çıkarabiliyordu. `script.js` artık tüm medya `src`
değerlerini `encodeURI()` ile işliyor (hem galeri hem hero slider hem video).

## 7. SEO / meta iyileştirmeleri
- Tüm sayfalara `<link rel="canonical">` eklendi.
- `og:image` artık göreli değil, tam URL (`https://ibrahimfoh.github.io/FOH/...`)
  — sosyal medya paylaşımlarında görsel artık düzgün görünür.
- `sitemap.xml`'e `<lastmod>` etiketleri eklendi.

## 8. Küçük güvenlik/iyi pratik düzeltmeleri
- Yeni sekmede açılan tüm dış linklere (`target="_blank"`) eksik olan
  `rel="noopener noreferrer"` eklendi (teklif.html WhatsApp/Instagram linkleri).

---

## Değişmeyenler (bilerek dokunmadım)
- `GA_ID = "G-XXXXXXXXXX"` placeholder olarak bırakıldı — kendi GA4 ID'ni
  girene kadar Analytics pasif kalacak, bu kasıtlı bir güvenlik/gizlilik
  varsayılanı olabilir.
- Teklif formu hâlâ backend'e değil WhatsApp'a gönderiyor — bu bir tasarım
  tercihiydi, değiştirmedim.
- `.replit` ve GitHub Actions workflow dosyaları fonksiyonel olarak aynı kaldı
  (workflow'daki print mesajlarındaki Türkçe karakterler ASCII'ye çevrildi,
  sadece log okunabilirliği için — davranış değişmedi).

## Bu dosyaları repona nasıl uygularsın
1. Bu klasördeki tüm dosyaları, aynı isim ve yoldaki dosyaların üzerine
   kopyala (`.github/workflows/generate-media.yml` dahil).
2. `images/`, `videos/`, `documents/`, `favicon.svg` gibi bu pakette
   olmayan klasör/dosyaları **değiştirme** — onlar zaten repo'da duruyor.
3. Commit + push sonrası GitHub Pages otomatik güncellenecek.

Copilot'a vereceğin özet: *"Bu FOH web sitesinde dil sistemi (TR/EN) sadece
ana sayfada çalışıyordu, CSS her sayfada tekrarlanıyordu ve dokumanlar
sayfasının footer'ında kendi linki eksikti. Ekli dosyalar bu sorunları
merkezi bir i18n sistemi (script.js) ve tek CSS dosyası (style.css) ile
çözüyor — lütfen mevcut dosyaların üzerine bu haliyle uygula."*
