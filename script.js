// FOTOĞRAFLAR

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

photos.forEach(photo => {

const img = document.createElement("img");

img.src = photo;

img.loading = "lazy";

img.alt = "İbrahim Kavasoğlu FOH";

gallery.appendChild(img);

});

}



// VİDEOLAR

const videos = [

"videos/video1.mp4",
"videos/video2.mp4",
"videos/video3.mp4"

];

const videoContainer = document.getElementById("videos");

if (videoContainer) {

videos.forEach(video => {

const player = document.createElement("video");

player.src = video;

player.controls = true;

player.preload = "metadata";

videoContainer.appendChild(player);

});

}
