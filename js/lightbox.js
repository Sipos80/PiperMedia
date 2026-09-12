/* ==========================================
   PIPER MEDIA - LIGHTBOX LOGIC
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
    modalIframe: document.getElementById('modalIframe')
  });

  /**
   * Megnyitja a videót
   * @param {string} videoId - YouTube videó azonosítója
   */
  const open = (videoId) => {
    const { modal, modalIframe } = getElements();
    if (!modal || !modalIframe) return;

    // Optimalizált YouTube URL paraméterek a maximális letisztultsághoz
    modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&autohide=1&showinfo=0&fs=1`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Fókusz a videóra a billentyűzetes tekeréshez (Bal/Jobb nyíl, Szóköz)
    setTimeout(() => {
      modalIframe.focus();
    }, 100);
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
