/* ==========================================
   FELUGRÓ MODAL (LIGHTBOX) KERET ÉS MŰKÖDÉS
   ========================================== */

/* Alaphelyzetben rejtett modal */
.video-modal {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 99999 !important; /* Biztosan minden felett legyen */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  opacity: 0 !important;
  pointer-events: none !important;
  transition: opacity 0.3s ease !important;
}

/* Amikor a JS hozzáadja az active osztályt */
.video-modal.active {
  opacity: 1 !important;
  pointer-events: auto !important;
}

/* Sötét háttér maszk */
.modal-backdrop {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.85) !important;
  backdrop-filter: blur(8px) !important;
}

/* A felugró ablak konténere */
.modal-content {
  position: relative !important;
  width: 90% !important;
  max-width: 900px !important;
  background: #111 !important;
  border: 1px solid rgba(0, 242, 254, 0.3) !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  z-index: 2 !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.2) !important;
}

/* Bezáró gomb (X) */
.modal-close {
  position: absolute !important;
  top: 10px !important;
  right: 15px !important;
  background: transparent !important;
  border: none !important;
  color: #fff !important;
  font-size: 28px !important;
  cursor: pointer !important;
  z-index: 10 !important;
  line-height: 1 !important;
}

.modal-close:hover {
  color: #00f2fe !important;
}

/* Lejátszó Fejléc */
.player-header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 12px 20px !important;
  background: #181818 !important;
  border-bottom: 1px solid #282828 !important;
}

.player-title {
  color: #fff !important;
  font-size: 0.9rem !important;
  font-weight: 600 !important;
}

/* IFRAME KONTÉNER (16:9 arány beállítása) */
.responsive-iframe {
  position: relative !important;
  width: 100% !important;
  padding-bottom: 56.25% !important; /* Ez adja meg a 16:9 magasságot! */
  height: 0 !important;
  background: #000 !important;
}

.responsive-iframe iframe {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
}
