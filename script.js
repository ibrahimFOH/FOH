// =======================
// AUTO MEDIA SYSTEM (JSON BASED)
// =======================

const gallery = document.getElementById("gallery");
const videoBox = document.getElementById("videos");

// JSON ÇEK
fetch("media.json")
.then(res => res.json())
.then(data => {

    // FOTOĞRAFLAR
    data.photos.forEach(src => {

        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";

        gallery.appendChild(img);

    });

    // VİDEOLAR
    data.videos.forEach(src => {

        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.preload = "metadata";

        videoBox.appendChild(video);

    });

});

// =======================
// HERO SLIDER
// =======================

const hero = document.querySelector(".hero");

fetch("media.json")
.then(res => res.json())
.then(data => {

    let i = 0;

    setInterval(() => {

        i++;
        if (i >= data.photos.length) i = 0;

        hero.style.background = `
        linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)),
        url('${data.photos[i]}') center/cover
        `;

    }, 5000);

});

// =======================
// LIGHTBOX
// =======================

document.addEventListener("click", (e) => {

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

    const image = document.createElement("img");

    image.src = e.target.src;
    image.style.maxWidth = "90%";

    overlay.appendChild(image);

    overlay.onclick = () => overlay.remove();

    document.body.appendChild(overlay);

});

// =======================
// FORM → WHATSAPP
// =======================

const form = document.getElementById("offerForm");

if (form) {
form.addEventListener("submit", function(e){

    e.preventDefault();

    const text = `
Yeni Teklif

Ad: ${this.name.value}
Telefon: ${this.phone.value}
Etkinlik: ${this.type.value}
Lokasyon: ${this.location.value}
Kişi: ${this.people.value}
Tarih: ${this.date.value}

${this.message.value}
    `;

    window.location.href =
    `https://wa.me/905320683012?text=${encodeURIComponent(text)}`;

});
}
