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

// Sayfa yüklenince
loadMedia();
