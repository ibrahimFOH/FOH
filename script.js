// =========================================================
// EVENT TECHNOLOGIES — Ortak JS (tüm sayfalarda tek kaynak)
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
    pack_desc:"Stage Plot + SPL hesaplama + sistem tasarımı + ekipman kiralama + kurulum ve söküm hizmetlerini tek pakette alabilirsiniz. Festival, konser ve büyük kurumsal etkinlikler için ideal çözümdür.",
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
    m_c2_t:"3D Sahne Çizimi", m_c2_d:"Etkinlik alanına özel 3D sahne ve sistem görselleştirmesi.",
    m_c3_t:"SPL Hesaplama & Analiz", m_c3_d:"Alan kapasitesine ve sistem tipine göre ses basınç seviyesi analizi.",
    m_c4_t:"Teknik Rider Hazırlama", m_c4_d:"Sanatçı rider'larının teknik olarak okunması ve sahneye uygun hale getirilmesi.",
    m_pack_title:"Mühendislik + Kiralama Paketi",
    m_pack_desc:"Stage Plot + SPL hesaplama + sistem tasarımı + ekipman kiralama + kurulum/söküm hizmetlerini tek pakette alabilirsiniz.",
    m_pack_btn:"Paket Teklifi Al",

    g_title:"Galeri", g_desc:"Sahadan görüntüler ve kurulumlar.",
    g_videos_title:"Videolar", g_videos_desc:"Canlı performans ve sahne kayıtları.",
    g_alt:"Event Technologies – saha fotoğrafı",

    d_title:"Örnek Dokümanlar", d_desc:"Stage Plot, Rider, SPL ve 3D çizim örnekleri.",
    d_empty_title:"Henüz doküman eklenmedi", d_empty_desc:"PDF'leri documents klasörüne yükleyin",
    d_view:"PDF görüntüle / indir",

    t_title:"Teklif Talebi", t_desc:"Etkinliğinizin türüne göre detaylı teklif hazırlıyoruz.",
    ph_name:"Ad Soyad / Firma", ph_phone:"Telefon",
    opt_placeholder:"Hizmet Türü Seçin",
    opt_1:"Ses Sistemi Kiralama", opt_2:"Işık & Truss Kiralama", opt_3:"Stage Plot / Sahne Planı",
    opt_4:"3D Sahne Çizimi", opt_5:"SPL Hesaplama", opt_6:"Teknik Rider Hazırlama",
    opt_7:"FOH Operasyonu", opt_8:"Paket (Kiralama + Mühendislik)", opt_9:"Diğer",
    ph_location:"Lokasyon / Şehir", ph_people:"Tahmini Katılımcı Sayısı",
    ph_message:"Etkinlik detayları, özel istekler...",
    t_submit:"Teklif Al", t_contact_title:"İletişim",

    nf_title:"Sayfa Bulunamadı", nf_desc:"Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    nf_btn:"Ana Sayfaya Dön"
  },
  en: {
    nav_home:"Home", nav_services:"Services", nav_engineering:"Engineering",
    nav_gallery:"Gallery", nav_docs:"Documents", nav_offer:"Get Quote",
    footer_role:"FOH Engineer • Event Technologies",
    copyright:"© 2026 İbrahim Kavasoğlu – Event Technologies",

    hero_title:"Professional <span>Audio & Stage</span> Solutions",
    hero_sub:"FOH Engineer • Event Technologies",
    hero_brand:"Rental + Technical Engineering",
    hero_desc:"We provide audio system rental, Stage Plot, SPL calculation, 3D stage design and FOH operations for live events, concerts, festivals and corporate organizations.",
    btn_offer:"Get Quote", btn_engineering:"Engineering Services",
    s1_title:"What We Offer",
    s1_desc:"Not just equipment rental — professional end-to-end technical solutions for your event.",
    c1_t:"Audio System Rental", c1_d:"Line Array, Point Source, Monitors and DJ systems tailored to your event scale.",
    c2_t:"Lighting & Truss Rental", c2_d:"Moving Heads, Wash, Beam, LED lighting and stage truss systems.",
    c3_t:"FOH Operations", c3_d:"Live mixing, system setup, stage coordination and technical operations.",
    s2_title:"Technical Engineering", s2_desc:"Planning, drawing and calculation services for stage and audio systems.",
    c4_t:"Stage Plot & Layout", c4_d:"Detailed stage layout plans prepared according to artist and organization needs.",
    c5_t:"3D Stage Design", c5_d:"Custom 3D stage and system visualization for your venue.",
    c6_t:"SPL Calculation", c6_d:"Sound pressure level analysis based on area capacity and system type.",
    c7_t:"Technical Rider", c7_d:"Technical review and adaptation of artist riders for the stage.",
    s3_title:"Experience in Numbers", st1:"Years Experience", st2:"Events", st3:"Artists", st4:"Hours Live Mix",
    pack_title:"Engineering + Rental Package",
    pack_desc:"Get Stage Plot + SPL calculation + system design + equipment rental + setup/teardown in one package. Ideal for festivals, concerts and large corporate events.",
    btn_pack:"Get Package Quote",
    s4_title:"Why Us?", s4_desc:"We aim for clean, balanced and reliable sound on every project.",
    c8_t:"End-to-End Management", c8_d:"We manage the entire process from planning to teardown.",
    c9_t:"Professional Equipment", c9_d:"Allen & Heath, DiGiCo, Yamaha, Meyer Sound and Dante systems.",
    c10_t:"Fast Support", c10_d:"Technical support before and during the event.",
    s5_title:"Get a quote for your project", s5_desc:"Share the details of your event and we will prepare a custom solution.",
    btn_cta:"Go to Quote Form",

    h_title:"Services", h_desc:"Professional audio, lighting and stage rental + operations support.",
    h_c1_t:"Line Array & PA Systems", h_c1_d:"Line Array and Point Source solutions for outdoor and indoor venues.",
    h_c2_t:"Monitor & IEM", h_c2_d:"Stage monitor systems and in-ear monitor solutions.",
    h_c3_t:"Digital Mixers", h_c3_d:"Allen & Heath, Yamaha, DiGiCo, Midas series consoles.",
    h_c4_t:"Lighting Systems", h_c4_d:"Moving Head, Wash, Beam, LED and lighting control consoles.",
    h_c5_t:"Network Audio (Dante)", h_c5_d:"Digital audio network infrastructure and integration.",
    h_c6_t:"Setup & Operations", h_c6_d:"Setup, teardown, technical crew and stage coordination.",
    h_btn:"Get Rental Quote",

    m_title:"Technical Engineering", m_desc:"Professional planning, drawing and calculation services for stage and audio systems.",
    m_c1_t:"Stage Plot & Layout", m_c1_d:"Detailed stage layout plans prepared according to artist and organization needs.",
    m_c2_t:"3D Stage Design", m_c2_d:"Custom 3D stage and system visualization for your venue.",
    m_c3_t:"SPL Calculation & Analysis", m_c3_d:"Sound pressure level analysis based on area capacity and system type.",
    m_c4_t:"Technical Rider", m_c4_d:"Technical review and adaptation of artist riders for the stage.",
    m_pack_title:"Engineering + Rental Package",
    m_pack_desc:"Get Stage Plot + SPL calculation + system design + equipment rental + setup/teardown in one package.",
    m_pack_btn:"Get Package Quote",

    g_title:"Gallery", g_desc:"Field photos and setups.",
    g_videos_title:"Videos", g_videos_desc:"Live performance and stage recordings.",
    g_alt:"Event Technologies – field photo",

    d_title:"Sample Documents", d_desc:"Stage Plot, Rider, SPL and 3D drawing examples.",
    d_empty_title:"No documents added yet", d_empty_desc:"Upload PDFs to the documents folder",
    d_view:"View / download PDF",

    t_title:"Quote Request", t_desc:"We prepare detailed quotes according to your event type.",
    ph_name:"Full Name / Company", ph_phone:"Phone",
    opt_placeholder:"Select Service Type",
    opt_1:"Audio System Rental", opt_2:"Lighting & Truss Rental", opt_3:"Stage Plot / Layout",
    opt_4:"3D Stage Design", opt_5:"SPL Calculation", opt_6:"Technical Rider",
    opt_7:"FOH Operations", opt_8:"Package (Rental + Engineering)", opt_9:"Other",
    ph_location:"Location / City", ph_people:"Estimated Attendance",
    ph_message:"Event details, special requests...",
    t_submit:"Get Quote", t_contact_title:"Contact",

    nf_title:"Page Not Found", nf_desc:"The page you are looking for does not exist or has been moved.",
    nf_btn:"Back to Home"
  }
};

