// =========================================================
// EVENT TECHNOLOGIES — Ortak JS (tüm sayfalarda tek kaynak)
// =========================================================

// ── DİL SİSTEMİ (TÜM SAYFALAR) ─────────────────────────
// Not: Bu sözlük artık merkezi. Yeni bir sayfa eklerken
// sadece buraya anahtar eklemen ve HTML'de data-i18n
// kullanman yeterli. Placeholder çevirisi için
// data-i18n-placeholder="anahtar" kullan.
const translations = {
  tr: {
    // NAV / FOOTER (ortak)
    nav_home:"Ana Sayfa", nav_services:"Hizmetler", nav_engineering:"Mühendislik",
    nav_gallery:"Galeri", nav_docs:"Dokümanlar", nav_offer:"Teklif Al",
    footer_role:"FOH Engineer • Event Technologies",
    copyright:"© 2026 İbrahim Kavasoğlu – Event Technologies",

    // INDEX
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

    // HİZMETLER
    h_title:"Hizmetler",
    h_desc:"Profesyonel ses, ışık ve sahne kiralama + operasyon desteği.",
    h_c1_t:"Line Array & PA Sistemleri", h_c1_d:"Açık alan ve kapalı mekân için Line Array ve Point Source çözümleri.",
    h_c2_t:"Monitor & IEM", h_c2_d:"Sahne monitör sistemleri ve in-ear monitor çözümleri.",
    h_c3_t:"Dijital Mikserler", h_c3_d:"Allen & Heath, Yamaha, DiGiCo, Midas serisi konsollar.",
    h_c4_t:"Aydınlatma Sistemleri", h_c4_d:"Moving Head, Wash, Beam, LED ve kontrol konsolları.",
    h_c5_t:"Network Audio (Dante)", h_c5_d:"Dijital ses ağı altyapısı ve entegrasyon.",
    h_c6_t:"Kurulum & Operasyon", h_c6_d:"Kurulum, söküm, teknik ekip ve sahne koordinasyonu.",
    h_btn:"Kiralama Teklifi Al",

    // MÜHENDİSLİK
    m_title:"Teknik Mühendislik",
    m_desc:"Sahne ve ses sistemleri için profesyonel planlama, çizim ve hesaplama hizmetleri.",
    m_c1_t:"Stage Plot & Sahne Planı", m_c1_d:"Sanatçı ve organizasyon ihtiyaçlarına göre detaylı sahne yerleşim planı hazırlanır. Giriş-çıkış, monitör, enstrüman ve teknik hatlar net şekilde gösterilir.", m_c1_cta:"→ Stage Plot talebi için teklif alın",
    m_c2_t:"3D Sahne Çizimi", m_c2_d:"Etkinlik alanına özel 3D sahne ve sistem görselleştirmesi. Organizasyon ve teknik ekibin aynı dili konuşması için görsel destek.", m_c2_cta:"→ 3D çizim talebi için teklif alın",
    m_c3_t:"SPL Hesaplama & Analiz", m_c3_d:"Alan kapasitesine, seyirci sayısına ve sistem tipine göre ses basınç seviyesi (SPL) hesaplaması ve kapsama analizi.", m_c3_cta:"→ SPL hesaplama talebi için teklif alın",
    m_c4_t:"Teknik Rider Hazırlama", m_c4_d:"Sanatçı rider'larının teknik olarak okunması, uyarlanması ve sahne/ses sistemine uygun hale getirilmesi.", m_c4_cta:"→ Rider hizmeti için teklif alın",
    m_pack_title:"Mühendislik + Kiralama Paketi",
    m_pack_desc:"Stage Plot + SPL hesaplama + sistem tasarımı + ekipman kiralama + kurulum/söküm hizmetlerini tek pakette alabilirsiniz.",
    m_pack_btn:"Paket Teklifi Al",

    // GALERİ
    g_title:"Galeri", g_desc:"Sahadan görüntüler ve kurulumlar.",
    g_videos_title:"Videolar", g_videos_desc:"Canlı performans ve sahne kayıtları.",
    g_alt:"Event Technologies – saha fotoğrafı",

    // DOKÜMANLAR
    d_title:"Örnek Dokümanlar",
    d_desc:"Stage Plot, Rider, SPL ve 3D çizim örnekleri. İhtiyacınıza göre özel hazırlanır.",
    d_empty_title:"Henüz doküman eklenmedi",
    d_empty_desc:"PDF'leri documents klasörüne yükleyin",
    d_view:"PDF görüntüle / indir",

    // TEKLİF
    t_title:"Teklif Talebi",
    t_desc:"Etkinliğinizin türüne göre detaylı teklif hazırlıyoruz.",
    ph_name:"Ad Soyad / Firma", ph_phone:"Telefon",
    opt_placeholder:"Hizmet Türü Seçin",
    opt_1:"Ses Sistemi Kiralama", opt_2:"Işık & Truss Kiralama", opt_3:"Stage Plot / Sahne Planı",
    opt_4:"3D Sahne Çizimi", opt_5:"SPL Hesaplama", opt_6:"Teknik Rider Hazırlama",
    opt_7:"FOH Operasyonu", opt_8:"Paket (Kiralama + Mühendislik)", opt_9:"Diğer",
    ph_location:"Lokasyon / Şehir", ph_people:"Tahmini Katılımcı Sayısı",
    ph_message:"Etkinlik detayları, özel istekler...",
    t_submit:"Teklif Al",
    t_contact_title:"İletişim",

    // 404
    nf_title:"Sayfa Bulunamadı",
    nf_desc:"Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
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
    s4_title:"Why Us?", s4_desc:"Our goal in every project is clean, balanced and reliable sound.",
    c8_t:"End-to-End Management", c8_d:"We manage the entire process from planning to setup, mix to teardown.",
    c9_t:"Professional Equipment", c9_d:"Allen & Heath, DiGiCo, Yamaha, Meyer Sound and Dante systems.",
    c10_t:"Fast Support", c10_d:"Technical support before and during the event.",
    s5_title:"Get a quote for your project", s5_desc:"Share your event details and we will prepare a custom solution.",
    btn_cta:"Go to Quote Form",

    h_title:"Services",
    h_desc:"Professional audio, lighting and stage rental + operations support.",
    h_c1_t:"Line Array & PA Systems", h_c1_d:"Line Array and Point Source solutions for outdoor and indoor venues.",
    h_c2_t:"Monitor & IEM", h_c2_d:"Stage monitor systems and in-ear monitor solutions.",
    h_c3_t:"Digital Mixers", h_c3_d:"Allen & Heath, Yamaha, DiGiCo, Midas series consoles.",
    h_c4_t:"Lighting Systems", h_c4_d:"Moving Head, Wash, Beam, LED and lighting control consoles.",
    h_c5_t:"Network Audio (Dante)", h_c5_d:"Digital audio network infrastructure and integration.",
    h_c6_t:"Setup & Operations", h_c6_d:"Setup, teardown, technical crew and stage coordination.",
    h_btn:"Get Rental Quote",

    m_title:"Technical Engineering",
    m_desc:"Professional planning, drawing and calculation services for stage and audio systems.",
    m_c1_t:"Stage Plot & Layout", m_c1_d:"Detailed stage layout plans prepared according to artist and organization needs. Entrances/exits, monitors, instruments and technical lines are clearly shown.", m_c1_cta:"→ Get a quote for Stage Plot",
    m_c2_t:"3D Stage Design", m_c2_d:"Custom 3D stage and system visualization for your venue. Visual support so organizers and technical crew speak the same language.", m_c2_cta:"→ Get a quote for 3D design",
    m_c3_t:"SPL Calculation & Analysis", m_c3_d:"Sound pressure level (SPL) calculation and coverage analysis based on venue capacity, audience size and system type.", m_c3_cta:"→ Get a quote for SPL calculation",
    m_c4_t:"Technical Rider Preparation", m_c4_d:"Technical review, adaptation and stage/audio-system fitting of artist riders.", m_c4_cta:"→ Get a quote for rider service",
    m_pack_title:"Engineering + Rental Package",
    m_pack_desc:"Get Stage Plot + SPL calculation + system design + equipment rental + setup/teardown in one package.",
    m_pack_btn:"Get Package Quote",

    g_title:"Gallery", g_desc:"Photos from the field and setups.",
    g_videos_title:"Videos", g_videos_desc:"Live performance and stage recordings.",
    g_alt:"Event Technologies – on-site photo",

    d_title:"Sample Documents",
    d_desc:"Stage Plot, Rider, SPL and 3D design samples. Custom prepared per your needs.",
    d_empty_title:"No documents added yet",
    d_empty_desc:"Upload PDFs to the documents folder",
    d_view:"View / download PDF",

    t_title:"Quote Request",
    t_desc:"We prepare a detailed quote based on your event type.",
    ph_name:"Full Name / Company", ph_phone:"Phone",
    opt_placeholder:"Select Service Type",
    opt_1:"Audio System Rental", opt_2:"Lighting & Truss Rental", opt_3:"Stage Plot / Layout",
    opt_4:"3D Stage Design", opt_5:"SPL Calculation", opt_6:"Technical Rider Preparation",
    opt_7:"FOH Operations", opt_8:"Package (Rental + Engineering)", opt_9:"Other",
    ph_location:"Location / City", ph_people:"Estimated Attendance",
    ph_message:"Event details, special requests...",
    t_submit:"Get Quote",
    t_contact_title:"Contact",

    nf_title:"Page Not Found",
    nf_desc:"The page you are looking for does not exist or may have moved.",
    nf_btn:"Back to Home"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const trBtn = document.getElementById("btn-tr");
  const enBtn = document.getElementById("btn-en");
  if (trBtn) trBtn.classList.toggle("active", lang === "tr");
  if (enBtn) enBtn.classList.toggle("active", lang === "en");

  // Metin içerikleri
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });

  // Placeholder'lar (form alanları)
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) el.setAttribute("placeholder", translations[lang][key]);
  });
}

