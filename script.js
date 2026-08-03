const PHONE="905320683012";

/* GALERİ */
const photos=[
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

const gallery=document.getElementById("gallery");

photos.forEach(src=>{
const img=document.createElement("img");
img.src=src;
img.loading="lazy";
gallery.appendChild(img);
});

/* VİDEO */
const videos=["videos/video1.mp4","videos/video2.mp4"];

const videoBox=document.getElementById("videos");

videos.forEach(src=>{
const v=document.createElement("video");
v.src=src;
v.controls=true;
v.preload="none";

v.addEventListener("play",()=>{
document.querySelectorAll("video").forEach(x=>{
if(x!==v) x.pause();
});
});

videoBox.appendChild(v);
});

/* HERO SLIDER */
const hero=document.querySelector(".hero");

const heroImages=[
"images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
"images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg"
];

let i=0;

setInterval(()=>{
i=(i+1)%heroImages.length;

hero.style.background=`
linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.4)),
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

const name=this.name.value;
const phone=this.phone.value;
const type=this.type.value;
const location=this.location.value;
const people=this.people.value;
const date=this.date.value;
const message=this.message.value;

const text=`Yeni Teklif Talebi

Ad: ${name}
Telefon: ${phone}
Etkinlik: ${type}
Lokasyon: ${location}
Kişi: ${people}
Tarih: ${date}

Detay:
${message}`;

window.location.href=`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

});
