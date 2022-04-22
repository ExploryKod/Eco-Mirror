

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

// ============= FONCTIONS ================

function LoadGame() {

    map.style.display = "grid";
    dialogueContainer.style.display = "none";
    mapImage.src = mapShipURL;
    heroImage.src = heroImageURL.fromSky;
    ligne = 10;
    colonne = 8;
   
    hero.style.gridRow = 10;
    hero.style.gridColumn = 8;

    console.log("la map est chargée!");
    console.log("url de la map chargée:"+mapImage.src)
    document.addEventListener('keyup', moveHeroMapShip);

    }


function newMap(mapPlace) {

    switch(mapPlace) {

        case "exitShip":

            ligne = 8;
            colonne = 8;
            hero.style.gridRow = 8;
            hero.style.gridColumn = 8;
            
            mapImage.src = FallingShipImage;
            dialogueContainer.style.display = "none";
            hero.style.display = "none";
           

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
            shuttleImage.style.display = "none";

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
            shuttleImage.style.display = "none";
            
            document.removeEventListener('keyup', moveHeroMapBeforeCamp, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp, true);
            document.addEventListener('keyup', moveHeroMapCamp);
            break;

        case "returnToBeforeCamp":
            alert("ouf, nous avons fuit le camp")

            ligne = 10;
            colonne = 15;
            hero.style.gridRow = 10;
            hero.style.gridColumn = 15;

            mapImage.src = mapBeforeCampURL;
            dialogueContainer.style.display = "none";
            shuttleImage.style.display = "none";
        
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
            
            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, false);
            document.removeEventListener('keyup', moveHeroMapBeforeCamp_2, true);
            document.addEventListener('keyup', moveHeroMapCrash_2);
            break;
        
        case "toShip":
            alert("Vous voyez le vaisseau au loin")
            mapImage.src = ShipImage; 
            dialogueContainer.style.display = "none";
            shuttleImage.style.display = "none";

            document.removeEventListener('keyup', moveHeroMapFinal, false);
            document.removeEventListener('keyup', moveHeroMapFinal, true);
            document.addEventListener('keyup', moveHeroMapEnd);
            break;
        
        case "game-over":
            document.location.href="../game_over.html"; 
            break;

    }
}


// ======= HERO MOVEMENTS ================

function moveHeroMapShip(event) {

    // Enter/Exit from map to map :


    let touche = event.key;
    dialogueContainer.style.display = "none";
    shuttleImage.style.display = "none";

    // console.log("============ PNJ MANAGEMENT =============")
   

    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)
    let exit = ["r1c8","r1c9"]
    
    obstacle = [
        "r1c5", "r1c6", "r1c7", "r1c10", "r1c11", "r2c12", "r3c12", "r4c12", "r5c13", "r6c13", "r7c13", "r8c13", "r9c13", "r10c13",
        "r2c10", "r9c2", "r9c3", "r9c4", "r9c5", "r9c6", "r9c7", "r9c9", "r9c10", "r9c11", "r9c12", "r10c3", "r10c4", "r10c5", "r10c6", "r10c10", "r10c11", "r10c12",
        "r2c4", "r3c3", "r4c3", "r5c3", "r6c3", "r7c3", "r8c3", "r12c3", "r12c4", "r13c3", "r14c3", "r14c5", "r15c5", "r14c6", "r15c6", "r13c8", "r14c8",
        "r15c8", "r14c10", "r15c10", "r14c11", "r15c11", "r12c12", "r12c13", "r4c8", "r5c8", "r4c9", "r5c9", "r4c4", "r7c12", "r8c12"
    ];

    pnjMeetArray = ["",""];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                }

                if(exit.includes(`r${ligne}c${colonne}`)){
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

    house = ["r6c8","r6c9","r5c9","r5c8"];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree,house);


    let pnjGuide = ["r9c9"];
    let pnjGuard = ["r4c14"];
    objectFoundArray = ["r3c2","r4c3","r2c7"];
    
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
                    dialogueContainer.setAttribute('id','dialogue-container-guard');
                    const dialogueContainerGuard = document.querySelector("#dialogue-container-guard");
                    dialogueContainerGuard.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;


                    if (dialogueContainerGuard.style.display == "block") {
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
                    alert("Vous allez vers le camp");
                    newMap("exitToCamp");
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
            }

        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the crash map")

}


function moveHeroMapCrash_2(event) {

    // Enter/Exit from map to map :
    

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

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree,house);


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
                    alert("Vous n'êtes plus accépté au camp");
                    
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
                    alert("Vous allez vers votre vaisseau mais avez-vous l'objet ?");
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



    exitToCamp = ["r8c15","r9c15","r10c15","r11c15"];

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
    pnj01.style.display = "none";
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

    exit = ["r9c1","r10c1"];

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

                if (exit.includes(`r${ligne}c${colonne}`)){
                    newMap("returnToBeforeCamp");
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



    exit = ["r15c7","r15c8","r15c9","r15c10","r15c11","r15c12","r15c13"]

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

    exitToShip = ["r14c7","r14c8"];

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

    exitToShip = ["r14c7", "r14c8"];

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



// L'évènement sur le document
window.addEventListener("load", LoadGame);
