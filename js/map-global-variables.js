// Maps variables
let map = document.querySelector(".maps");
let mapImage = document.querySelector("#image-map");

// User information variable : on the map when the ship failed and during the game in the left panel.
let introText = document.querySelector(".intro-text");
let userInfoOnShip = document.querySelector("#info-mapShip");
let userInfoCrash = document.querySelector("#info-mapCrash");
let userInfoBeforeCamp = document.querySelector("#info-mapBeforeCamp");
let userInfoCamp = document.querySelector("#info-mapCamp");
let userInfoFinal = document.querySelector("#info-mapFinal");
let userInfoEnd = document.querySelector("#info-mapEnd");

// hero : container and image.
let hero = document.querySelector(".hero");
let heroImage = document.querySelector(".hero img");

// URL of the hero different positions when moving
heroImageURL = {
    fromSky: 'ressources/hero/hero-face.png',
    right: 'ressources/hero/hero-right.png',
    left: 'ressources/hero/hero-left.png',
    up: 'ressources/hero/hero-back.png',
    down: 'ressources/hero/hero-face.png'
}

// Crash elements : explaining and image of the shuttle on the second map
let shuttleImage = document.querySelector('#shuttle');
let crashText = document.querySelector("#crash-explain");

// Life bar of the hero: the bar itself.
let heroLifeBar = document.querySelector("#myXp");

// URL of images 
let mapShipURL = 'ressources/maps/map_1_ship.jpeg';
let mapCrashURL = 'ressources/maps/map_2_crash.png';
let mapBeforeCampURL = 'ressources/maps/map_3bis_before_camp.png';
let mapCampURL = 'ressources/maps/map_4_camp.png';
let mapBeforeFinalURL = 'ressources/maps/map_3_before_final.png';
let mapFinalURL = 'ressources/maps/map_final.png';
let endGameURL = 'ressources/maps/EarthPhoto.jpeg';
let ShipImage = 'ressources/static-images/ShipIsDown.png';
let FallingShipImage = 'ressources/static-images/ShipIsFalling.png';

// PNJ positions and images
let pnj01 = document.querySelector("#pnj-1");
let pnj02 = document.querySelector("#pnj-2");
let pnj01Image = document.querySelector("#pnj-image-1")
let pnj02Image = document.querySelector("#pnj-image-2")

let pnjGuardURL = 'ressources/pnj/guard.png';
let pnjGuideURL = 'ressources/pnj/mentor.png';
let pnjTranshumanURL = 'ressources/pnj/transhuman.png';

// Objects and their image
let object01 = document.querySelector("#object-1");
let imageObject01 = document.querySelector("#object-1 img");


// CSS grid: lines and columns
let ligne = 1;
let colonne = 1;

// Dialogue and challenges containers 
dialogueContainer = document.querySelector(".message-container");
dialogueContainerGuardian = document.querySelector(".message-container-guard");
playGames = document.querySelector(".open-btn-jeu");
