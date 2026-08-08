
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


// ===== SECURE WEBHOOK (OPTIONAL) =====
async function sendLeadWebhook(data){
  try{
    await fetch("https://hook.make.com/REPLACE_WITH_YOUR_WEBHOOK",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });
  }catch(e){
    console.log("Webhook error", e);
  }
}
