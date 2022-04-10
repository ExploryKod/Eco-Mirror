
// let ButtonChangeMap = document.querySelector("#change-map-force");

let hero = document.querySelector(".hero");
let mapOne = document.querySelector("#map-one");
let mapTwo = document.querySelector("#map-two");
let mapThree = document.querySelector("#map-three");
let mapFour = document.querySelector("#map-four");

// Entry points html elements
let generalEntry = document.querySelector(".entry");
let mapOneEntry = document.querySelector("#enter-map-1");
let mapTwoEntry = document.querySelector("#enter-map-2");
let mapThreeEntry = document.querySelector("#enter-map-3");
let mapFourEntry = document.querySelector("#enter-map-4");

// Exit points html elements
let mapOneExit = document.querySelector("#exit-map-1");
let mapTwoExit = document.querySelector("#exit-map-2");
let mapThreeExit = document.querySelector("#exit-map-3");
let mapFourExit = document.querySelector("#exit-map-4");

let ligne = 1;
let colonne = 1;

function LoadGame() {
    console.log("=== OPERATIONS DE CHARGEMENT =======")

    // VARIABLES MAP ONE 
    let mapOneURL = getComputedStyle(mapOne).backgroundImage;
    let mapOneDisplayInfo = getComputedStyle(mapOne).display;
    
    console.log("Display map1 " + mapOneDisplayInfo)
    console.log("URL: " + mapOneURL);

    // Afficher MAP ONE comme carte de jeu
    mapOne.style.display = "grid";
    mapOneDisplayInfo = getComputedStyle(mapOne).display;
    console.log("Map1 display est ok: " + mapOneDisplayInfo);  

    // Si map One est bien chargé on positionne le héro à l'emplacement de l'entrée
    if (mapOneDisplayInfo === "grid") {
        console.log("la map 1 est chargée!");
        hero.style.gridRow = 19;
        hero.style.gridColumn = 1;
    } 
}

function GetGridPositionHero(hero) {

    let heroGridPositionRow = getComputedStyle(hero).gridRow;
    let heroGridPositionColumn = getComputedStyle(hero).gridColumn;
    
    let arrayHeroGridPosition = [heroGridPositionRow, heroGridPositionColumn];
    let heroGridPosition = arrayHeroGridPosition.join("").toString();
    return heroGridPosition;
}

function GetExitGridPosition(StrNumber) {

    switch(StrNumber) {
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
    
    let ArrayExitPosition = [ExitRow,ExitCol];
    let ExitStringPosition = ArrayExitPosition.join("").toString();
    return ExitStringPosition
}

function GetBorderTreeGridPosition() {

    let borderTree = document.querySelector(".border-trees");
    let borderTreeGridPositionRow = getComputedStyle(borderTree).gridRow;
    let borderTreeGridPositionColumn = getComputedStyle(borderTree).gridColumn;

    console.log(borderTree);
    console.log(">>>>>> Row border Tree======");
    console.log(borderTreePositionRow);
    console.log(">>>>> Column border Tree======");
    console.log(borderTreePositionColumn);

    let borderTreePosition = [borderTreeGridPositionRow, borderTreeGridPositionColumn];

    return borderTreePosition;
}


function ObstacleGridPosition() {
    
    let bigTree = document.querySelector(".big-tree");
    let bigTreeGridPositionRow = getComputedStyle(bigTree).gridRow;
    let bigTreeGridPositionColumn = getComputedStyle(bigTree).gridColumn;

    let bigTreeGridPosition = [bigTreeGridPositionRow, bigTreeGridPositionColumn];
    
    console.log(">>>>>>> big tree grid Row-Col position >>>>>>>>")
    console.log(bigTreeGridPosition);

    return bigTreeGridPosition;
}

function GetEntryPosition(numberStr) {

    switch (numberStr) {
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

function moveHero(event) {


    // Position du héro via Grid :string
    h = GetGridPositionHero(hero);
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(h);

    // Position de l'entrée via Grid : se fait via GetEntryPosition("1") pour carte 1.

    if ((mapOne.style.display === "grid") && (h === GetEntryPosition("1"))){
        hero.style.gridColumn = 1;
        hero.style.gridRow = 19;
        colonne = 1;
        ligne = 19;

    } else if ((mapTwo.style.display === "grid") && (h === GetEntryPosition("2"))) {
        console.log("We now are on map 2");
        colonne = 1;
        ligne = 3;
    } else {
        hero.style.gridColumn = colonne;
        hero.style.gridRow = ligne;
    }
  

    console.log("===== OPERATION DE MOUVEMENTS =======")

    let touche = event.key;

    console.log("--- touche pressée: ---------")
    console.log(touche)

    // Position de l'obstacle 
    ObstaclePosition = ObstacleGridPosition()
    let a = ObstaclePosition.join("").toString();
    


    // Position grid de l'exit de la map 1 sous forme de string.
    mapOneExitPosition = GetExitGridPosition("1");
    console.log("EXIT GRID POSITION ROW-COL:"+mapOneExitPosition);
    
    console.log("HEROGP: "+h+" EXITGP "+mapOneExitPosition)

    if((h === mapOneExitPosition) && (mapOne.style.display === "grid")) {
        console.log("ICI LA SORTIE de map 1");
        alert("ici la sortie de map 1");
        mapOne.style.display = "none";
        mapTwo.style.display = "grid";
       
    }
    
    // Position grid de l'exit de la map 2 :string
    mapTwoExitPosition = GetExitGridPosition("2");
    console.log("HEROGP: " + h + " EXITGP " + mapTwoExitPosition)

    if ((h === mapTwoExitPosition) && (mapTwo.style.display === "grid")) {
        console.log("ICI LA SORTIE de map 2");
        alert("ici la sortie de map 2");
        mapTwo.style.display = "none";
        mapThree.style.display = "grid";  
    }

    // fleche haut
    if (touche == "ArrowUp") {
            if ((ligne > 1) && (a !== h)) {
                ligne--; // On enlève 1 à la ligne
               // console.log("haut, ligne : " + ligne);
        } else {
            hero.style.gridRow = ligne--;
        }
    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if ((ligne < 30) && (a !== h)) {
                ligne++; // On ajoute 1 à la ligne

            } else {
                hero.style.gridRow = ligne;
            }
            // console.log("bas, ligne : " + ligne);
        }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if ((colonne > 1) && (a !== h)){
                colonne--; // On enlève 1 à la colonne

            } else {
                colonne--;
            }
            // console.log("gauche, colonne : " + colonne);
        }

    // fleche droite
    else if (touche == "ArrowRight") {
        if ((colonne < 30) && (a !== h)) {
                colonne++; // On ajoute 1 à la colonne

            } else {
                colonne++;
            }
        }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

    }

GetGridPositionHero(hero)
ObstacleGridPosition()


// L'évènement sur le document

window.addEventListener("load", LoadGame);
document.onkeyup = moveHero;