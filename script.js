// ======================
// CONFIG
// ======================

const CONFIG = {
  whatsapp: "905320683012",
  heroInterval: 5000
};

// ======================
// GALLERY
// ======================

const photos = [
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg",
"images/gallery/104D23F8-EA6F-40B7-866B-CF689E065E46.jpeg",
"images/gallery/11AD6679-02D7-4ADC-87AA-92059E510189.jpeg"
];

const gallery = document.getElementById("gallery");

if (gallery) {
  const fragment = document.createDocumentFragment();

  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = "FOH Event";
    fragment.appendChild(img);
  });

  gallery.appendChild(fragment);
}

// ======================
// VIDEOS (SMART PLAYER)
// ======================

const videos = [
"videos/video1.mp4",
"videos/video2.mp4"
];

const videoContainer = document.getElementById("videos");

if (videoContainer) {

  videos.forEach(src => {

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.preload = "metadata";

    // aynı anda tek video oynasın
    video.addEventListener("play", () => {
      document.querySelectorAll("video").forEach(v => {
        if (v !== video) v.pause();
      });
    });

    videoContainer.appendChild(video);
  });
}

// ======================
// HERO SLIDER (FIXED)
// ======================

const heroImages = [
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

const hero = document.querySelector(".hero");

if (hero) {

  let index = 0;

  const changeHero = () => {
    hero.style.background = `
      linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.4)),
      url('${heroImages[index]}') center/cover no-repeat
    `;
  };

  changeHero();

  setInterval(() => {
    index = (index + 1) % heroImages.length;
    changeHero();
  }, CONFIG.heroInterval);
}

// ======================
// LIGHTBOX (UPGRADED)
// ======================

document.addEventListener("click", e => {

  if (e.target.tagName !== "IMG") return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";

  overlay.innerHTML = `
    <span class="close">&times;</span>
    <img src="${e.target.src}">
  `;

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99999"
  });

  const img = overlay.querySelector("img");
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
});

// ======================
// FORM → WHATSAPP (CRITICAL)
// ======================

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const phone = form.querySelector("input[type='tel']").value;
    const type = form.querySelector("select").value;
    const people = form.querySelector("input[type='number']").value;
    const date = form.querySelector("input[type='date']").value;
    const message = form.querySelector("textarea").value;

    const text = `
Yeni Teklif Talebi

Ad: ${name}
Telefon: ${phone}
Etkinlik: ${type}
Kişi: ${people}
Tarih: ${date}

Detay:
${message}
`;

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });

}

// ======================
// SCROLL ANIMATION (PREMIUM)
// ======================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .section-title, .gallery img").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = ".6s";
  observer.observe(el);
});

// ======================
// PERFORMANCE: LAZY BG
// ======================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ======================
// DEBUG LOG
// ======================

console.log("FOH SYSTEM READY");
