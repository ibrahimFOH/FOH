  // Galeri fotoğrafları
  const photos = [
    "images/gallery/0EAAE007-14C6-468D-80CB-6C5275CB6827.jpeg",
    "images/gallery/1028BA7C-0A7F-49DF-B2DE-896109D700EC.jpeg",
    "images/gallery/11AD6679-02D7-4ADC-87AA-92059E510189.jpeg",
    "images/gallery/35E63E2A-949E-4AD5-AE11-E607E868C697.jpeg",
    "images/gallery/BFAD4788-CF18-4F44-BAA3-43060965EEEA.jpeg",
    "images/gallery/DE228FEA-36C1-4CCD-9185-0E03014CD491.jpeg"
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

  // Videolar
  const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4"
  ];
  const videoContainer = document.getElementById("videos");
  if (videoContainer) {
    videos.forEach(src => {
      const player = document.createElement("video");
      player.src = src;
      player.controls = true;
      player.preload = "metadata";
      videoContainer.appendChild(player);
    });
  }

  // Hero arka plan slider (index)
  const heroBg = document.getElementById("heroBg");
  if (heroBg && photos.length > 0) {
    let heroIndex = 0;
    heroBg.style.backgroundImage = `linear-gradient(110deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.35) 100%), url("${photos[0]}")`;
    
    setInterval(() => {
      heroIndex = (heroIndex + 1) % photos.length;
      heroBg.style.backgroundImage = `linear-gradient(110deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.35) 100%), url("${photos[heroIndex]}")`;
    }, 5000);
  }

  // Teklif formu → WhatsApp
  const form = document.getElementById("offerForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const text = `Yeni Teklif Talebi%0A%0AAd: ${this.name.value}%0ATelefon: ${this.phone.value}%0AEtkinlik: ${this.type.value}%0ALokasyon: ${this.location.value}%0AKişi: ${this.people.value}%0ATarih: ${this.date?.value || '-'}%0AMesaj: ${this.message?.value || '-'}`;
      window.open(`https://wa.me/905320683012?text=${text}`, '_blank');
    });
  }
});
