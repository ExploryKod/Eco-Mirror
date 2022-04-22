

// Games variables
let currentQuiz = 0;
let correctAnswer = 0;
let score = 0;
let clic = 1;

let inventory = [];
let itemInventory = [];

// Maps variables
let map = document.querySelector(".maps");
let mapImage = document.querySelector("#image-map");
let introText = document.querySelector(".intro-text");

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

// Shuttle that crashed on first map in the foreign world
let shuttleImage = document.querySelector('#shuttle');

let crashText = document.querySelector("#crash-explain");

// URL of images 
let mapShipURL = 'ressources/maps/map_1_ship.png';
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

// Objects positions
let object01 = document.querySelector("#object-1");
let object02 = document.querySelector("#object-2");

// CSS grid: lines and columns
let ligne = 1;
let colonne = 1;

// Dialogue and challenges containers 
dialogueContainer = document.querySelector(".message-container");
dialogueContainerGuardian = document.querySelector(".message-container-guard");
playGames = document.querySelector(".open-btn-jeu");

// ============= FONCTIONS ================

function LoadGame() {
       
    map.style.display = "grid";
    dialogueContainer.style.display = "none";
    dialogueContainerGuardian.style.display = "none";
    playGames.style.display = "none";

    mapImage.src = mapShipURL;
    heroImage.src = heroImageURL.fromSky;
    ligne = 10;
    colonne = 8;

    hero.style.gridRow = 10;
    hero.style.gridColumn = 8;

    console.log("la map est chargée!");
    console.log("url de la map chargée:" + mapImage.src)
    document.addEventListener('keyup', moveHeroMapShip);

}



function newMap(mapPlace) {

    switch (mapPlace) {

        case "exitShip":

            ligne = 8;
            colonne = 8;
            hero.style.gridRow = 8;
            hero.style.gridColumn = 8;

            mapImage.src = FallingShipImage;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            hero.style.display = "none";
            crashText.style.display = "block";
            


            document.removeEventListener('keyup', moveHeroMapShip, false);
            document.removeEventListener('keyup', moveHeroMapShip, true);
            document.addEventListener('keyup', moveHeroMapCrash);
            break;

        case "exitToFinal":

            ligne = 8;
            colonne = 1;
            hero.style.gridRow = 8;
            hero.style.gridColumn = 1;

            mapImage.src = mapBeforeFinalURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapCrash, false);
            document.removeEventListener('keyup', moveHeroMapCrash, true);
            document.addEventListener('keyup', moveHeroMapBeforeFinal);
            break;

        case "exitToCamp":

            ligne = 1;
            colonne = 8;
            hero.style.gridRow = 1;
            hero.style.gridColumn = 8;

            mapImage.src = mapBeforeCampURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapCrash, false);
            document.removeEventListener('keyup', moveHeroMapCrash, true);
            document.addEventListener('keyup', moveHeroMapBeforeCamp);
            break;

        case "exitBeforeFinal":

            ligne = 1;
            colonne = 8;
            hero.style.gridRow = 1;
            hero.style.gridColumn = 8;
            mapImage.src = mapFinalURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapBeforeFinal, false);
            document.removeEventListener('keyup', moveHeroMapBeforeFinal, true);
            document.addEventListener('keyup', moveHeroMapFinal);
            break;

        case "exitBeforeCamp":

            ligne = 10;
            colonne = 1;
            hero.style.gridRow = 10;
            hero.style.gridColumn = 1;

            mapImage.src = mapCampURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
        

            document.removeEventListener('keyup', moveHeroMapBeforeCamp, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp, true);
            document.addEventListener('keyup', moveHeroMapCamp);
            break;

        case "returnToBeforeCamp":
         

            ligne = 10;
            colonne = 15;
            hero.style.gridRow = 10;
            hero.style.gridColumn = 15;

            mapImage.src = mapBeforeCampURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapCamp, false);
            document.removeEventListener('keyup', moveHeroMapCamp, true);
            document.addEventListener('keyup', moveHeroMapBeforeCamp_2);
            break;

        case "returnToCrash":
            ligne = 15;
            colonne = 8;
            hero.style.gridRow = 15;
            hero.style.gridColumn = 8;

            mapImage.src = mapCrashURL;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            playGames.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, true);
            document.addEventListener('keyup', moveHeroMapCrash_2);
            break;

        case "toShip":
       
            mapImage.src = ShipImage;
            dialogueContainer.style.display = "none";
            dialogueContainerGuardian.style.display = "none";
            shuttleImage.style.display = "none";
            playGames.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapFinal, false);
            document.removeEventListener('keyup', moveHeroMapFinal, true);
            document.addEventListener('keyup', moveHeroMapEnd);
            break;

        case "game-over":
            document.location.href = "../game_over.html";
            break;

    }
}


