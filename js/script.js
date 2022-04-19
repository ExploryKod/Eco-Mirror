// Fichier séparé de github
// Fixer les entrées par map et non en dehors.

let hero = document.querySelector(".hero");
let heroImage = document.querySelector(".hero img");
let mapImage = document.querySelector("#image-map");
let dialogueContainer = document.querySelector("#dialogue-container");
console.log("URL de la map est: "+mapImage.src)
// Access to the map grid
let map = document.querySelector(".maps");


// URL of the hero different position when moving
heroImageURL = {
    fromSky: '../ressources/hero/hero-face.png', 
    right: '../ressources/hero/hero-right.png',
    left: '../ressources/hero/hero-left.png',
    up: '../ressources/hero/hero-back.png',
    down: '../ressources/hero/hero-face.png'
}

heroImage.src = heroImageURL.fromSky;
console.log("le selector devient: " + heroImage.src)

// URL of images 
let mapOneURL = '../ressources/cartes/Map_1.png';
let mapTwoURL = '../ressources/cartes/Map_2.png';
let mapThreeURL = '../ressources/cartes/Map_3.png';
let mapFourURL = '../ressources/cartes/Map_4.png';
let endGameURL = '../ressources/cartes/EarthPhoto.jpeg';

let obstacles = [];

// Entry points html elements
let mapOneEntry = document.querySelector("#enter-map-1");
let mapTwoEntry = document.querySelector("#enter-map-2");
let mapThreeEntry = document.querySelector("#enter-map-3");
let mapFourEntry = document.querySelector("#enter-map-4");

// Exit points html elements
let mapOneExit = document.querySelector("#exit-map-1");
let mapTwoExit = document.querySelector("#exit-map-2");
let mapThreeExit = document.querySelector("#exit-map-3");
let mapFourExit = document.querySelector("#exit-map-4");

let pnj01 = document.querySelector("#pnj-1");
let pnj02 = document.querySelector("#pnj-2");
let pnj03 = document.querySelector("#pnj-3");

let ligne = 1;
let colonne = 1;

function LoadGame() {

    // On pourra choisir de charger d'abord une carte global ici
    console.log("=== OPERATIONS DE CHARGEMENT =======")

    // Afficher MAP comme carte de jeu
    map.style.display = "grid";
    mapDisplayInfo = getComputedStyle(map).display;
    console.log("Map1 display est ok: " + mapDisplayInfo);

    // Si map One est bien chargé on positionne le héro à l'emplacement de l'entrée
    if (mapDisplayInfo === "grid") {
        mapImage.src = mapOneURL;
        mapOneEntry.style.display = "grid";
        // Exit : On pourra l'afficher que s'il trouve un objet : 
        mapOneExit.style.display = "grid";
        ligne = 1;
        colonne = 1;
        console.log("la map est chargée!"); 
        hero.style.gridRow = 9;
        hero.style.gridColumn = 1;
        setObjectPosition("1");
        setPnjPosition("1");
        document.addEventListener('keyup', moveHeroMap01);
        
    }
}

function GetGridPositionHero(hero) {

    let heroGridPositionRow = getComputedStyle(hero).gridRow;
    let heroGridPositionColumn = getComputedStyle(hero).gridColumn;

    let arrayHeroGridPosition = [heroGridPositionRow, heroGridPositionColumn];
    let heroGridPosition = arrayHeroGridPosition.join("").toString();
    return heroGridPosition;
}

function GetEntryPosition(StrNumber) {

    switch (StrNumber) {
        case "1":
            var EntryRow = getComputedStyle(mapOneEntry).gridRow;
            var EntryCol = getComputedStyle(mapOneEntry).gridColumn;
            break;

        case "2":
            var EntryRow = getComputedStyle(mapTwoEntry).gridRow;
            var EntryCol = getComputedStyle(mapTwoEntry).gridColumn;
            break;

        case "3":
            var EntryRow = getComputedStyle(mapThreeEntry).gridRow;
            var EntryCol = getComputedStyle(mapThreeEntry).gridColumn;
            break;

        case "4":
            var EntryRow = getComputedStyle(mapFourEntry).gridRow;
            var EntryCol = getComputedStyle(mapFourEntry).gridColumn;
            break;

        default:
            var EntryRow = getComputedStyle(mapOneEntry).gridRow;
            var EntryCol = getComputedStyle(mapOneEntry).gridColumn;
            break;
    }

    let ArrayEntryPosition = [EntryRow, EntryCol];
    let EntryStringPosition = ArrayEntryPosition.join("").toString();
    return EntryStringPosition

}


