
const buttonOpen = document.querySelector(".open-button");
const buttonClose = document.querySelector(".close-button");
const characterHero = document.querySelector(".hero");
const guideDialogueContainer = document.querySelector("#dialogue-container-guide");
const mapImageBackground = document.querySelector("#image-map");

const pnjOne = document.querySelector("#pnj-1");
const pnjTwo = document.querySelector("#pnj-2");
const objectOne = document.querySelector("#object-1");
const objectTwo = document.querySelector("#object-2");

function openForm() {
    characterHero.style.display = "none";
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    characterHero.style.display = "flex";
}

function closeDialogueContainer() {

    guideDialogueContainer.style.display = "none";
    mapImageBackground.style.opacity = 1;
    pnjOne.style.opacity = 1;
    pnjTwo.style.opacity = 1; 
    objectOne.style.opacity = 1;
    objectTwo.style.opacity = 1;

}

buttonClose.addEventListener("click", closeDialogueContainer);

// Fonctions de réponses pour le guide

function answer1() {
    document.getElementById('textguide').innerText = "'Les objets sont dispersés un peu partout sur notre planète. A toi de te déplacer pour les trouvez.'" // Changer le texte1 du guide
    document.getElementById('answer1').innerText = "'OK! Quels sont les objets disponible?'" //Changer notre réponse1.1
    document.getElementById('answer2').innerText = "'OK! Quelle direction me conseillerais - tu ?'" //Changer notre réponse1.2
    boutton1.onclick = answer1_1;
    boutton2.onclick = answer1_2;

}
const boutton1 = document.getElementById('answer1');
boutton1.onclick = answer1;

// Réponse 1.1
function answer1_1() {
    document.getElementById('textguide').innerText = "'Tu devras faire attention à bien te nourrir ou alimenter ton masque en énergie: les arbres enlèvent de la vie à notre belle planète mais te donne beaucoup, les aliments sains sont rare et te redonnent de la vie sans égratigner notre planète, demande aussi au gardien de la porte'"// Changer le texte1.1 du guide
}
// Réponse 1.2
function answer1_2() {
    document.getElementById('textguide').innerText = "'Je te conseillerai d'aller vers l'est !'"// Changer le texte1.2 du guide
}

// Réponse 2
function answer2() {
    document.getElementById('textguide').innerText = "'Il y aura un quizz pour savoir si tu mérite de traverser notre monde si fragile et pour le reste, à toi de le découvrir.'"// Changer le texte2 du guide
    document.getElementById('answer1').innerText = "'Qu'est ce que ces minijeux m'apporteront?'"//Changer notre réponse2.1
    document.getElementById('answer2').innerText = "'D'accord. Il y aura un boss ?'"//Changer notre réponse2.2
    boutton1.onclick = answer2_1;
    boutton2.onclick = answer2_2;
}
const boutton2 = document.getElementById('answer2');
boutton2.onclick = answer2;

// Réponse 2.1
function answer2_1() {
    document.getElementById('textguide').innerText = "'Ces minijuex te permettront de passer dans une autre partie de la map ou bien te permettront d'obtenir des objets.'"// Changer le texte2.1 du guide
}

// Réponse 2.2
function answer2_2() {
    document.getElementById('textguide').innerText = "'Oui il s'agit du minijeux... (roulement de tambour) LE MASTERMIND!!'"// Changer le texte2.2 du guide
}
