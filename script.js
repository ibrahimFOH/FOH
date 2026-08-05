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

  const REPO = 'ibrahimFOH/FOH';
  async function listFiles(folder, ext) {
    try {
      const res = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + folder + '?ref=main');
      if (!res.ok) return [];
      const files = await res.json();
      if (!Array.isArray(files)) return [];
      return files.filter(f => f.type === 'file' && ext.test(f.name)).map(f => f.path).sort();
    } catch (e) { return []; }
  }

  const gallery = document.getElementById('gallery');
  const heroBg = document.getElementById('heroBg');
  listFiles('images/gallery', /\.(jpe?g|png|webp|gif)$/i).then(photos => {
    if (gallery) {
      gallery.innerHTML = '';
      if (!photos.length) gallery.innerHTML = '<p style="color:#666">Henüz fotoğraf eklenmedi.</p>';
      else photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src; img.loading = 'lazy'; img.alt = 'FOH Engineer';
        gallery.appendChild(img);
      });
    }
    if (heroBg && photos.length) {
      let i = 0;
      const set = function(n) {
        heroBg.style.backgroundImage = 'linear-gradient(110deg,rgba(0,0,0,.93),rgba(0,0,0,.5)), url("' + photos[n] + '")';
      };
      set(0);
      setInterval(function() { i = (i + 1) % photos.length; set(i); }, 5000);
    }
  });

  const videoBox = document.getElementById('videos');
  if (videoBox) {
    listFiles('videos', /\.(mp4|webm|mov)$/i).then(videos => {
      videoBox.innerHTML = '';
      videos.forEach(src => {
        const v = document.createElement('video');
        v.src = src; v.controls = true; v.preload = 'metadata';
        videoBox.appendChild(v);
      });
    });
  }

  const docList = document.getElementById('documentsList');
  if (docList) {
    listFiles('documents', /\.pdf$/i).then(docs => {
      docList.innerHTML = '';
      if (!docs.length) {
        docList.innerHTML = '<div class="doc-card"><i class="fa-solid fa-file-pdf"></i><h3>Henüz doküman eklenmedi</h3><p>PDF documents klasörüne yükleyin</p></div>';
        return;
      }
      docs.forEach(path => {
        const name = path.split('/').pop().replace(/\.pdf$/i, '');
        const a = document.createElement('a');
        a.href = encodeURI(path); a.target = '_blank'; a.rel = 'noopener'; a.className = 'doc-card';
        a.innerHTML = '<i class="fa-solid fa-file-pdf"></i><h3>' + name + '</h3><p>PDF görüntüle / indir</p>';
        docList.appendChild(a);
      });
    });
  }

  const form = document.getElementById('offerForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const t = 'Yeni Teklif Talebi%0A%0AAd: ' + this.name.value + '%0ATelefon: ' + this.phone.value + '%0AEtkinlik: ' + this.type.value + '%0ALokasyon: ' + this.location.value + '%0AKişi: ' + this.people.value + '%0ATarih: ' + (this.date && this.date.value ? this.date.value : '-') + '%0AMesaj: ' + (this.message && this.message.value ? this.message.value : '-');
      window.open('https://wa.me/905320683012?text=' + t, '_blank');
    });
  }
});
