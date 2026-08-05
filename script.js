// =========================================================
// EVENT TECHNOLOGIES — Ortak JS (tek kaynak)
// =========================================================

const translations = {
  tr: {
    nav_home:"Ana Sayfa", nav_services:"Hizmetler", nav_engineering:"Mühendislik",
    nav_gallery:"Galeri", nav_docs:"Dokümanlar", nav_offer:"Teklif Al",
    footer_role:"FOH Engineer • Event Technologies",
    copyright:"© 2026 İbrahim Kavasoğlu – Event Technologies",

    hero_title:"Profesyonel <span>Ses & Sahne</span> Çözümleri",
    hero_sub:"FOH Engineer • Event Technologies",
    hero_brand:"Kiralama + Teknik Mühendislik",
    hero_desc:"Canlı etkinlikler, konserler, festivaller ve kurumsal organizasyonlar için ses sistemi kiralama, Stage Plot, SPL hesaplama, 3D sahne çizimi ve FOH operasyon hizmetleri sunuyoruz.",
    btn_offer:"Teklif Al", btn_engineering:"Mühendislik Hizmetleri",
    s1_title:"Ne Sunuyoruz?",
    s1_desc:"Sadece ekipman kiralama değil, etkinliğinizin teknik altyapısını uçtan uca planlayan profesyonel çözümler.",
    c1_t:"Ses Sistemi Kiralama", c1_d:"Line Array, Point Source, Monitor ve DJ sistemleri. Etkinlik ölçeğine uygun profesyonel çözümler.",
    c2_t:"Işık & Truss Kiralama", c2_d:"Moving Head, Wash, Beam, LED aydınlatma ve sahne truss sistemleri.",
    c3_t:"FOH Operasyonu", c3_d:"Canlı miks yönetimi, sistem kurulumu, sahne koordinasyonu ve teknik operasyon.",
    s2_title:"Teknik Mühendislik", s2_desc:"Sahne ve ses sistemleri için planlama, çizim ve hesaplama hizmetleri.",
    c4_t:"Stage Plot & Sahne Planı", c4_d:"Sanatçı ve organizasyon ihtiyaçlarına göre detaylı sahne yerleşim planı hazırlanır.",
    c5_t:"3D Sahne Çizimi", c5_d:"Etkinlik alanına özel 3D sahne ve sistem görselleştirmesi.",
    c6_t:"SPL Hesaplama", c6_d:"Alan kapasitesine ve sistem tipine göre ses basınç seviyesi analizi.",
    c7_t:"Teknik Rider", c7_d:"Sanatçı rider'larının teknik olarak okunması ve sahneye uygun hale getirilmesi.",
    s3_title:"Rakamlarla Deneyim", st1:"Yıl Deneyim", st2:"Etkinlik", st3:"Sanatçı", st4:"Saat Canlı Miks",
    pack_title:"Mühendislik + Kiralama Paketi",
    pack_desc:"Stage Plot + SPL hesaplama + sistem tasarımı + ekipman kiralama + kurulum ve söküm hizmetlerini tek pakette alabilirsiniz.",
    btn_pack:"Paket Teklifi Al",
    s4_title:"Neden Biz?", s4_desc:"Her projede temiz, dengeli ve güvenilir ses elde etmeyi hedefliyoruz.",
    c8_t:"Uçtan Uca Yönetim", c8_d:"Planlamadan kuruluma, miksten söküme kadar tüm süreci yönetiyoruz.",
    c9_t:"Profesyonel Ekipman", c9_d:"Allen & Heath, DiGiCo, Yamaha, Meyer Sound ve Dante sistemleri.",
    c10_t:"Hızlı Destek", c10_d:"Proje öncesi ve etkinlik sırasında teknik destek sağlıyoruz.",
    s5_title:"Projeniz için teklif alın", s5_desc:"Etkinliğinizin detaylarını paylaşın, size özel çözüm hazırlayalım.",
    btn_cta:"Teklif Formuna Git",

    h_title:"Hizmetler", h_desc:"Profesyonel ses, ışık ve sahne kiralama + operasyon desteği.",
    h_c1_t:"Line Array & PA Sistemleri", h_c1_d:"Açık alan ve kapalı mekân için Line Array ve Point Source çözümleri.",
    h_c2_t:"Monitor & IEM", h_c2_d:"Sahne monitör sistemleri ve in-ear monitor çözümleri.",
    h_c3_t:"Dijital Mikserler", h_c3_d:"Allen & Heath, Yamaha, DiGiCo, Midas serisi konsollar.",
    h_c4_t:"Aydınlatma Sistemleri", h_c4_d:"Moving Head, Wash, Beam, LED ve kontrol konsolları.",
    h_c5_t:"Network Audio (Dante)", h_c5_d:"Dijital ses ağı altyapısı ve entegrasyon.",
    h_c6_t:"Kurulum & Operasyon", h_c6_d:"Kurulum, söküm, teknik ekip ve sahne koordinasyonu.",
    h_btn:"Kiralama Teklifi Al",

    m_title:"Teknik Mühendislik", m_desc:"Sahne ve ses sistemleri için profesyonel planlama, çizim ve hesaplama hizmetleri.",
    m_c1_t:"Stage Plot & Sahne Planı", m_c1_d:"Sanatçı ve organizasyon ihtiyaçlarına göre detaylı sahne yerleşim planı hazırlanır.",
    m_c1_cta:"→ Stage Plot talebi için teklif alın",
    m_c2_t:"3D Sahne Çizimi", m_c2_d:"Etkinlik alanına özel 3D sahne ve sistem görselleştirmesi.",
    m_c2_cta:"→ 3D çizim talebi için teklif alın",
    m_c3_t:"SPL Hesaplama & Analiz", m_c3_d:"Alan kapasitesine ve sistem tipine göre ses basınç seviyesi analizi.",
    m_c3_cta:"→ SPL hesaplama talebi için teklif alın",
    m_c4_t:"Teknik Rider Hazırlama", m_c4_d:"Sanatçı rider'larının teknik olarak okunması ve sahneye uygun hale getirilmesi.",
    m_c4_cta:"→ Rider hizmeti için teklif alın",
    m_pack_title:"Mühendislik + Kiralama Paketi",
    m_pack_desc:"Stage Plot + SPL hesaplama + sistem tasarımı + ekipman kiralama + kurulum/söküm hizmetlerini tek pakette alabilirsiniz.",
    m_pack_btn:"Paket Teklifi Al",

    g_title:"Galeri", g_desc:"Sahadan görüntüler ve kurulumlar.",
    g_videos_title:"Videolar", g_videos_desc:"Canlı performans ve sahne kayıtları.",

    d_title:"Örnek Dokümanlar", d_desc:"Stage Plot, Rider, SPL ve 3D çizim örnekleri.",
    d_empty_title:"Henüz doküman eklenmedi", d_empty_desc:"PDF'leri documents klasörüne yükleyin",
    d_view:"PDF görüntüle / indir",

    t_title:"Teklif Talebi", t_desc:"Etkinliğinizin türüne göre detaylı teklif hazırlıyoruz.",
    ph_name:"Ad Soyad / Firma", ph_phone:"Telefon", ph_date:"Etkinlik Tarihi",
    opt_placeholder:"Hizmet Türü Seçin",
    opt_1:"Ses Sistemi Kiralama", opt_2:"Işık & Truss Kiralama", opt_3:"Stage Plot / Sahne Planı",
    opt_4:"3D Sahne Çizimi", opt_5:"SPL Hesaplama", opt_6:"Teknik Rider Hazırlama",
    opt_7:"FOH Operasyonu", opt_8:"Paket (Kiralama + Mühendislik)", opt_9:"Diğer",
    ph_location:"Lokasyon / Şehir", ph_people:"Tahmini Katılımcı Sayısı",
    ph_message:"Etkinlik detayları, özel istekler...",
    t_submit:"Teklif Al",
    kvkk_text:"Kişisel verilerimin teklif hazırlanması amacıyla işlenmesini kabul ediyorum.",

    nf_title:"Sayfa Bulunamadı", nf_desc:"Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    nf_btn:"Ana Sayfaya Dön"
  },
  en: {
    nav_home:"Home", nav_services:"Services", nav_engineering:"Engineering",
    nav_gallery:"Gallery", nav_docs:"Documents", nav_offer