function initLanguage() {
  const savedLang = localStorage.getItem("lang") || "tr";
  setLanguage(savedLang);
}

// =======================
// MEDIA.JSON'DAN OTOMATİK YÜKLEME
// =======================
async function loadMedia() {
  try {
    const response = await fetch("media.json?t=" + Date.now());
    const data = await response.json();
    const lang = localStorage.getItem("lang") || "tr";
    const altText = (translations[lang] && translations[lang].g_alt) || "Event Technologies";

    // Fotoğraflar
    const gallery = document.getElementById("gallery");
    if (gallery && data.photos) {
      gallery.innerHTML = "";
      data.photos.forEach((src, idx) => {
        const img = document.createElement("img");
        img.src = encodeURI(src);
        img.loading = "lazy";
        img.alt = `${altText} ${idx + 1}`;
        gallery.appendChild(img);
      });
    }

    // Videolar
    const videoContainer = document.getElementById("videos");
    if (videoContainer && data.videos) {
      videoContainer.innerHTML = "";
      data.videos.forEach(src => {
        const player = document.createElement("video");
        player.src = encodeURI(src);
        player.controls = true;
        player.preload = "metadata";
        player.addEventListener("play", () => {
          document.querySelectorAll("video").forEach(v => {
            if (v !== player) v.pause();
          });
        });
        videoContainer.appendChild(player);
      });
    }

    // Dokümanlar
    const documentsList = document.getElementById("documentsList");
    if (documentsList && data.documents && data.documents.length > 0) {
      documentsList.innerHTML = "";
      data.documents.forEach(doc => {
        const card = document.createElement("a");
        card.href = doc.file;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = "doc-card";
        const viewLabel = (translations[lang] && translations[lang].d_view) || "PDF görüntüle / indir";
        card.innerHTML = `
          <i class="fa-solid ${doc.icon || "fa-file-pdf"}"></i>
          <h3>${doc.title}</h3>
          <p>${viewLabel}</p>
        `;
        documentsList.appendChild(card);
      });
    }

    // Hero slider (sadece ana sayfada)
    window.heroPhotos = data.photos || [];
    if (document.querySelector(".hero-bg")) startHeroSlider();

  } catch (err) {
    console.log("media.json henüz yok veya yüklenemedi");
  }
}

