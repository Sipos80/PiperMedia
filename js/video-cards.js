/* ==========================================
   VIDEÓ KÁRTYÁK ESEMÉNYKEZELŐI
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Megkeressük az összes videókártyát
  const cards = document.querySelectorAll(".video-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Kiolvassuk a kártyához rendelt videó URL-t és címet a data-attribútumokból
      const videoUrl = this.getAttribute("data-video-url");
      const videoTitle = this.getAttribute("data-title") || "VIDEÓ LEJÁTSZÓ";

      if (videoUrl) {
        openVideoModal(videoUrl, videoTitle);
      }
    });
  });
});