function GetExitGridPosition(numberStr) {

    switch (numberStr) {
        case "1":
            var ExitRow = getComputedStyle(mapOneExit).gridRow;
            var ExitCol = getComputedStyle(mapOneExit).gridColumn;
            break;

        case "2":
            var ExitRow = getComputedStyle(mapTwoExit).gridRow;
            var ExitCol = getComputedStyle(mapTwoExit).gridColumn;
            break;

        case "3":
            var ExitRow = getComputedStyle(mapThreeExit).gridRow;
            var ExitCol = getComputedStyle(mapThreeExit).gridColumn;
            break;

        case "4":
            var ExitRow = getComputedStyle(mapFourExit).gridRow;
            var ExitCol = getComputedStyle(mapFourExit).gridColumn;
            break;

        default:
            var ExitRow = getComputedStyle(mapOneExit).gridRow;
            var ExitCol = getComputedStyle(mapOneExit).gridColumn;
            break;
    }

    let ArrayExitPosition = [ExitRow, ExitCol];
    let ExitStringPosition = ArrayExitPosition.join("").toString();
    return ExitStringPosition
}

function setObjectPosition(mapNumber) {

    alert("fonction setobjet appelée")

    let object01 = document.querySelector("#object-1");
    let object02 = document.querySelector("#object-2");
    let object03 = document.querySelector("#object-3");

    switch (mapNumber) {

        case "1":
            object01.style.gridRow = 3;
            object01.style.gridColumn = 2;
            object02.style.gridRow = 4;
            object02.style.gridColumn = 3;
            object03.style.gridRow = 2;
            object03.style.gridColumn = 7;
            break;

        case "2":
            object01.style.gridRow = 2;
            object01.style.gridColumn = 2;
            object02.style.gridRow = 4;
            object02.style.gridColumn = 4;
            object03.style.gridRow = 6;
            object03.style.gridColumn = 6;
            break;

        case "3":
            object01.style.gridRow = 6;
            object01.style.gridColumn = 8;
            object02.style.gridRow = 9;
            object02.style.gridColumn = 10;
            object03.style.gridRow = 12;
            object03.style.gridColumn = 4;
            break;

        case "4":
            obstacle01.style.gridRow = 1;
            obstacle01.style.gridColumn = 1;
            obstacle02.style.gridRow = 3;
            obstacle02.style.gridColumn = 3;
            obstacle03.style.gridRow = 8;
            obstacle03.style.gridColumn = 8;
            break;

        default:
            object01.style.display = "none";
            object02.style.display = "none";
            object03.style.display = "none";
            break;
    }
}

function setPnjPosition(mapNumber) {
   
    switch (mapNumber) {

        case "1":
            pnj01.style.gridRow = 3;
            pnj01.style.gridColumn = 3;
            pnj02.style.gridRow = 3;
            pnj02.style.gridColumn = 6;
            pnj03.style.gridRow = 3;
            pnj03.style.gridColumn = 8;
            pnjPositionMap = [pnj01,pnj02,pnj03];
            return pnjPositionMap; 
            break;

        case "2":
            pnj01.style.gridRow = 2;
            pnj01.style.gridColumn = 2;
            pnj02.style.gridRow = 4;
            pnj02.style.gridColumn = 4;
            pnj03.style.gridRow = 6;
            pnj03.style.gridColumn = 6;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap; 
            break;

        case "3":
            pnj01.style.gridRow = 6;
            pnj01.style.gridColumn = 8;
            pnj02.style.gridRow = 9;
            pnj02.style.gridColumn = 10;
            pnj03.style.gridRow = 12;
            pnj03.style.gridColumn = 4;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap; 
            break;

        case "4":
            pnj01.style.gridRow = 1;
            pnj01.style.gridColumn = 1;
            pnj02.style.gridRow = 3;
            pnj02.style.gridColumn = 3;
            pnj03.style.gridRow = 8;
            pnj03.style.gridColumn = 8;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap; 
            break;

        default:
            pnj01.style.display = "none";
            pnj02.style.display = "none";
            pnj03.style.display = "none";
            break;
    }
}

