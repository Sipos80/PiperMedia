document.addEventListener('DOMContentLoaded', () => {
  console.log("Script betöltve, inicializálás...");

  const modal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.querySelector('.modal-close');
  const backdrop = document.querySelector('.modal-backdrop');
  const videoCards = document.querySelectorAll('.video-card');

  if (!modal || !modalIframe) {
    console.error("Hiba: A #videoModal vagy a #modalIframe nem található a HTML-ben!");
    return;
  }

  videoCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log(`Kártyára kattintva: ${index + 1}`);

      const videoId = card.getAttribute('data-video-id');
      const title = card.getAttribute('data-title');

      if (videoId) {
        // YouTube embed URL automatikus lejátszással
        modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        
        if (title && modalTitle) {
          modalTitle.textContent = title;
        }

        modal.classList.add('active');
        console.log("Modal aktiválva!");
      } else {
        console.error("Hiba: Hiányzik a data-video-id attribútum a kártyáról!");
      }
    });
  });

  function closeModal() {
    console.log("Modal bezárása...");
    modal.classList.remove('active');
    modalIframe.src = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
