let hero = document.querySelector("#mobile");
let map = document.querySelector("#map");
let ligne = 1;
let colonne = 1;


function GetGridPositionHero(hero) {

    let heroGridPositionRow = getComputedStyle(hero).gridRow;
    let heroGridPositionColumn = getComputedStyle(hero).gridColumn;
    
    let heroGridPosition = [heroGridPositionRow, heroGridPositionColumn];

    return heroGridPosition;
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
    
    let bigTree = document.querySelector("#big-tree");
    let bigTreeGridPositionRow = getComputedStyle(bigTree).gridRow;
    let bigTreeGridPositionColumn = getComputedStyle(bigTree).gridColumn;

    let bigTreeGridPosition = [bigTreeGridPositionRow, bigTreeGridPositionColumn];
    
    console.log(">>>>>>> big tree grid Row-Col position >>>>>>>>")
    console.log(bigTreeGridPosition);

    return bigTreeGridPosition;
}

function moveHero(event) {
    
    let touche = event.key;

    console.log("--- touche pressée: ---------")
    console.log(touche)

    // Position de l'obstacle 
    ObstaclePosition = ObstacleGridPosition()
    let a = ObstaclePosition.join("").toString();
    console.log("=== Big Tree position Row Col ==========")
    console.log(a);

    heroGridPosition = GetGridPositionHero(hero);
    let b = heroGridPosition.join("").toString();
    console.log("===== Hero Grid Row-Col Position string ======")
    console.log(b);

    // fleche haut
    if (touche == "ArrowUp") {
            if ((ligne > 1) && (a !== b)) {
                ligne--; // On enlève 1 à la ligne
               // console.log("haut, ligne : " + ligne);
        } else {
            hero.style.gridRow = ligne--;
        }
    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if ((ligne < 30) && (a !== b)) {
                ligne++; // On ajoute 1 à la ligne

            } else {
                hero.style.gridRow = ligne;
            }
            // console.log("bas, ligne : " + ligne);
        }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if ((colonne > 1) && (a !== b)){
                colonne--; // On enlève 1 à la colonne

            } else {
                colonne--;
            }
            // console.log("gauche, colonne : " + colonne);
        }

    // fleche droite
    else if (touche == "ArrowRight") {
        if ((colonne < 30) && (a !== b)) {
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


console.log("=================================================")
console.log("=================================================")


// L'évènement sur le document
document.onkeyup = moveHero;