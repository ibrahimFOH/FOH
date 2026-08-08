
// LOAD PRICING FROM ADMIN
const pricing = JSON.parse(localStorage.getItem("pricing") || "{}");

const PRICE_PEOPLE = pricing.people || 500;
const PRICE_LINEARRAY = pricing.linearray || PRICE_LINEARRAY;
const PRICE_BASIC = pricing.basic || PRICE_BASIC;
const PRICE_LIGHTS = pricing.lights || PRICE_LIGHTS;
const PRICE_STAGE = pricing.stage || PRICE_STAGE;
const MIN_PRICE = pricing.min || PRICE_LINEARRAY;
/* Stagepulse – basit offline cache */
const CACHE = 'stagepulse-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/i18n.js',
  '/favicon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/')))
  );
});


// ===== AUTO PRICE + PDF SYSTEM =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("offerForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const kvkk = form.querySelector('input[name="kvkk"]');
    if (kvkk && !kvkk.checked) {
      alert("KVKK onayı zorunludur.");
      return;
    }

    // SIMPLE PRICING MODEL
    let price = 0;

    const people = form.querySelector('[name="people"]');
    if (people) price += Number(people.value || 0) * PRICE_PEOPLE;

    const system = form.querySelector('[name="system"]');
    if (system) {
      if (system.value === "linearray") price += PRICE_LINEARRAY;
      if (system.value === "basic") price += PRICE_BASIC;
    }

    const lights = form.querySelector('[name="lights"]');
    if (lights && lights.checked) price += PRICE_LIGHTS;

    const stage = form.querySelector('[name="stage"]');
    if (stage && stage.checked) price += PRICE_STAGE;

    // PDF GENERATION
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("StagePulse Teklif", 20, 20);

    doc.setFontSize(12);
    doc.text("Tahmini Fiyat: " + price + " TL", 20, 40);
    doc.text("Tarih: " + new Date().toLocaleDateString(), 20, 50);

    
if(price < MIN_PRICE){
  alert("Minimum teklif tutarı: " + MIN_PRICE + " TL");
  return;
}
doc.save("teklif.pdf");


    // WhatsApp yönlendirme
    const phone = "90PRICE_BASIC000000";
    const text = encodeURIComponent("Tahmini teklif: " + price + " TL");
    window.open("https://wa.me/" + phone + "?text=" + text, "_blank");
  });
});


// ===== SUPABASE CONFIG =====
// BURAYA KENDİ KEYLERİNİ GİR
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLIC_ANON_KEY";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== FORM SUBMIT FULL SYSTEM =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("offerForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const kvkk = form.querySelector('input[name="kvkk"]');
    if (kvkk && !kvkk.checked) {
      alert("KVKK onayı zorunludur.");
      return;
    }

    const name = form.querySelector('[name="name"]')?.value || "";
    const phone = form.querySelector('[name="phone"]')?.value || "";

    const pricing = JSON.parse(localStorage.getItem("pricing") || "{}");

    const PRICE_PEOPLE = pricing.people || 500;
    const PRICE_LINEARRAY = pricing.linearray || 15000;
    const PRICE_BASIC = pricing.basic || 5000;
    const PRICE_LIGHTS = pricing.lights || 7000;
    const PRICE_STAGE = pricing.stage || 10000;
    const MIN_PRICE = pricing.min || 15000;

    let price = 0;

    const people = form.querySelector('[name="people"]');
    if (people) price += Number(people.value || 0) * PRICE_PEOPLE;

    const system = form.querySelector('[name="system"]');
    if (system) {
      if (system.value === "linearray") price += PRICE_LINEARRAY;
      if (system.value === "basic") price += PRICE_BASIC;
    }

    const lights = form.querySelector('[name="lights"]');
    if (lights && lights.checked) price += PRICE_LIGHTS;

    const stage = form.querySelector('[name="stage"]');
    if (stage && stage.checked) price += PRICE_STAGE;

    if (price < MIN_PRICE) {
      alert("Minimum teklif: " + MIN_PRICE + " TL");
      return;
    }

    // ===== SAVE TO DATABASE =====
    try {
      await supabaseClient.from("leads").insert([
        { name: name, phone: phone, price: price }
      ]);
    } catch (err) {
      console.error("DB error:", err);
    }

    // ===== PDF =====
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("StagePulse Teklif", 20, 20);
    doc.text("Fiyat: " + price + " TL", 20, 40);
    doc.save("teklif.pdf");

    // ===== WHATSAPP =====
    const wa = "905320683012";
    const text = encodeURIComponent(
      "Merhaba, teklif aldım. Fiyat: " + price + " TL\nİsim: " + name + "\nTel: " + phone
    );
    window.open("https://wa.me/" + wa + "?text=" + text, "_blank");
  });
});


// ===== UX + VALIDATION + PERFORMANCE =====

// debounce helper
function debounce(fn, delay){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t = setTimeout(()=>fn(...args), delay);
  }
}

// phone validation
function isValidPhone(phone){
  return /^\d{10,15}$/.test(phone.replace(/\D/g, ''));
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("offerForm");
  if (!form) return;

  const phoneInput = form.querySelector('[name="phone"]');

  if (phoneInput){
    phoneInput.addEventListener("input", debounce(()=>{
      if (!isValidPhone(phoneInput.value)){
        phoneInput.style.border = "2px solid red";
      } else {
        phoneInput.style.border = "2px solid green";
      }
    }, 300));
  }

  form.addEventListener("submit", function(){
    const btn = form.querySelector("button[type='submit']");
    if(btn){
      btn.disabled = true;
      btn.innerText = "Hesaplanıyor...";
    }
  });
});


// ===== FORCE HAMBURGER FIX =====
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
