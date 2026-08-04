// =======================
// MEDIA.JSON'DAN OTOMATİK YÜKLEME
// =======================

async function loadMedia() {
  try {
    const response = await fetch("media.json?t=" + Date.now()); // cache kırmak için
    const data = await response.json();

    // ----- FOTOĞRAFLAR -----
    const gallery = document.getElementById("gallery");
    if (gallery && data.photos) {
      gallery.innerHTML = "";
      data.photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.alt = "Event Technologies";
        gallery.appendChild(img);
      });
    }

    // ----- VİDEOLAR -----
    const videoContainer = document.getElementById("videos");
    if (videoContainer && data.videos) {
      videoContainer.innerHTML = "";
      data.videos.forEach(src => {
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

    // ----- DOKÜMANLAR (PDF) -----
    const documentsList = document.getElementById("documentsList");
    if (documentsList && data.documents && data.documents.length > 0) {
      documentsList.innerHTML = "";
      data.documents.forEach(doc => {
        const card = document.createElement("a");
        card.href = doc.file;
        card.target = "_blank";
        card.className = "doc-card";
        card.style.textDecoration = "none";
        card.style.color = "inherit";
        card.innerHTML = `
          <i class="fa-solid ${doc.icon || "fa-file-pdf"}"></i>
          <h3>${doc.title}</h3>
          <p>PDF görüntüle / indir</p>
        `;
        documentsList.appendChild(card);
      });
    }

    // Hero slider için fotoğrafları kaydet
    window.heroPhotos = data.photos || [];
    startHeroSlider();

  } catch (err) {
    console.error("media.json yüklenemedi:", err);
  }
}

// =======================
// HERO SLIDER
// =======================
function startHeroSlider() {
  const hero = document.querySelector(".hero");
  if (!hero || !window.heroPhotos || window.heroPhotos.length === 0) return;

  let heroIndex = 0;
  setInterval(() => {
    heroIndex = (heroIndex + 1) % window.heroPhotos.length;
    hero.style.background = `
      linear-gradient(105deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.35) 100%),
      url('${window.heroPhotos[heroIndex]}') center/cover no-repeat
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

Ad / Firma: ${this.name.value}
Telefon: ${this.phone.value}
Hizmet: ${this.service.value}
Lokasyon: ${this.location.value}
Tarih: ${this.date.value}
Katılımcı: ${this.people.value}

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
    const nav = document.getElementById("navLinks");
    if (nav) nav.classList.remove("active");
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
}

// Sayfa yüklenince medyayı çek
loadMedia();
