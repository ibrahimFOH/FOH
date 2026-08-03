// =================
// CONFIG
// =================
const PHONE = "905320683012";

// =================
// GALLERY
// =================
const photos = [
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

const gallery = document.getElementById("gallery");

if (gallery) {
  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    gallery.appendChild(img);
  });
}

// =================
// VIDEOS
// =================
const videos = [
"videos/video1.mp4",
"videos/video2.mp4"
];

const videoBox = document.getElementById("videos");

if (videoBox) {
  videos.forEach(src => {
    const v = document.createElement("video");
    v.src = src;
    v.controls = true;

    v.addEventListener("play", () => {
      document.querySelectorAll("video").forEach(x => {
        if (x !== v) x.pause();
      });
    });

    videoBox.appendChild(v);
  });
}

// =================
// LIGHTBOX
// =================
document.addEventListener("click", e => {

  if (e.target.tagName !== "IMG") return;

  const overlay = document.createElement("div");

  overlay.style = `
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.9);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
  `;

  const img = document.createElement("img");
  img.src = e.target.src;
  img.style.maxWidth = "90%";

  overlay.appendChild(img);
  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
});

// =================
// HERO SLIDER FIX
// =================
const heroImages = [
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % heroImages.length;

  document.querySelector(".hero").style.background =
    `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4)),
    url('${heroImages[i]}') center/cover`;
}, 5000);

// =================
// FORM → WHATSAPP (KESİN)
// =================
const form = document.getElementById("offerForm");

if (form) {
  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = form.elements["name"].value;
    const phone = form.elements["phone"].value;
    const type = form.elements["type"].value;
    const people = form.elements["people"].value;
    const date = form.elements["date"].value;
    const message = form.elements["message"].value;

    const text = `Yeni Teklif Talebi

Ad: ${name}
Telefon: ${phone}
Etkinlik: ${type}
Kişi: ${people}
Tarih: ${date}

Detay:
${message}`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

    // %100 çalışan yöntem
    window.location.href = url;
  });
}

console.log("SYSTEM READY");
