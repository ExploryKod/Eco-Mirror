const buttonOpenGuard = document.querySelector(".open-button-dial-guard");
const buttonCloseGuard = document.querySelector(".close-button-dial-guard");
const characterHeroFaceGuard = document.querySelector(".hero");

const messageContainerGuardian = document.querySelector(".message-container-guard");
const mapImageBackgroundGuard = document.querySelector("#image-map");

const button1_Guard = document.getElementById('answer1-guard');
const button2_Guard = document.getElementById('answer2-guard');

const pnjOneGuard = document.querySelector("#pnj-1");
const pnjTwoGuard = document.querySelector("#pnj-2");
const objectOneGuard = document.querySelector("#object-1");
const objectTwoGuard = document.querySelector("#object-2");

function openFormDialGuard() {
    characterHeroFaceGuard.style.display = "none";
    document.getElementById("popupForm-dial-guard").style.display = "block";
}

function closeFormDialGuard() {
    document.getElementById("popupForm-dial-guard").style.display = "none";
    characterHeroFaceGuard.style.display = "flex";
}

function closeDialogueContainerWithGuard() {
    messageContainerGuardian.style.display = "none";
    mapImageBackgroundGuard.style.opacity = 1;
    pnjOneGuard.style.opacity = 1;
    pnjTwoGuard.style.opacity = 1;
    objectOneGuard.style.opacity = 1;
    objectTwoGuard.style.opacity = 1;


}



// ========== Answers ============ 


// First answer
function answerOneGuard() {

    document.getElementById('textguard').innerText = "'Et quoi encore ? Il n'y a pas d'objets que je sache, sors d'ici vivant, c'est déjà bien'" // Changer le texte1 du guide
    document.getElementById('answer1-guard').innerText = "'OK! mais que faire alors ?'" //Changer notre réponse1.1
    document.getElementById('answer2-guard').innerText = "'OK! Quelle direction me conseillerais - tu ?'" //Changer notre réponse1.2
    button1_Guard.onclick = answer1_1_Guard;
    button2_Guard.onclick = answer1_2_Guard;
}


// answer 1.1
function answer1_1_Guard() {
    document.getElementById('textguard').innerText = "'Eh bien notre planète a assez souffert, nous n'avons qu'un besoin : que tu la traverse sans l'abîmer plus !'"// Changer le texte1.1 du guide
}
// answer 1.2
function answer1_2_Guard() {
    document.getElementById('textguard').innerText = "'Va vers le sud comme je t'ai dis pour trouver les transhumains, eux seuls ont ce que tu cherches !'"// Changer le texte1.2 du guide
}

// answer 2
function answerTwoGuard() {
    document.getElementById('textguard').innerText = "'Une série de terribles jeux vont te tester'"// Changer le texte2 du guide
    document.getElementById('answer1-guard').innerText = "'Qu'est ce que ces jeux m'apporteront?'"//Changer notre réponse2.1
    document.getElementById('answer2-guard').innerText = "'D'accord. Il y aura un grand défi ?'"//Changer notre réponse2.2
    button1.onclick = answer2_1_Guard;
    button2.onclick = answer2_2_Guard;
}

// answer 2.1
function answer2_1_Guard() {
    document.getElementById('textguide').innerText = "'Le seul moyen pour sortir d'ici vivant est d'oser jouer en allant chez les transhumains.'"// Changer le texte2.1 du guide
}

// answer 2.2
function answer2_2_Guard() {
    document.getElementById('textguide').innerText = "'Oh que oui...'"// Changer le texte2.2 du guide
}

buttonOpenGuard.addEventListener("click", openFormDialGuard);
buttonCloseGuard.addEventListener("click", closeDialogueContainerWithGuard);
button2_Guard.onclick = answerTwoGuard;
button1_Guard.onclick = answerOneGuard;