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
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Lightbox
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<button class="lightbox-close" aria-label="Kapat">&times;</button><img src="" alt="">';
    document.body.appendChild(lightbox);
  }
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lightbox-close');
  function openLightbox(src) {
    lbImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  const gallery = document.getElementById('gallery');
  const heroBg = document.getElementById('heroBg');
  const videoBox = document.getElementById('videos');
  const docList = document.getElementById('documentsList');

  (async function loadMedia() {
    try {
      const res = await fetch('media.json');
      if (!res.ok) return;
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
            img.addEventListener('click', () => openLightbox(encodeURI(src)));
            gallery.appendChild(img);
          });
        }
      }

      if (heroBg && photos.length) {
        let i = 0;
        const setBg = function (n) {
          heroBg.style.backgroundImage =
            'linear-gradient(110deg,rgba(0,0,0,.93),rgba(0,0,0,.5)), url("' +
            encodeURI(photos[n]) +
            '")';
        };
        setBg(0);
        setInterval(function () {
          i = (i + 1) % photos.length;
          setBg(i);
        }, 5000);
      }

      const videos = Array.isArray(data.videos) ? data.videos : [];
      if (videoBox) {
        videoBox.innerHTML = '';
        if (!videos.length) {
          const section = videoBox.closest('section') || videoBox.closest('.videos-section');
          if (section) section.classList.add('hidden');
        } else {
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
          docList.innerHTML =
            '<div class="doc-card"><i class="fa-solid fa-file-pdf"></i><h3>Henüz doküman eklenmedi</h3><p>PDF documents klasörüne yükleyin</p></div>';
        } else {
          docs.forEach(d => {
            const name =
              d.title ||
              (d.file ? d.file.split('/').pop().replace(/\.pdf$/i, '') : 'Doküman');
            const a = document.createElement('a');
            a.href = encodeURI(d.file || '');
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'doc-card';
            const iconClass = d.icon ? 'fa-solid ' + d.icon : 'fa-solid fa-file-pdf';
            a.innerHTML =
              '<i class="' +
              iconClass +
              '"></i><h3>' +
              name +
              '</h3><p>PDF görüntüle / indir</p>';
            docList.appendChild(a);
          });
        }
      }
    } catch (e) {
      return;
    }
  })();

  const form = document.getElementById('offerForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const t =
        'Yeni Teklif Talebi%0A%0AAd: ' +
        this.name.value +
        '%0ATelefon: ' +
        this.phone.value +
        '%0AEtkinlik: ' +
        this.type.value +
        '%0ALokasyon: ' +
        this.location.value +
        '%0AKişi: ' +
        this.people.value +
        '%0ATarih: ' +
        (this.date && this.date.value ? this.date.value : '-') +
        '%0AMesaj: ' +
        (this.message && this.message.value ? this.message.value : '-');
      window.open('https://wa.me/905320683012?text=' + t, '_blank');
      let msg = document.getElementById('formSuccess');
      if (!msg) {
        msg = document.createElement('div');
        msg.id = 'formSuccess';
        msg.className = 'form-success';
        msg.setAttribute('data-i18n', 'form_success');
        msg.textContent = 'Talebiniz WhatsApp üzerinden yönlendirildi. Teşekkürler!';
        form.appendChild(msg);
      }
      msg.classList.add('show');
    });
  }
});
