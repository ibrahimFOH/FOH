function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
  });
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr) btnTr.classList.toggle('active', lang === 'tr');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(localStorage.getItem('lang') || 'tr');

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const icon = document.getElementById('hamburger-icon');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
      if (icon) { icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-xmark'); }
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark'); }
      });
    });
  }

  // --- Media loading: fetch media.json and populate gallery, videos, documents ---
  const gallery = document.getElementById('gallery');
  const heroBg = document.getElementById('heroBg');
  const videoBox = document.getElementById('videos');
  const docList = document.getElementById('documentsList');

  (async function loadMedia() {
    try {
      const res = await fetch('media.json');
      if (!res.ok) return; // silently exit on failure
      const data = await res.json();

      const photos = Array.isArray(data.photos) ? data.photos : [];
      if (gallery) {
        gallery.innerHTML = '';
        if (!photos.length) {
          gallery.innerHTML = '<p style="color:#666">Henüz fotoğraf eklenmedi.</p>';
        } else {
          photos.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = encodeURI(src);
            img.loading = 'lazy';
            img.alt = 'FOH Engineer – saha fotoğrafı ' + (i + 1);
            gallery.appendChild(img);
          });
        }
      }

      if (heroBg && photos.length) {
        let i = 0;
        const setBg = function(n) {
          heroBg.style.backgroundImage = 'linear-gradient(110deg,rgba(0,0,0,.93),rgba(0,0,0,.5)), url("' + encodeURI(photos[n]) + '")';
        };
        setBg(0);
        setInterval(function() { i = (i + 1) % photos.length; setBg(i); }, 5000);
      }

      const videos = Array.isArray(data.videos) ? data.videos : [];
      if (videoBox) {
        videoBox.innerHTML = '';
        if (videos.length) {
          videos.forEach(src => {
            const v = document.createElement('video');
            v.src = encodeURI(src);
            v.controls = true;
            v.preload = 'metadata';
            videoBox.appendChild(v);
          });
        }
      }

      const docs = Array.isArray(data.documents) ? data.documents : [];
      if (docList) {
        docList.innerHTML = '';
        if (!docs.length) {
          docList.innerHTML = '<div class="doc-card"><i class="fa-solid fa-file-pdf"></i><h3>Henüz doküman eklenmedi</h3><p>PDF documents klasörüne yükleyin</p></div>';
        } else {
          docs.forEach(d => {
            const name = d.title || (d.file ? d.file.split('/').pop().replace(/\.pdf$/i, '') : 'Doküman');
            const a = document.createElement('a');
            a.href = encodeURI(d.file || '');
            a.target = '_blank';
            a.rel = 'noopener';
            a.className = 'doc-card';

            const iconClass = (d.icon ? ('fa-solid ' + d.icon) : 'fa-solid fa-file-pdf');
            a.innerHTML = '<i class="' + iconClass + '"></i><h3>' + name + '</h3><p>PDF görüntüle / indir</p>';
            docList.appendChild(a);
          });
        }
      }

    } catch (e) {
      // silently fail
      return;
    }
  })();

  // --- Offer form handling (leave unchanged) ---
  const form = document.getElementById('offerForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const t = 'Yeni Teklif Talebi%0A%0AAd: ' + this.name.value + '%0ATelefon: ' + this.phone.value + '%0AEtkinlik: ' + this.type.value + '%0ALokasyon: ' + this.location.value + '%0AKişi: ' + t[...]
      window.open('https://wa.me/905320683012?text=' + t, '_blank');
    });
  }
});