function getPnjPosition(mapNumber) {

    let pnjMap = "";

    switch (mapNumber) {
        case "1":
            pnjCoordinates = {
                pnjOneX: pnjMap[0].getBoundingClientRect().x,
                pnjOneY: pnjMap[0].getBoundingClientRect().y,
                pnjTwoX: pnjMap[1].getBoundingClientRect().x,
                pnjTwoY: pnjMap[1].getBoundingClientRect().y,
                pnjThreeX: pnjMap[2].getBoundingClientRect().x,
                pnjThreeY: pnjMap[2].getBoundingClientRect().y
                
            };
            return pnjCoordinates;

        case "2":
            pnjMap = setPnjPosition("2");
            pnjCoordinates = {
                pnjOneX: pnjMap[0].getBoundingClientRect().x,
                pnjOneY: pnjMap[0].getBoundingClientRect().y,
                pnjTwoX: pnjMap[1].getBoundingClientRect().x,
                pnjTwoY: pnjMap[1].getBoundingClientRect().y,
                pnjThreeX: pnjMap[2].getBoundingClientRect().x,
                pnjThreeY: pnjMap[2].getBoundingClientRect().y

            };
            return pnjCoordinates;
        
        case "3":
            pnjMap = setPnjPosition("3");
            pnjCoordinates = {
                pnjOneX: pnjMap[0].getBoundingClientRect().x,
                pnjOneY: pnjMap[0].getBoundingClientRect().y,
                pnjTwoX: pnjMap[1].getBoundingClientRect().x,
                pnjTwoY: pnjMap[1].getBoundingClientRect().y,
                pnjThreeX: pnjMap[2].getBoundingClientRect().x,
                pnjThreeY: pnjMap[2].getBoundingClientRect().y

            };
            return pnjCoordinates;
        
        case "4":
            pnjMap = setPnjPosition("4");
            pnjCoordinates = {
                pnjOneX: pnjMap[0].getBoundingClientRect().x,
                pnjOneY: pnjMap[0].getBoundingClientRect().y,
                pnjTwoX: pnjMap[1].getBoundingClientRect().x,
                pnjTwoY: pnjMap[1].getBoundingClientRect().y,
                pnjThreeX: pnjMap[2].getBoundingClientRect().x,
                pnjThreeY: pnjMap[2].getBoundingClientRect().y

            };
            return pnjCoordinates;
    }

}


function changeMap() {

    heroPosition = GetGridPositionHero(hero);
    heroPositionX = hero.getBoundingClientRect().x;
    heroPositionY = hero.getBoundingClientRect().y;

    // Position grid de l'exit de la map 1 sous forme de string.
    mapOneExitPosition = GetExitGridPosition("1");

    // Position grid de l'exit de la map 2 :string
    mapTwoExitPosition = GetExitGridPosition("2");

    // Position grid de l'exit de la map 2 :string
    mapThreeExitPosition = GetExitGridPosition("3");

    // Position grid de l'exit de la map 2 :string
    mapFourExitPosition = GetExitGridPosition("4");

    // Once I am on the exit point, it happens:

    if (heroPosition === mapOneExitPosition) {
        console.log("ICI LA SORTIE de map 1");
        alert("ici la sortie de map 1");
        // Ici laisser ligne = 3 car sinon le hero repart de ligne = 1 qui se confond avec Gridrow=1
        ligne = 2;
        colonne = 1;
        hero.style.gridRow = 2;
        hero.style.gridColumn = 1;
        mapImage.src = mapTwoURL;
        mapOneExit.style.display = "none";
        mapOneEntry.style.display = "none";
        mapTwoExit.style.display = "grid";
        mapTwoEntry.style.display = "grid";
        setObjectPosition("2");
        setPnjPosition("2");
        document.removeEventListener('keyup', moveHeroMap01, false);
        document.removeEventListener('keyup', moveHeroMap01, true);
        document.addEventListener('keyup', moveHeroMap02);
 
        

    } else if (heroPosition === mapTwoExitPosition) {
        console.log("ICI LA SORTIE de map 2");
        alert("ici la sortie de map 2");
        // Ici laisser ligne = 19 car sinon le hero repart de ligne = 1 qui se confond avec Gridrow=1
        ligne = 13;
        colonne = 1;
        hero.style.gridRow = 13;
        hero.style.gridColumn = 1;
        mapImage.src = mapThreeURL;
        mapTwoExit.style.display = "none";
        mapTwoEntry.style.display = "none";
        mapThreeExit.style.display = "grid";
        mapThreeEntry.style.display = "grid";
        setObjectPosition("3");
        setPnjPosition("3");
        document.removeEventListener('keyup', moveHeroMap02, false);
        document.removeEventListener('keyup', moveHeroMap02, true);
        document.addEventListener('keyup', moveHeroMap03);
       

    } else if (heroPosition === mapThreeExitPosition) {
        console.log("ICI LA SORTIE de map 3");
        alert("ici la sortie de map 3");
        // Ici laisser ligne = X car sinon le hero repart de ligne = 1 qui se confond avec Gridrow=1
        ligne = 1;
        colonne = 8;
        hero.style.gridRow = 1;
        hero.style.gridColumn = 8;
        mapImage.src = mapFourURL;
        mapThreeExit.style.display = "none";
        mapThreeEntry.style.display = "none";
        mapFourExit.style.display = "grid";
        mapFourEntry.style.display = "grid";
        setObjectPosition("4");
        setPnjPosition("4");
        document.removeEventListener('keyup', moveHeroMap03, false);
        document.removeEventListener('keyup', moveHeroMap03, true);
        document.addEventListener('keyup', moveHeroMap04);
        

    } else if (heroPosition === mapFourExitPosition) {
        alert("fin du jeu");
        mapFourExit.style.display = "none";
        mapFourEntry.style.display = "none";
        hero.style.display = "none";
        setObjectPosition("8");
        setPnjPosition("7");
        mapImage.src = endGameURL;

    }

    // Once I enter the new map : 

    if (heroPosition === GetEntryPosition("1")) {
      
        hero.style.gridColumn = 1;
        hero.style.gridRow = 9;
        colonne = 1;
        // Cette ligne doit resté à 19 sinon le hero est mis en Row = 1 car ligne = 1 
        ligne = 9;
        
     

    } else if (heroPosition === GetEntryPosition("2")) {
        
        colonne = 1;
        ligne = 2;
        hero.style.gridColumn = 1;
        hero.style.gridRow = 2;
        console.log("We now are on map 2 entry");

    } else if (heroPosition === GetEntryPosition("3")) { 
        colonne = 1;
        ligne = 13;
        hero.style.gridColumn = 1;
        hero.style.gridRow = 13;

    } else if (heroPosition === GetEntryPosition("4")) {
        colonne = 8;
        ligne = 1;
        hero.style.gridColumn = 8;
        hero.style.gridRow = 1;

    } else {
        hero.style.gridColumn = colonne;
        hero.style.gridRow = ligne;
    }

}