// Dil değiştirme
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Aktif buton
  document.getElementById('btn-tr')?.classList.toggle('active', lang === 'tr');
  document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
}

// Sayfa yüklendiğinde dil
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'tr';
  setLanguage(saved);

  // Hamburger menü
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const icon = document.getElementById('hamburger-icon');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Linke tıklayınca menüyü kapat
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Galeri fotoğrafları
  const photos = [
  "images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
  "images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg",
  "images/gallery/11AD6679-02D7-4ADC-87AA-92059E510189.jpeg",
  "images/gallery/35E63E2A-949E-4AD5-AE11-E607E868C697.jpeg",
  "images/gallery/BFAD4788-CF18-4F44-BAA3-43060965EEEA.jpeg",
  "images/gallery/DE228FEA-36C1-4CCD-9185-0E03014CD491.jpeg"
];
  ];

  const gallery = document.getElementById("gallery");
  if (gallery) {
    photos.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      img.alt = "FOH Engineer";
      gallery.appendChild(img);
    });
  }

  // Videolar
  const videos = ["videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4"];
  const videoContainer = document.getElementById("videos");
  if (videoContainer) {
    videos.forEach(src => {
      const player = document.createElement("video");
      player.src = src;
      player.controls = true;
      player.preload = "metadata";
      videoContainer.appendChild(player);
    });
  }

  // Hero arka plan slider (index)
  const heroBg = document.getElementById("heroBg");
  if (heroBg && photos.length > 0) {
    let heroIndex = 0;
    heroBg.style.backgroundImage = `linear-gradient(110deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.35) 100%), url("${photos[0]}")`;
    
    setInterval(() => {
      heroIndex = (heroIndex + 1) % photos.length;
      heroBg.style.backgroundImage = `linear-gradient(110deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.35) 100%), url("${photos[heroIndex]}")`;
    }, 5000);
  }

  // Teklif formu → WhatsApp
  const form = document.getElementById("offerForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const text = `Yeni Teklif Talebi%0A%0AAd: ${this.name.value}%0ATelefon: ${this.phone.value}%0AEtkinlik: ${this.type.value}%0ALokasyon: ${this.location.value}%0AKişi: ${this.people.value}%0ATarih: ${this.date?.value || '-'}%0AMesaj: ${this.message?.value || '-'}`;
      window.open(`https://wa.me/905320683012?text=${text}`, '_blank');
    });
  }
});
