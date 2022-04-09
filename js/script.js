let ligne = 1;
let colonne = 1;
let hero = document.querySelector("#mobile");
let map = document.querySelector("#map");

let bigTreePosition = [
    [572.046875, 471.578125],
    [549.390625, 471.578125]];

function GetHeroPosition(hero) {

    
    let heroPositionX = hero.getBoundingClientRect().x;
    let heroPositionY = hero.getBoundingClientRect().y;

    console.log(hero);
    console.log("==== hero position X ======");
    console.log(heroPositionX);
    console.log("==== hero position Y ======");
    console.log(heroPositionY);
  
    let heroPosition = [heroPositionX, heroPositionY];

    return heroPosition;
}

function GetObstaclePosition() {

    let obstacle = document.querySelector(".border-trees");
    let obstaclePositionY = obstacle.getBoundingClientRect().y;
    let obstaclePositionX = obstacle.getBoundingClientRect().x;

    console.log(obstacle);
    console.log("==== obstacle X======");
    console.log(obstaclePositionX);
    console.log("==== obstacle Y======");
    console.log(obstaclePositionY);
   

    let obstaclePosition = [obstaclePositionX, obstaclePositionY];

    return obstaclePosition;
}

function forbadeMovement() {
    let heroPos = GetHeroPosition(hero);
    let obstaclePos = GetObstaclePosition();

    console.log("===== hero POS:")
    console.log("Y:"+heroPos[0]+"  X:"+heroPos[1]);
    console.log("=== forbidden obstacle POS:")
    console.log("Y:"+obstaclePos[0]+"  X:"+obstaclePos[1]);

}

// La fonction de déplacement
function moveHero(event) {
    let touche = event.key;

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {
            ligne--; // On enlève 1 à la ligne
        }
        // console.log("haut, ligne : " + ligne);
    }
    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 30) {
            ligne++; // On ajoute 1 à la ligne
        }
        // console.log("bas, ligne : " + ligne);
    }
    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {
            colonne--; // On enlève 1 à la colonne
        }
        // console.log("gauche, colonne : " + colonne);
    }
    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 30) {
            colonne++; // On ajoute 1 à la colonne
        }
        // console.log("droite, colonne : " + colonne);
    }


    // Positionner l'élément
    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;

    let heroPositionX = hero.getBoundingClientRect().x;
    let heroPositionY = hero.getBoundingClientRect().y;

    let heroPosition = [heroPositionX, heroPositionY];

    console.log("=== GET HERO POSITION with getbounding ======= ");
    console.log(heroPosition);
    console.log("X position:"+ heroPositionX);
    console.log("Y position:" + heroPositionY);

  
    let obstaclePosition = GetObstaclePosition();
        
    console.log("==== OBSTACLE POSITION with getbounding=====");
    console.log(obstaclePosition);
    console.log(map.style);
    if ((heroPosition[0] === obstaclePosition[0]) && (heroPosition[1] === obstaclePosition[1])) {
        window.alert("obstacle");
        console.log("FFFFFFFFFFFFF");
        
    }

}

GetObstaclePosition();
GetHeroPosition(hero);
forbadeMovement();

console.log("=================================================")
console.log("=================================================")


// L'évènement sur le document
document.onkeyup = moveHero;