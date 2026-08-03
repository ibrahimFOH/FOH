const PHONE="905320683012";

/* FOTO */
const photos=[
"resimler/galeri/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"resimler/galeri/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

const gallery=document.getElementById("gallery");

photos.forEach(src=>{
const img=document.createElement("img");
img.src=src;
img.loading="lazy";
gallery.appendChild(img);
});

/* VIDEO */
const videos=[
"videolar/video1.mp4",
"videolar/video2.mp4"
];

const videoBox=document.getElementById("videos");

videos.forEach(src=>{
const v=document.createElement("video");
v.src=src;
v.controls=true;

v.addEventListener("play",()=>{
document.querySelectorAll("video").forEach(x=>{
if(x!==v) x.pause();
});
});

videoBox.appendChild(v);
});

/* SLIDER */
const hero=document.querySelector(".hero");

const heroImages=[
"resimler/galeri/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"resimler/galeri/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

let i=0;

setInterval(()=>{
i=(i+1)%heroImages.length;

hero.style.background=`
linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)),
url('${heroImages[i]}') center/cover
`;

},5000);

/* LIGHTBOX */
document.addEventListener("click",e=>{
if(!e.target.closest(".gallery")) return;

const overlay=document.createElement("div");
overlay.style="position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:9999;";

const img=document.createElement("img");
img.src=e.target.src;
img.style.maxWidth="90%";

overlay.appendChild(img);
overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);
});

/* FORM → WHATSAPP */
document.getElementById("offerForm").addEventListener("submit",function(e){

e.preventDefault();

const text=`
Yeni Teklif

Ad: ${this.name.value}
Tel: ${this.phone.value}
Etkinlik: ${this.type.value}
Lokasyon: ${this.location.value}
Kişi: ${this.people.value}
Tarih: ${this.date.value}

${this.message.value}
`;

window.location.href=`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

});
