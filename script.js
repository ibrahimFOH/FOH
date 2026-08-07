/* ============================================
   STAGEPULSE – script.js
   Temiz, hata toleranslı, üst düzey sürüm
   ============================================ */

const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT'; // ← Formspree’den aldığın https://formspree.io/f/xxxxxx değerini buraya yaz

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('select option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr) btnTr.classList.toggle('active', lang === 'tr');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
}

/* ---------- Cookie / KVKK Consent ---------- */
function initCookieConsent() {
  if (localStorage.getItem('sp_consent') === 'accepted') {
    loadAnalytics();
    return;
  }
  if (localStorage.getItem('sp_consent') === 'rejected') return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Çerez onayı');
  banner.innerHTML = `
    <div class="cookie-inner">
      <p data-i18n="cookie_text">Bu site deneyimi iyileştirmek ve teklif süreçlerini yönetmek için çerezler kullanır. Devam ederek <a href="Kvkk.html" target="_blank" rel="noopener">KVKK Aydınlatma Metni</a>’ni kabul etmiş olursunuz.</p>
      <div class="cookie-actions">
        <button id="cookie-accept" class="btn btn-primary" data-i18n="cookie_accept">Kabul Et</button>
        <button id="cookie-reject" class="btn btn-outline" data-i18n="cookie_reject">Reddet</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  setLanguage(localStorage.getItem('lang') || 'tr');

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('sp_consent', 'accepted');
    banner.remove();
    loadAnalytics();
  });

  document.getElementById('cookie-reject').addEventListener('click', () => {
    localStorage.setItem('sp_consent', 'rejected');
    banner.remove();
  });
}

function loadAnalytics() {
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
}

function trackEvent(name, params = {}) {
  if (typeof gtag === 'function' && localStorage.getItem('sp_consent') === 'accepted') {
    gtag('event', name, params);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(localStorage.getItem('lang') || 'tr');
  initCookieConsent();

  // ===== Hamburger =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const icon = document.getElementById('hamburger-icon');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (icon) {
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-xmark', isOpen);
      }
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // ===== Aktif menü =====
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const clean = href.replace('./', '').replace(/^\//, '') || 'index.html';
    if (clean === currentPath || (currentPath === '' && clean === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ===== Lightbox =====
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');

  function openLightbox(src) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    if (lbImg) lbImg.src = '';
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ===== Media Loader =====
  const gallery = document.getElementById('gallery');
  const heroBg = document.getElementById('heroBg');
  const videoBox = document.getElementById('videos');
  const docList = document.getElementById('documentsList');

  const galleryAlts = [
    'Sahne line array kurulumu',
    'FOH konsol ve miks noktası',
    'Açık alan ses sistemi',
    'Truss ve ışık kurulumu',
    'Monitör ve sahne düzeni',
    'Canlı etkinlik ses operasyonu',
    'Sahne ve PA sistemi kurulumu',
    'FOH mühendisliği saha çalışması'
  ];

  (async function loadMedia() {
    try {
      const res = await fetch('media.json');
      if (!res.ok) return;
      const data = await res.json();

      const photos = Array.isArray(data.photos) ? data.photos : [];

      if (gallery) {
        gallery.innerHTML = '';
        if (!photos.length) {
          gallery.innerHTML = '<p style="color:#666;text-align:center;padding:40px 0">Henüz fotoğraf eklenmedi.</p>';
        } else {
          photos.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = encodeURI(src);
            img.loading = 'lazy';
            img.alt = galleryAlts[i % galleryAlts.length];
            img.addEventListener('click', () => openLightbox(encodeURI(src)));
            gallery.appendChild(img);
          });
        }
      }

      if (heroBg && photos.length) {
        let i = 0;
        const setBg = n => {
          heroBg.style.backgroundImage =
            'linear-gradient(110deg,rgba(0,0,0,.93),rgba(0,0,0,.5)), url("' +
            encodeURI(photos[n]) +
            '")';
        };
        setBg(0);
        setInterval(() => {
          i = (i + 1) % photos.length;
          setBg(i);
        }, 5500);
      }

      const videos = Array.isArray(data.videos) ? data.videos : [];
      if (videoBox) {
        videoBox.innerHTML = '';
        if (!videos.length) {
          const section = videoBox.closest('section') || videoBox.closest('.section');
          if (section) section.style.display = 'none';
        } else {
          videos.forEach(src => {
            const v = document.createElement('video');
            v.src = encodeURI(src);
            v.controls = true;
            v.preload = 'metadata';
            v.playsInline = true;
            videoBox.appendChild(v);
          });
        }
      }

      const docs = Array.isArray(data.documents) ? data.documents : [];
      if (docList) {
        docList.innerHTML = '';
        if (!docs.length) {
          docList.innerHTML =
            '<div class="doc-card"><i class="fa-solid fa-file-pdf"></i><h3 data-i18n="d_empty_title">Henüz doküman eklenmedi</h3><p data-i18n="d_empty_desc">PDF documents klasörüne yükleyin</p></div>';
          setLanguage(localStorage.getItem('lang') || 'tr');
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
              '<i class="' + iconClass + '"></i><h3>' + name + '</h3><p data-i18n="d_view">PDF görüntüle / indir</p>';
            docList.appendChild(a);
          });
          setLanguage(localStorage.getItem('lang') || 'tr');
        }
      }
    } catch (e) {
      // sessiz
    }
  })();

  // ===== Form (Formspree + WhatsApp) =====
  const form = document.getElementById('offerForm');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      const lang = localStorage.getItem('lang') || 'tr';
      const formData = new FormData(form);

      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT !== 'YOUR_FORMSPREE_ENDPOINT') {
        try {
          await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
          });
        } catch (err) {
          console.warn('Formspree error', err);
        }
      }

      const t =
        'Yeni Teklif Talebi%0A%0A' +
        'Ad: ' + encodeURIComponent(this.name.value) +
        '%0ATelefon: ' + encodeURIComponent(this.phone.value) +
        '%0AHizmet: ' + encodeURIComponent(this.type.value) +
        '%0ALokasyon: ' + encodeURIComponent(this.location.value || '-') +
        '%0AKişi: ' + encodeURIComponent(this.people.value || '-') +
        '%0ATarih: ' + encodeURIComponent(this.date && this.date.value ? this.date.value : '-') +
        '%0AMesaj: ' + encodeURIComponent(this.message && this.message.value ? this.message.value : '-');

      window.open('https://wa.me/905320683012?text=' + t, '_blank');

      let msg = document.getElementById('formSuccess');
      if (!msg) {
        msg = document.createElement('div');
        msg.id = 'formSuccess';
        msg.className = 'form-success';
        form.appendChild(msg);
      }
      msg.textContent =
        (translations[lang] && translations[lang].form_success) ||
        'Talebiniz alındı. Teşekkürler!';
      msg.classList.add('show');

      trackEvent('generate_lead', {
        event_category: 'form',
        event_label: this.type.value || 'teklif'
      });

      form.reset();

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      }, 2500);
    });
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    a.addEventListener('click', () => {
      trackEvent('contact', { method: 'whatsapp' });
    });
  });
});
