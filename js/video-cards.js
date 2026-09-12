/* ==========================================
   PIPER MEDIA - VIDEO CARDS HANDLER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach((card) => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      const videoTitle = card.getAttribute('data-title') || 'PIPER MEDIA CINEMATIC PLAYER';

      if (videoId && typeof Lightbox !== 'undefined') {
        Lightbox.open(videoId, videoTitle);
      }
    });
  });
});
