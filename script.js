document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. FELUGRÓ MOZI MODAL (LIGHTBOX) KEZELÉSE
     ========================================== */
  const modal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.querySelector('.modal-close');
  const backdrop = document.querySelector('.modal-backdrop');
  const videoCards = document.querySelectorAll('.video-card');

  // Videó megnyitása kattintásra
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      const title = card.getAttribute('data-title');

      if (videoId && modal && modalIframe) {
        modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1`;
        if (title && modalTitle) {
          modalTitle.textContent = title;
        }
        modal.classList.add('active');
      }
    });
  });

  // Modal bezárása és a videó leállítása
  function closeModal() {
    if (modal && modalIframe) {
      modal.classList.remove('active');
      modalIframe.src = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // ESC billentyűre bezárás
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });


  /* ==========================================
     2. FINOM GÖRDÜLÉS (SMOOTH SCROLL) A MENÜHÖZ
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Üres vagy csak "#" hivatkozás kiszűrése
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