// Fonctions principales de mouvement

function moveHeroMap01(event) {
    
    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;
   
    // console.log("============ PNJ MANAGEMENT =============")
  
    
    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14","r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1","r13c2","r13c14","r13c15","r12c1","r12c2","r12c14","r12c15","r11c1","r11c2","r11c14","r11c15","r10c14","r11c15",
        "r9c14","r9c15","r8c14","r8c15",
        "r8c1","r7c1","r6c1","r5c1","r4c1","r3c1","r2c1"
    ];

    obstacleDeadTree = [
        "r3c4","r3c10","r3c7","r3c11",
        "r6c2","r6c5",
        "r8c4",
        "r6c15",
        "r10c10","r10c11",
        "r11c3","r11c13",
    ];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree);
 

    pnjMeetArray = ["r3c3","r3c6","r3c8"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {
           
            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block"; 
                    mapImage.style.opacity = 0.5;

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
                    mapImage.style.opacity = 0.5;

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    } 
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
                    mapImage.style.opacity = 0.5;

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

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`)))  {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.5;

                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    } 
                }
            } 
    }

}

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("MAP ONE EST DECLENCHÉ")

}

function moveHeroMap02(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;


    // Position du héro via Grid :string
    heroPosition = GetGridPositionHero(hero);
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(heroPosition);
    // Position du héro selon le viewport :float
    heroPositionX = hero.getBoundingClientRect().x;
    heroPositionY = hero.getBoundingClientRect().y;
    console.log("===== Hero VIEWPORT Position ======")
    console.log("X: " + heroPositionX + " Y: " + heroPositionY);


    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = ["r2c4"];

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
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("MAP 2 EST DECLENCHÉ")
}

// ================== MOVEMENTS FOR THE THIRD MAP 

function moveHeroMap03(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;


    // Position du héro via Grid :string
    heroPosition = GetGridPositionHero(hero);
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(heroPosition);
    // Position du héro selon le viewport :float
    heroPositionX = hero.getBoundingClientRect().x;
    heroPositionY = hero.getBoundingClientRect().y;
    console.log("===== Hero VIEWPORT Position ======")
    console.log("X: " + heroPositionX + " Y: " + heroPositionY);


    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = ["r3c4"];

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
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("MAP 3 EST DECLENCHÉ")
}


function moveHeroMap04(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;


    // Position du héro via Grid :string
    heroPosition = GetGridPositionHero(hero);
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(heroPosition);
    // Position du héro selon le viewport :float
    heroPositionX = hero.getBoundingClientRect().x;
    heroPositionY = hero.getBoundingClientRect().y;
    console.log("===== Hero VIEWPORT Position ======")
    console.log("X: " + heroPositionX + " Y: " + heroPositionY);


    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    obstacle = ["r4c4"];

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
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("MAP 4 EST DECLENCHÉ")
}

GetGridPositionHero(hero)

// L'évènement sur le document

window.addEventListener("load", LoadGame);



    