// ======= HERO MOVEMENTS ================

function moveHeroMapShip(event) {

    // Enter/Exit from map to map :


    let touche = event.key;
    dialogueContainer.style.display = "none";
    dialogueContainerGuardian.style.display = "none";
    shuttleImage.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)
    let exit = ["r1c8", "r1c9"]

    obstacle = [
        "r1c5", "r1c6", "r1c7", "r1c10", "r1c11", "r2c12", "r3c12", "r4c12", "r5c13", "r6c13", "r7c13", "r8c13", "r9c13", "r10c13",
        "r2c10", "r9c2", "r9c3", "r9c4", "r9c5", "r9c6", "r9c7", "r9c9", "r9c10", "r9c11", "r9c12", "r10c3", "r10c4", "r10c5", "r10c6", "r10c10", "r10c11", "r10c12",
        "r2c4", "r3c3", "r4c3", "r5c3", "r6c3", "r7c3", "r8c3", "r12c3", "r12c4", "r13c3", "r14c3", "r14c5", "r15c5", "r14c6", "r15c6", "r13c8", "r14c8",
        "r15c8", "r14c10", "r15c10", "r14c11", "r15c11", "r12c12", "r12c13", "r4c8", "r5c8", "r4c9", "r5c9", "r4c4", "r7c12", "r8c12"
    ];

    

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

            }

            if (exit.includes(`r${ligne}c${colonne}`)) {
                newMap("exitShip");
            }

        }
    }

    // fleche bas
    if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 3) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 13) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the ship")

}


function moveHeroMapCrash(event) {

    let touche = event.key;


    if (touche == "Enter") {
        mapImage.src = mapCrashURL;
        hero.style.display = "flex";

        pnj01.style.display = "block";
        pnj01Image.src = pnjGuardURL;
        pnj01.style.gridRow = 4;
        pnj01.style.gridColumn = 14;

        pnj02.style.display = "block";
        pnj02Image.src = pnjGuideURL;
        pnj02.style.gridRow = 9;
        pnj02.style.gridColumn = 9;

        shuttleImage.style.display = "block";
        shuttleImage.style.gridRow = "10 / span 2";
        shuttleImage.style.gridColumn = "6 / span 2";

        crashText.style.display = "none";


    }

    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1", "r13c2", "r13c14", "r13c15", "r12c1", "r12c2", "r12c14", "r12c15", "r11c1", "r11c2", "r11c14", "r11c15", "r10c14", "r11c15",
        "r9c14", "r9c15", "r8c14", "r8c15",
        "r8c1", "r7c1", "r6c1", "r5c1", "r4c1", "r3c1", "r2c1"
    ];

    obstacleDeadTree = [
        "r3c4", "r3c10", "r3c7", "r3c11",
        "r6c2", "r6c5",
        "r8c4",
        "r6c15",
        "r10c10", "r10c11",
        "r11c3", "r11c13",
    ];

    house = ["r6c8", "r6c9", "r5c9", "r5c8"];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree, house);


    let pnjGuide = ["r9c9"];
    let pnjGuard = ["r4c14"];
    objectFoundArray = ["r3c2", "r4c3", "r2c7"];

    exitToCamp = ["r15c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {

                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }

                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }

             
            }

                if (exitToCamp.includes(`r${ligne}c${colonne}`)) {
                    alert("Vous allez vers le camp");
                    newMap("exitToCamp");
                }
            }
        }
    

    // fleche gauche
    } else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }

                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                if (dialogueContainerGuardian.style.display == "block") {
                    ligne++;
                }

            }
        }
    }

    // fleche droite
    } else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjGuide.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                } else if (pnjGuard.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainerGuardian.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                    if (dialogueContainerGuardian.style.display == "block") {
                        ligne++;
                    }
                }   

            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the crash map")

}


