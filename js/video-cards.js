/* ==========================================
   PIPER MEDIA - VIDEÓK ADATAI ÉS KÁRTYA GENERÁLÓ
   ========================================== */

// 1. VIDEÓK LISTÁJA
const videos = [
   {
      id: "NzoNYFDY4G8",
      title: "Miért érdemes videót csinálni?",
      description: "Egy nyilvános videóval a potenciális ügyfeleid könnyebben rádtalálhatnek. Videó közben egyedi zeneszerzés hallható: Minden jog fenntartva 2026 Sipos Attila.",
      poster: "https://img.youtube.com/vi/NzoNYFDY4G8/hqdefault.jpg"
   },

   {
      id: "SLnCjCTzyK0",
      title: "Díjnyertes filmzene",
      description: "Az Amazon Frontlines zeneszerző versenyére készített díjnyertes pályaművem. Ezen a nemzetközi versenyen több mint 500 nevező közül választott ki a zsűri a fináléba a legjobb 10 közé. ",
      poster: "https://img.youtube.com/vi/SLnCjCTzyK0/hqdefault.jpg"
   },
   
   {
    id: "WTt3-uzIczY",
    title: "Zeneszerzés - AVAchallenge2022",
    description: "Ezen a versenyen kaptunk néhány hangfájlt és kizárólag ezek használatával lehetett megoldani a sounddesignt. A videóban megmutatom hogyan építettem fel a zenét.",
    poster: "https://img.youtube.com/vi/WTt3-uzIczY/hqdefault.jpg"
   },
 
   {
    id: "SSz6g4NBlCs",
    title: "Hirdetés - Magyarok Fénye",
    description: "A Magyarok Fénye című rockopera egyik előadásához készített hirdetésem. Küldött képi- és hanganyagból vágott, AI narrációval ellátott hirdetés teljesen a megrendelő igényeire szabva.",
    poster: "https://img.youtube.com/vi/SSz6g4NBlCs/hqdefault.jpg"
   },

   {
    id: "hsvqa23Tcwg",
    title: "Hirdetés - Fiktív hirdetés",
    description: "Egy demo anyag, ami bemutatja, hogy milyen minőségre számíthatsz tőlem. A videóban stock videókat használtam, AI narrációt, AI zenét és hangutómunkát is tartalmaz. Természetesen a videóidat saját képi- és hanganyagodból is elkészítem, vagy rendelhetsz forgatást is tőlem.",
    poster: "https://img.youtube.com/vi/hsvqa23Tcwg/hqdefault.jpg"
   },
   
   {
    id: "-GozvYoGRDY",
    title: "Hirdetés - Piper Music",
    description: "Stock videókból vágott trailer egyedi zeneszerzéssel és AI narrációval.",
    poster: "https://img.youtube.com/vi/-GozvYoGRDY/hqdefault.jpg"
   },

   {
    id: "EnJzh_8LiT0",
    title: "Zeneszerzés - Sprite Fright",
    description: "Az első teljes ívű történet, melyhez zenét szereztem. Nem is írnék többet róla, érdemes végignézni. Az egyik kedvencem...",
    poster: "https://img.youtube.com/vi/EnJzh_8LiT0/hqdefault.jpg"
   },
   
   {
    id: "bHW7389uW0Y",
    title: "Zeneszerzés - Bridgerton",
    description: "A híres sorozat egyik részének nyitójelenete. A várakozásoknak megfelelően a legtöbb pályázó tisztán szimfónikus zenével nevezett. Én gondoltam egy merészet és inkább a korabeli népzenei hangszereket helyeztem fókuszba.",
    poster: "https://img.youtube.com/vi/bHW7389uW0Y/hqdefault.jpg"
  },
   
   {
    id: "qLRmNFddtgA",
    title: "Zeneszerzés - Stargirl",
    description: "A Spitfire zeneszerző versenye, melyen a Stargirl sorozat egy jelenetét kellett megzenésíteni. A teljes zenét kizárólag a Spitfire LABS ingyenes hangszereivel készítettem el.",
    poster: "https://img.youtube.com/vi/qLRmNFddtgA/hqdefault.jpg"
   },
   
   {
    id: "r4qJ9314RqM",
    title: "Zeneszerzés - Colossus",
    description: "Mivel a képi anyagot erősen a Mátrix című film ihlette, ezért a zenémben én is bátorkodtam visszanyúlni a klasszikushoz.",
    poster: "https://img.youtube.com/vi/r4qJ9314RqM/hqdefault.jpg"
   },

   {
    id: "DeFkxaiwTEU",
    title: "Zeneszerzés - Sonuscore COTY2023",
    description: "A Sonuscore versenye, melyben a legnagyobb kihívás az volt, hogy a hangszereken játszott hangok a képpel szinkronban a megfelelő pillanatokban szólaljanak meg.",
    poster: "https://img.youtube.com/vi/DeFkxaiwTEU/hqdefault.jpg"
   },

   {
    id: "ayCn3sQRKRs",
    title: "Zeneszerzés - Tellurian",
    description: "A Tellurian című film előzetese. Nem akartam tipikus trailer zenét csinálni, ezért kicsit másképp álltam a feladathoz. ",
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
