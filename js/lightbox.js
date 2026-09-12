/* ==========================================
   PIPER MEDIA - MINIMAL LIGHTBOX LOGIC
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  if (modal && modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
});

const Lightbox = (() => {
  const getElements = () => ({
    modal: document.getElementById('videoModal'),
    modalIframe: document.getElementById('modalIframe'),
    backdrop: document.querySelector('.modal-backdrop')
  });

  /**
   * Megnyitja a videót
   * @param {string} videoId - YouTube videó azonosítója
   */
  const open = (videoId) => {
    const { modal, modalIframe } = getElements();
    if (!modal || !modalIframe) return;

    // controls=1 -> Vezérlősáv látható (beletekeréshez)
    // controls=0 -> Teljesen tiszta videó vezérlők nélkül
    modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  /**
   * Bezárja a videót
   */
  const close = () => {
    const { modal, modalIframe } = getElements();
    if (!modal || !modalIframe) return;

    modal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
  };

  const init = () => {
    // Bezárás kattintásra a sötét háttéren
    document.addEventListener('click', (e) => {
      if (e.target.matches('.modal-backdrop')) {
        close();
      }
    });

    // Bezárás ESC billentyűre
    document.addEventListener('keydown', (e) => {
      const { modal } = getElements();
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        close();
      }
    });
  };

  init();

  return { open, close };
})();