function moveHeroMapCrash_2(event) {

   


    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    shuttleImage.style.display = "block";
    shuttleImage.style.gridRow = "10 / span 2";
    shuttleImage.style.gridColumn = "6 / span 2";

    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1", "r13c2", "r13c14", "r13c15", "r12c1", "r12c2", "r12c14", "r12c15", "r11c1", "r11c2", "r11c14", "r11c15", "r10c14", "r11c15",
        "r9c14", "r9c15", "r8c14", "r8c15",
        "r8c1", "r7c1", "r6c1", "r5c1", "r4c1", "r3c1", "r2c1"
    ];

    obstacleDeadTree = [
        "r3c4", "r3c10", "r3c7", "r3c11",
        "r6c2", "r6c5",
        "r8c4",
        "r6c15",
        "r10c10", "r10c11",
        "r11c3", "r11c13",
    ];

    house = ["r6c8", "r6c9", "r5c9", "r5c8"];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree, house);


    pnjMeetArray = ["r3c3", "r3c6", "r3c8"];
    objectFoundArray = ["r3c2", "r4c3", "r2c7"];
    exitToFinal = ["r4c15", "r3c15"];
    exitToCamp = ["r15c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                }

                if (exitToCamp.includes(`r${ligne}c${colonne}`)) {
                   

                }
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }
                }
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                }

                if (exitToFinal.includes(`r${ligne}c${colonne}`)) {
                    
                    newMap("exitToFinal");
                }
            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the crash map")

}



function moveHeroMapBeforeCamp(event) {

    // Enter/Exit from map to map :
    // changeMap();

    let touche = event.key;
    shuttleImage.style.display = "none";

    pnj01.style.display = "none";
    pnj02.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = [
        "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2",
        "r8c2", "r9c2", "r10c2", "r11c2", "r12c2", "r13c2", "r3c4", "r4c4", "r5c4", "r5c3", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c8",
        "r14c9", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r13c15", "r7c15", "r6c15", "r5c15", "r4c15", "r3c15", "r4c14", "r5c14", "r9c7",
        "r8c7", "r11c13"
    ];



    exitToCamp = ["r8c15", "r9c15", "r10c15", "r11c15"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (exitToCamp.includes(`r${ligne}c${colonne}`)) {
                    newMap("exitBeforeCamp")
                }

            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the map that is before the camp")
}

function moveHeroMapBeforeCamp_2(event) {

    // Enter/Exit from map to map :
    // changeMap();

    let touche = event.key;

    shuttleImage.style.display = "none";
    pnj01.style.display = "none";
    pnj02.style.display = "none";
    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = [
        "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2",
        "r8c2", "r9c2", "r10c2", "r11c2", "r12c2", "r13c2", "r3c4", "r4c4", "r5c4", "r5c3", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c8",
        "r14c9", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r13c15", "r7c15", "r6c15", "r5c15", "r4c15", "r3c15", "r4c14", "r5c14", "r9c7",
        "r8c7", "r11c13"
    ];


    exitToCrash = ["r1c7", "r1c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (exitToCrash.includes(`r${ligne}c${colonne}`)) {
                    newMap("returnToCrash");
                }
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the map that is before the camp but after having visiting camp")
}



function moveHeroMapCamp(event) {

    // Enter/Exit from map to map :
    // changeMap();

    let touche = event.key;
    shuttleImage.style.display = "none";
    mapImage.style.opacity = 1;


    pnj01.style.display = "block";
    pnj01Image.src = pnjTranshumanURL;
    pnj01.style.gridRow = 5;
    pnj01.style.gridColumn = 10;

    pnj02.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = [
        "r8c1", "r11c1", "r3c2", "r4c2", "r5c2", "r6c2", "r7c2", "r12c2", "r13c2", "r2c3", "r2c4", "r2c5", "r2c6", "r2c7", "r2c8", "r2c9",
        "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r13c3", "r14c6", "r14c7", "r14c8", "r14c9", "r14c10", "r14c11", "r14c12", "r14c13",
        "r14c14", "r4c4", "r10c4", "r12c4", "r13c5", "r5c6", "r5c7", "r7c8", "r12c8", "r9c10", "r11c10", "r12c10", "r6c11", "r12c11", "r6c12",
        "r4c13", "r9c13", "r11c13", "r12c13", "r3c15", "r4c15", "r5c15", "r6c15", "r7c15", "r8c15", "r9c15", "r10c15", "r11c15", "r12c15", "r13c15"
    ];

    exit = ["r9c1", "r10c1"];

    games = ["r5c10","r4c10","r4c9","r3c9"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (games.includes(`r${ligne + 1}c${colonne}`)) {
                    console.log("defi")
                    playGames.style.display = "block";
                    
                }

            } 

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (games.includes(`r${ligne + 1}c${colonne}`)) {
                    console.log("defi")
                    mapImage.style.opacity = 0.5;
                    playGames.style.display = "block";
                } else {
                    mapImage.style.opacity = 1;
                    playGames.style.display = "none";
                }

                if (exit.includes(`r${ligne}c${colonne}`)) {

                    if (score == 15) {
                        newMap("returnToBeforeCamp");
                    } else {
                        console.log("play again");
                        mapImage.style.opacity = 0.5;
                        playGames.style.display = "block";
                        
                    }
             
                }
            }

        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (games.includes(`r${ligne + 1}c${colonne}`)) {
                    console.log("defi")
                    playGames.style.display = "block";

                }
            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("Be careful, you are in \"transhuman\" camp, could be dangerous...")
}



