# Stagepulse HTML güncellemesi

## Yapılanlar
1. Masaüstü menü: nav-links, nav-inner içine alındı (yatay menü CSS ile çalışır)
2. Ana sayfa hero: Teklif Al + WhatsApp + Ara
3. Alt CTA: form + WhatsApp
4. Tüm WhatsApp linkleri hazır mesajlı
5. Instagram (stagepulse.hatay) tüm footer’lara eklendi
6. Floating WhatsApp tüm ana sayfalarda
7. ekipman.html site şablonuyla yeniden yazıldı (1 Eylül için hazır tablo)
8. inventory-table stilleri style.css’e eklendi
9. sitemap’e ekipman eklendi (öncelik düşük; menüde henüz yok)

## Menüye ekipman eklemek (1 Eylül sonrası)
Her HTML’de nav-links içine:
  <a href="ekipman.html" data-i18n="nav_equipment">Ekipman</a>

## Ekipman satırı ekleme
ekipman.html içinde <tbody> altına:
<tr>
  <td>Line Array</td>
  <td>L-Acoustics Kara</td>
  <td>12</td>
  <td><span class="badge-soon">Stokta</span></td>
  <td>Ana sistem</td>
</tr>

## Yükleme
Bu klasördeki dosyaları GitHub FOH repo köküne yükle (üzerine yaz).
i18n.js, images/, favicon vb. mevcut repoda kalsın.
