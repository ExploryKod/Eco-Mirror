// Position initiale de mon élément
let ligne = 1;
let colonne = 1;

// La fonction de déplacement
function deplacement(event) {
    let touche = event.key;

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {
            ligne--; // On enlève 1 à la ligne
        }
        console.log("haut, ligne : " + ligne);
    }
    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 9) {
            ligne++; // On ajoute 1 à la ligne
        }
        console.log("bas, ligne : " + ligne);
    }
    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {
            colonne--; // On enlève 1 à la colonne
        }
        console.log("gauche, colonne : " + colonne);
    }
    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 9) {
            colonne++; // On ajoute 1 à la colonne
        }
        console.log("droite, colonne : " + colonne);
    }

    // Récupération de l'élément
    let mobile = document.querySelector("#mobile");

    // Positionner l'élément
    mobile.style.gridColumn = colonne;
    mobile.style.gridRow = ligne;
}

// L'évènement sur le document
document.onkeyup = deplacement;