function moveHeroMapBeforeFinal(event) {

    // Enter/Exit from map to map :
    // changeMap();

    let touche = event.key;
    shuttleImage.style.display = "none";
    pnj01.style.display = "none";
    pnj02.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    obstacle = [
        "r3c1", "r4c1", "r5c1", "r6c1", "r7c1", "r12c1", "r3c2", "r4c2", "r7c2", "r12c2", "r5c3", "r6c3", "r7c3", "r12c3", "r12c4",
        "r3c5", "r12c5", "r3c6", "r12c6", "r13c6", "r14c6", "r15c6", "r2c7", "r8c7", "r9c7", "r2c8", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13",
        "r12c9", "r13c9", "r5c12", "r6c12", "r3c14", "r4c14", "r5c14", "r6c14", "r7c14", "r8c14", "r9c14", "r10c14", "r11c14", "r12c14", "r13c14",
        "r14c14", "r15c14", "r16c14"
    ];



    exit = ["r15c7", "r15c8", "r15c9", "r15c10", "r15c11", "r15c12", "r15c13"]

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (exit.includes(`r${ligne}c${colonne}`))
                    newMap("exitBeforeFinal");
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("IT IS MAP before the final map")
}


function moveHeroMapFinal(event) {

    let touche = event.key;
    shuttleImage.style.display = "none";
    pnj01.style.display = "none";
    pnj02.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("colonne final"+colonne)
    console.log("lignes final map"+ligne)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = [
        "r1c5", "r2c5", "r3c5", "r10c5", "r13c5",
        "r11c4", "r12c4",
        "r4c7", "r5c7",
        "r6c6", "r7c7", "r8c7", "r9c2", "r10c6", "r14c6", "r15c7", "r15c8", "r14c9", "r13c10",
        "r9c11", "r10c11", "r11c11", "r12c11", "r7c11", "r7c10", "r7c9", "r7c8", "r7c7", "r7c7", "r7c6", "r7c5", "r7c4", "r6c12", "r5c12",
        "r9c12", "r9c13", "r9c14", "r1c11", "r2c11", "r3c11", "r4c11"
    ];

    exitToShip = ["r14c7", "r14c8","r13c8","r13c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (exitToShip.includes(`r${ligne + 1}c${colonne}`)) {
                    newMap("toShip");
                }
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("IT IS MAP final")
}



function moveHeroMapEnd(event) {

    let touche = event.key;
    shuttleImage.style.display = "none";
    pnj01.style.display = "none";
    pnj02.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    exitToYourShip = ["r14c7", "r14c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 9) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 10) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (exitToYourShip.includes(`r${ligne + 1}c${colonne}`)) {
                    document.location.href = "../win.html";
                }
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 5) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("IT IS MAP end")
}


// ==================== Games in tranhuman camp


const contentInventory = document.getElementById("contentInventory");

