/* ==========================================
   FELUGRÓ MOZI MODAL (LIGHTBOX) LOGIKA
   ========================================== */

// 1. Biztosítjuk, hogy a modal a <body> közvetlen gyermeke legyen (nem szorul be konténerbe)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  if (modal) {
    document.body.appendChild(modal);
  }
});

/**
 * Videó megnyitása a felugró moziablakban
 * @param {string} videoUrl - A videó / YouTube iframe beágyazó URL-je
 * @param {string} title - A videó címe (opcionális)
 */
function openVideoModal(videoUrl, title = "VIDEÓ LEJÁTSZÓ") {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalIframe");
  const titleEl = modal ? modal.querySelector(".player-title") : null;

  if (modal && iframe) {
    // URL beállítása (autostart opcióval, ha YouTube)
    let autoPlayUrl = videoUrl;
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      autoPlayUrl += (videoUrl.includes("?") ? "&" : "?") + "autoplay=1";
    }

    iframe.src = autoPlayUrl;

    if (titleEl) {
      titleEl.textContent = title;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Háttér görgetésének tiltása
  }
}

/**
 * Moziablak bezárása és a videó leállítása
 */
function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalIframe");

  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Görgetés visszaállítása
  }

  if (iframe) {
    // Az iframe kiürítése azonnal leállítja a lejátszott hangot/videót
    iframe.src = "";
  }
}

// Egérkattintás a sötétített háttérre (backdrop) -> bezárás
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal-backdrop")) {
    closeVideoModal();
  }
});

// ESC billentyű megnyomására bezárás
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeVideoModal();
  }
});
