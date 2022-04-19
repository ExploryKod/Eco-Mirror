
const buttonOpen = document.querySelector(".open-button");
const buttonClose = document.querySelector(".close-button");
const characterHero = document.querySelector(".hero");
const dialogueContainerMessage = document.querySelector("#dialogue-container");
const mapImageBackground = document.querySelector("#image-map");
// Fonction de Farmata
function openForm() {
    characterHero.style.display = "none";
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    characterHero.style.display = "flex";
}

function closeDialogueContainer() {

    dialogueContainerMessage.style.display = "none";
    mapImageBackground.style.opacity = 1;
}

buttonClose.addEventListener("click", closeDialogueContainer);

// Mes Fonctions interactions dialogue RPG

function answer1() {
    document.getElementById('textguide').innerText = "Le guide: Réponse par rapport à answer 1."
    document.getElementById('answer1').innerText = "Newanswer1.1"
    document.getElementById('answer2').innerText = "Newanswer1.2"
}
const boutton1 = document.getElementById('answer1');
boutton1.addEventListener('click', answer1)

function answer2() {
    document.getElementById('textguide').innerText = "Le guide: Réponse par rapport à answer 2."
    document.getElementById('answer1').innerText = "Newanswer2.1"
    document.getElementById('answer2').innerText = "Newanswer2.2"
}
const boutton2 = document.getElementById('answer2');
boutton2.addEventListener('click', answer2)