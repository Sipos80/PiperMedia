/* ==========================================
   PIPER MEDIA - LIGHTBOX MODAL LOGIC
   ========================================== */

// Garantáljuk, hogy a modal a body közvetlen gyermeke legyen
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
    modalTitle: document.getElementById('modalTitle'),
    closeBtn: document.querySelector('.modal-close'),
    backdrop: document.querySelector('.modal-backdrop')
  });

  /**
   * Megnyitja a modalt a megadott YouTube videó ID-val és címmel.
   * @param {string} videoId - YouTube videó azonosítója
   * @param {string} title - Megjelenítendő cím
   */
  const open = (videoId, title) => {
    const { modal, modalIframe, modalTitle } = getElements();
    if (!modal || !modalIframe) return;

    // Az URL kiegészítve a controls=0 paraméterrel a kezelőszervek elrejtéséhez
    modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1`;

    if (modalTitle && title) {
      modalTitle.textContent = title;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  /**
   * Bezárja a modalt és leállítja a videó lejátszását.
   */
  const close = () => {
    const { modal, modalIframe } = getElements();
    if (!modal || !modalIframe) return;

    modal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
  };

  const init = () => {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.modal-close') || e.target.matches('.modal-backdrop')) {
        close();
      }
    });

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
