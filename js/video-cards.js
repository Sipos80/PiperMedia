/* ==========================================
   PIPER MEDIA - VIDEÓK ADATAI ÉS KÁRTYA GENERÁLÓ
   ========================================== */

// 1. VIDEÓK LISTÁJA
const videos = [
  {
    id: "bHW7389uW0Y",
    title: "Bridgerton",
    description: "Egyedi zeneszerzés filmekhez.",
    poster: "https://img.youtube.com/vi/bHW7389uW0Y/hqdefault.jpg"
  },
     {
    id: "SLnCjCTzyK0",
    title: "WHO SHOULD DECIDE — Music Cosmos",
    description: "Kísérő szöveg vagy rövid leírás a videóhoz.",
    poster: "https://img.youtube.com/vi/SLnCjCTzyK0/hqdefault.jpg"
  },
   
  {
    id: "-GozvYoGRDY",
    title: "Piper Music - Trailer",
    description: "Videó vágás, zeneszerzés.",
    poster: "https://img.youtube.com/vi/-GozvYoGRDY/hqdefault.jpg"
  }
];

// 2. KÁRTYÁK KIRAKÁSA AZ OLDAL BETÖLTÉSEKOR
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;

  grid.innerHTML = videos.map(video => `
    <div class="video-card" onclick="Lightbox.open('${video.id}')">
      <div class="thumbnail-wrapper">
        <img src="${video.poster}" alt="${video.title}" loading="lazy">
        <div class="play-btn">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="#fff">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${video.title}</h3>
        <p class="card-text">${video.description}</p>
      </div>
    </div>
  `).join('');
});
