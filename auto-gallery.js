
// AUTO GALLERY SYSTEM
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("autoGallery");
  if (!container) return;

  try {
    const res = await fetch("media.json");
    const files = await res.json();

    files.forEach(file => {
      let el;
      if (file.type === "image") {
        el = document.createElement("img");
        el.src = file.src;
        el.loading = "lazy";
      } else if (file.type === "video") {
        el = document.createElement("video");
        el.src = file.src;
        el.controls = true;
      }
      if (el) {
        el.style.width = "100%";
        el.style.marginBottom = "10px";
        container.appendChild(el);
      }
    });
  } catch(e){
    console.log("media load error", e);
  }
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
