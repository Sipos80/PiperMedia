/* ==========================================
   PIPER MEDIA - VIDEÓK ADATAI ÉS KÁRTYA GENERÁLÓ
   ========================================== */

// 1. VIDEÓK LISTÁJA
const videos = [

   {
      id: "SLnCjCTzyK0",
      title: "WHO SHOULD DECIDE",
      description: "Az Amazon Frontlines zeneszerző versenyére készített díjnyertes pályaművem. Ezen a nemzetközi versenyen többszáz nevező közül választott ki a zsűri a fináléba.",
      poster: "https://img.youtube.com/vi/SLnCjCTzyK0/hqdefault.jpg"
   },
   {
    id: "-GozvYoGRDY",
    title: "Piper Music - Trailer",
    description: "Videó vágás, zeneszerzés, AI narráció.",
    poster: "https://img.youtube.com/vi/-GozvYoGRDY/hqdefault.jpg"
   },
   {
    id: "a358Gy9Pg1c",
    title: "Végtelen álom",
    description: "Dalszerzés, videóvágás. Végtelen zoom videó AI eszközökkel és Davinci Resolve segítségével.",
    poster: "https://img.youtube.com/vi/a358Gy9Pg1c/hqdefault.jpg"
   },
   
   {
    id: "bHW7389uW0Y",
    title: "Bridgerton",
    description: "Egyedi zeneszerzés filmekhez.",
    poster: "https://img.youtube.com/vi/bHW7389uW0Y/hqdefault.jpg"
  },
   
   {
    id: "qLRmNFddtgA",
    title: "Stargirl",
    description: "Egyedi zeneszerzés filmekhez.",
    poster: "https://img.youtube.com/vi/qLRmNFddtgA/hqdefault.jpg"
   },
   
   {
    id: "EnJzh_8LiT0",
    title: "Sprite Fright",
    description: "Egyedi zeneszerzés filmekhez.",
    poster: "https://img.youtube.com/vi/EnJzh_8LiT0/hqdefault.jpg"
   },

   {
    id: "r4qJ9314RqM",
    title: "Colossus Re-Scoring Competition",
    description: "Egyedi zeneszerzés trailerhez.",
    poster: "https://img.youtube.com/vi/r4qJ9314RqM/hqdefault.jpg"
   },

   {
    id: "DeFkxaiwTEU",
    title: "Sonuscore - Composer Of The Year Award 2023",
    description: "Egyedi zeneszerzés trailerhez.",
    poster: "https://img.youtube.com/vi/DeFkxaiwTEU/hqdefault.jpg"
   },

   {
    id: "ayCn3sQRKRs",
    title: "Tellurian",
    description: "Egyedi zeneszerzés trailerhez.",
    poster: "https://img.youtube.com/vi/ayCn3sQRKRs/hqdefault.jpg"
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