const quizQuestion = [{
    question: "Quel est la part de gaz à effet de serre auquel contribue la pollution numérique?",
    a: "15%",
    b: "1%",
    c: "4%",
    d: "8%",
    correct: "c",
},
{
    question: "Dans les outils suivant, quels sont ceux qui peuvent être utilisé pour réduire votre pollution numérique?",
    a: "Cleannetwork",
    b: "Cleanfox",
    c: "La corbeille dans votre boîte e-mail",
    d: "Greenanalyser",
    correct: "b",
},
{
    question: "Qui contribue le plus à la pollution numérique parmis les acteurs suivants :",
    a: "Les fabricants du hardware",
    b: "Les développeurs web",
    c: "Vous, en tant qu'utilisateur peu scrupuleux consommateur de streaming.",
    d: "Votre chat quand vous le laissez jouer à L.O.L sans surveillance",
    correct: "a",
},

];

const quiz = document.getElementById('quiz-quizz')

const answerEls = document.querySelectorAll('.answer-quizz')
const questionEl = document.getElementById('question-quizz')
const a_text = document.getElementById('a_text-quizz')
const b_text = document.getElementById('b_text-quizz')
const c_text = document.getElementById('c_text-quizz')
const d_text = document.getElementById('d_text-quizz')
const submitBtn = document.getElementById('submit-quizz')

/* Function start game quiz */
function openFormQuiz() {
    document.getElementById("popupForm-quizz").style.display = "block";

}
/* END */

const btnplay = document.querySelector(".open-button-quizz");
btnplay.addEventListener("click", loadQuiz);


function loadQuiz() {

    deselectAnswers()

    const currentQuizQuestion = quizQuestion[currentQuiz]

    questionEl.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizQuestion[currentQuiz].correct) {
            correctAnswer++
            score += 5;
        }

        currentQuiz++

        if (currentQuiz < quizQuestion.length) {
            loadQuiz()
            console.log("rejouer")
        } else {
            win();

        }
    }
})

/* window.onload = */
function win() {
    console.log("la fonction win est appelé");
    if (score == 15) {

        quiz.innerHTML = `
        
           <h3>Bravo! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3>
           <h3>Vous avez gagné une carte digitale qui vous permet de passer au niveau suivant</h3>
         <div class="cartedigi">  <img src="../image/carteDigi.png" alt="carte digital"  >
         <img src="../image/cartefind.png" alt="carte digital"  >
         </div>
           <a href=''>  
           
           </a>
           <button class="btn" onclick="save1();">SAVE</button>
           

           
           <div class="elcontent">
           <img src="../image/mentorGuide.png" alt="carte digital"  >
           </div>
           `
    } else if (score == 10) {
        quiz.innerHTML = `
           <h3>${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <span class="affichage" onclick="closeForm()">&times;</span>
           <button onclick="location.reload()">Rejouer</button>
           
           `


    } else if (score == 5) {
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <button onclick="location.reload()">Rejouer</button>
           `

    } else if (score == 0) {
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <button onclick="location.reload()">Rejouer</button>
           `
    }
}


function save1() {
    console.log("le score 1");
    console.log(score);

    if (score === 15) {
        console.log('push image');
        inventory.push('./image/carteDigi.png');
        const img = document.createElement("img");
        img.src = './image/carteDigi.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);
        document.querySelector('.open-button-quizz').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
    }
    document.getElementById("popupForm-quizz").style.display = "none";

}

/* fonction save localStorage */

/* function save() {
    var new_data = score;

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("popupForm2").style.display = "none";
    document.getElementById("popupForm3").style.display = "none";

} */




// window.onload = function view() {
function view() {
    console.log('marche');
    newScore = localStorage.getItem('data')
    var Score_data = JSON.parse(localStorage.getItem('data'));
    // Score_data.push(newScore);
    console.log(localStorage.getItem('data'));
    console.log(Score_data);

    if (Score_data[0] === 15) {
        console.log('push image');
        inventory.push('./image/carteDigi.png');
        const img = document.createElement("img");
        img.src = './image/carteDigi.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);
        document.querySelector('.open-button').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
    }
    if (Score_data[1] === 25) {
        console.log('round 2');
        inventory.push('./image/potion1.png');
        const img = document.createElement("img");
        img.src = './image/potion1.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button2').style.display = 'none';
        document.querySelector('.button3').style.display = 'block';


    }
    if (Score_data[2] === 35) {
        console.log('round 3');

        inventory.push('./image/bouclier.png');
        const img = document.createElement("img");
        img.src = './image/bouclier.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button3').style.display = 'none';

    }

}























// L'évènement sur le document
window.addEventListener("load", LoadGame);
