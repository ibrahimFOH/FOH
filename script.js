// =======================
// FOTOĞRAFLAR
// =======================
const photos = [
  "images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
  "images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg",
  "images/gallery/104D23F8-EA6F-40B7-866B-CF689E065E46.jpeg",
  "images/gallery/11AD6679-02D7-4ADC-87AA-92059E510189.jpeg",
  "images/gallery/1BAAC2CA-6D55-4FB6-8459-5E8EAD6D9C8E.jpeg",
  "images/gallery/35E63E2A-949E-4AD5-AE11-E607E868C697.jpeg",
  "images/gallery/3EB8D62A-EB98-4976-950D-E74C17848A2C.jpeg",
  "images/gallery/4AFED6AF-BB13-46FD-8613-6F556058AFE7.jpeg",
  "images/gallery/668E9605-0CDE-435F-A8DF-8B5888BB6C32.jpeg",
  "images/gallery/BFAD4788-CF18-4F44-BAA3-43060965EEEA.jpeg",
  "images/gallery/DE228FEA-36C1-4CCD-9185-0E03014CD491.jpeg",
  "images/gallery/E232024B-1E1C-46CD-983E-D108BDDFE7F1.jpeg",
  "images/gallery/F29D89E6-01E9-4111-BC47-5E0293BF883F.jpeg"
];

const gallery = document.getElementById("gallery");
if (gallery) {
  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = "FOH Engineer - Event";
    gallery.appendChild(img);
  });
}

// =======================
// VİDEOLAR
// =======================
const videos = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4"
];

const videoContainer = document.getElementById("videos");
if (videoContainer) {
  videos.forEach(src => {
    const player = document.createElement("video");
    player.src = src;
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

// =======================
// HERO SLIDER
// =======================
const hero = document.querySelector(".hero");
if (hero && photos.length > 0) {
  let heroIndex = 0;
  setInterval(() => {
    heroIndex = (heroIndex + 1) % photos.length;
    hero.style.setProperty(
      "--hero-bg",
      `url('${photos[heroIndex]}')`
    );
    // fallback için style güncelle
    hero.style.background = `
      linear-gradient(105deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.35) 100%),
      url('${photos[heroIndex]}') center/cover no-repeat
    `;
  }, 5500);
}

// =======================
// LIGHTBOX
// =======================
document.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG" || !e.target.closest("#gallery")) return;

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.96);
    display:flex;align-items:center;justify-content:center;
    z-index:10000;cursor:zoom-out;
  `;

  const image = document.createElement("img");
  image.src = e.target.src;
  image.style.cssText = "max-width:92%;max-height:92%;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6)";

  overlay.appendChild(image);
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
});

// =======================
// FORM → WHATSAPP
// =======================
const form = document.getElementById("offerForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = `Yeni Teklif Talebi

Ad: ${this.name.value}
Telefon: ${this.phone.value}
Etkinlik: ${this.type.value}
Lokasyon: ${this.location.value}
Kişi: ${this.people.value}
Tarih: ${this.date.value}

Detay:
${this.message.value}`;

    window.location.href = `https://wa.me/905320683012?text=${encodeURIComponent(text)}`;
  });
}

// =======================
// SMOOTH SCROLL + MOBİL MENÜ
// =======================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    // mobil menüyü kapat
    document.getElementById("navLinks")?.classList.remove("active");
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
