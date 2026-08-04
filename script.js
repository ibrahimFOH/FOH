// =======================
// MEDIA.JSON'DAN OTOMATİK YÜKLEME
// =======================
async function loadMedia() {
  try {
    const response = await fetch("media.json?t=" + Date.now());
    const data = await response.json();

    // Fotoğraflar
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

    // Videolar
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

    // Dokümanlar
    const documentsList = document.getElementById("documentsList");
    if (documentsList && data.documents && data.documents.length > 0) {
      documentsList.innerHTML = "";
      data.documents.forEach(doc => {
        const card = document.createElement("a");
        card.href = doc.file;
        card.target = "_blank";
        card.className = "doc-card";
        card.innerHTML = `
          <i class="fa-solid ${doc.icon || "fa-file-pdf"}"></i>
          <h3>${doc.title}</h3>
          <p>PDF görüntüle / indir</p>
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
  let i = 0;
  setInterval(() => {
    i = (i + 1) % window.heroPhotos.length;
    heroBg.style.backgroundImage = `linear-gradient(105deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.35) 100%), url('${window.heroPhotos[i]}')`;
  }, 5500);
}

// Lightbox
document.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG" || !e.target.closest("#gallery")) return;
  const overlay = document.createElement("div");
  overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,.96);display:flex;align-items:center;justify-content:center;z-index:10000;cursor:zoom-out;`;
  const image = document.createElement("img");
  image.src = e.target.src;
  image.style.cssText = "max-width:92%;max-height:92%;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6)";
  overlay.appendChild(image);
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
});

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

// Sayfa yüklenince
loadMedia();
