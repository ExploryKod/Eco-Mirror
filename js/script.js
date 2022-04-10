
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
        let ligne = 19;
        let colonne = 1;
        let LigneColonne = [ligne,colonne];
        return LigneColonne;

    } 
}

function GetGridPositionHero(hero) {

    let heroGridPositionRow = getComputedStyle(hero).gridRow;
    let heroGridPositionColumn = getComputedStyle(hero).gridColumn;
    
    let heroGridPosition = [heroGridPositionRow, heroGridPositionColumn];

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

function moveHero(event) {

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

    console.log("===== OPERATION DE MOUVEMENTS =======")

    let touche = event.key;

    console.log("--- touche pressée: ---------")
    console.log(touche)

    // Position de l'obstacle 
    ObstaclePosition = ObstacleGridPosition()
    let a = ObstaclePosition.join("").toString();
    

    // Position du héro via Grid :string
    heroGridPosition = GetGridPositionHero(hero);
    let h = heroGridPosition.join("").toString();
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(h);

    // Position grid de l'exit de la map 1 sous forme de string.
    mapOneExitPosition = GetExitGridPosition("1");
    console.log("EXIT GRID POSITION ROW-COL:"+mapOneExitPosition);
    
    console.log("HEROGP: "+h+" EXITGP "+mapOneExitPosition)

    if(h === mapOneExitPosition) {
        console.log("ICI LA SORTIE");
        alert("ici la sortie");
        mapOne.style.display = "none";
        mapTwo.style.display = "grid";
    }
    
    // Position grid de l'exit de la map 2 :string
    mapTwoExitPosition = GetExitGridPosition("2");
    console.log("HEROGP: " + h + " EXITGP " + mapTwoExitPosition)
    
    if (h === mapTwoExitPosition) {
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