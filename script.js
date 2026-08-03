// =======================
// FOTOĞRAFLAR (MANUEL AMA ESNEK)
// =======================

const photos = [
"resimler/galeri/kskzpxoxkdkodld.jpg",
"resimler/galeri/123454849939229.jpg",
"resimler/galeri/asdasdadasd.jpeg"
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

// =======================
// VİDEOLAR
// =======================

const videos = [
"videolar/video1.mp4",
"videolar/randomvideo.mp4"
];

const videoContainer = document.getElementById("videos");

if (videoContainer) {

videos.forEach(src => {

const player = document.createElement("video");

player.src = src;
player.controls = true;
player.preload = "metadata";

// aynı anda tek video oynasın
player.addEventListener("play", () => {
document.querySelectorAll("video").forEach(v => {
if (v !== player) v.pause();
});
});

videoContainer.appendChild(player);

});

}

// =======================
// HERO SLIDER (FOTO ARRAY'DEN)
// =======================

const hero = document.querySelector(".hero");

if (hero && photos.length > 0) {

let heroIndex = 0;

setInterval(() => {

heroIndex++;

if (heroIndex >= photos.length) {
heroIndex = 0;
}

hero.style.background = `
linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)),
url('${photos[heroIndex]}') center/cover no-repeat
`;

}, 5000);

}

// =======================
// LIGHTBOX (GALERİ)
// =======================

document.addEventListener("click", (e) => {

if (e.target.tagName !== "IMG") return;

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "rgba(0,0,0,.95)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "9999";

const image = document.createElement("img");

image.src = e.target.src;
image.style.maxWidth = "95%";
image.style.maxHeight = "95%";
image.style.borderRadius = "12px";

overlay.appendChild(image);

overlay.onclick = () => overlay.remove();

document.body.appendChild(overlay);

});

// =======================
// TEKLİF FORM → WHATSAPP
// =======================

const form = document.getElementById("offerForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const text = `
Yeni Teklif Talebi

Ad: ${this.name.value}
Telefon: ${this.phone.value}
Etkinlik: ${this.type.value}
Lokasyon: ${this.location.value}
Kişi: ${this.people.value}
Tarih: ${this.date.value}

Detay:
${this.message.value}
`;

window.location.href =
`https://wa.me/905320683012?text=${encodeURIComponent(text)}`;

});

}