// Hero arka plan slider — .hero-bg div'ini hedefler
function startHeroSlider() {
  const heroBg = document.getElementById("heroBg");
  if (!heroBg || !window.heroPhotos || window.heroPhotos.length === 0) return;
  heroBg.style.backgroundImage = `linear-gradient(105deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.35) 100%), url('${encodeURI(window.heroPhotos[0])}')`;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % window.heroPhotos.length;
    heroBg.style.backgroundImage = `linear-gradient(105deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.35) 100%), url('${encodeURI(window.heroPhotos[i])}')`;
  }, 5500);
}

// Lightbox — ok tuşları, klavye, sayaç
(function () {
  let galleryImages = [];
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const overlay = document.createElement("div");
    overlay.id = "lbOverlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.96);display:flex;align-items:center;justify-content:center;z-index:10000;";

    const img = document.createElement("img");
    img.id = "lbImg";
    img.src = galleryImages[currentIndex];
    img.style.cssText = "max-width:88%;max-height:88vh;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6);user-select:none;pointer-events:none;";

    const counter = document.createElement("div");
    counter.id = "lbCounter";
    counter.style.cssText = "position:absolute;top:18px;left:50%;transform:translateX(-50%);color:#fff;font-size:13px;font-family:Inter,sans-serif;background:rgba(0,0,0,.55);padding:5px 16px;border-radius:20px;";
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;

    const btnBase = "position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:20px;width:48px;height:48px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s;";

    const prev = document.createElement("button");
    prev.style.cssText = btnBase + "left:18px;";
    prev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prev.addEventListener("mouseover", () => prev.style.background = "rgba(255,176,0,.35)");
    prev.addEventListener("mouseout",  () => prev.style.background = "rgba(255,255,255,.1)");
    prev.onclick = (e) => { e.stopPropagation(); navigate(-1); };

    const next = document.createElement("button");
    next.style.cssText = btnBase + "right:18px;";
    next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    next.addEventListener("mouseover", () => next.style.background = "rgba(255,176,0,.35)");
    next.addEventListener("mouseout",  () => next.style.background = "rgba(255,255,255,.1)");
    next.onclick = (e) => { e.stopPropagation(); navigate(1); };

    const close = document.createElement("button");
    close.style.cssText = "position:absolute;top:16px;right:18px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:18px;width:40px;height:40px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s;";
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.addEventListener("mouseover", () => close.style.background = "rgba(255,80,80,.35)");
    close.addEventListener("mouseout",  () => close.style.background = "rgba(255,255,255,.1)");
    close.onclick = (e) => { e.stopPropagation(); closeLightbox(); };

    overlay.appendChild(img);
    overlay.appendChild(counter);
    if (galleryImages.length > 1) { overlay.appendChild(prev); overlay.appendChild(next); }
    overlay.appendChild(close);
    overlay.onclick = closeLightbox;

    document.body.appendChild(overlay);
    document.addEventListener("keydown", handleKey);
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
    const img = document.getElementById("lbImg");
    const counter = document.getElementById("lbCounter");
    if (img) img.src = galleryImages[currentIndex];
    if (counter) counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  }

  function closeLightbox() {
    const overlay = document.getElementById("lbOverlay");
    if (overlay) overlay.remove();
    document.removeEventListener("keydown", handleKey);
  }

  function handleKey(e) {
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowRight")  navigate(1);
    if (e.key === "ArrowLeft")   navigate(-1);
  }

  document.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG" || !e.target.closest("#gallery")) return;
    const imgs = Array.from(document.querySelectorAll("#gallery img"));
    galleryImages = imgs.map(i => i.src);
    openLightbox(imgs.indexOf(e.target));
  });
})();

// Mobil Menü — tüm sayfalarda tek kaynak
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("active");
    hamburger.classList.toggle("open", isOpen);
    if (hamburgerIcon) {
      hamburgerIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
  });
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
      if (hamburgerIcon) hamburgerIcon.className = "fa-solid fa-bars";
    }
  });
}

// ================================
// WHATSAPP SABİT BUTON
// ================================
(function () {
  const btn = document.createElement("a");
  btn.href = "https://wa.me/905320683012";
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.className = "wa-float";
  btn.setAttribute("aria-label", "WhatsApp ile iletişime geçin");
  btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  document.body.appendChild(btn);
})();

// ================================
// GOOGLE ANALYTİCS
// G-XXXXXXXXXX yerine kendi GA4 ölçüm ID'nizi yazın
// ================================
const GA_ID = "G-XXXXXXXXXX";
if (GA_ID !== "G-XXXXXXXXXX") {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

// Sayfa yüklenince
initLanguage();
loadMedia();
