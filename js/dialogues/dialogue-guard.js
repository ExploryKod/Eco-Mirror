const buttonOpenGuard = document.querySelector(".open-button-dial-guard");
const buttonCloseGuard = document.querySelector(".close-button-dial-guard");

const messageContainerGuardian = document.querySelector(".message-container-guard");
const button1_Guard = document.getElementById('answer1-guard');
const button2_Guard = document.getElementById('answer2-guard');


function openFormDialGuard() {
    hero.style.display = "none";
    document.getElementById("popupForm-dial-guard").style.display = "block";
}

function closeFormDialGuard() {
    document.getElementById("popupForm-dial-guard").style.display = "none";
    hero.style.display = "flex";
    closeDialogueContainerWithGuard();
}

function closeDialogueContainerWithGuard() {
    messageContainerGuardian.style.display = "none";
    mapImage.style.opacity = 1;
    pnj01.style.opacity = 1;
    pnj02.style.opacity = 1;
    object01.style.opacity = 1;

}

// Initial exchange
function initialTextGuard() {
    document.getElementById('textguard').innerText = "'Salutation Humanoïde, Je suis le gardien. Le guide ne t'a pas dis ? Ici tu ne peux pas passer.'" 
    document.getElementById('answer1-guard').innerText = "'Ah mais de ce fait y a t-il un objet que je peux utiliser pour passer ?'" 
    document.getElementById('answer2-guard').innerText = "'Mais alors, que faire pour passer ?'" 
    button1_Guard.onclick = answerOneGuard;
    button2_Guard.onclick = answerTwoGuard;
}


// ========== Answers ============ 


// First answer
function answerOneGuard() {

    document.getElementById('textguard').innerText = "'Et quoi encore ? Il n'y a pas d'objets que je sache, sors d'ici vivant, c'est déjà bien'" 
    document.getElementById('answer1-guard').innerText = "'OK! mais que faire alors ?'" 
    document.getElementById('answer2-guard').innerText = "'OK! Quelle direction me conseillerais - tu ?'" 
    button1_Guard.onclick = answer1_1_Guard;
    button2_Guard.onclick = answer1_2_Guard;
}


// answer 1.1
function answer1_1_Guard() {
    document.getElementById('textguard').innerText = "'Eh bien notre planete a assez souffert, nous avons juste besoin que tu la traverse sans l'abimer plus !'"
}
// answer 1.2
function answer1_2_Guard() {
    document.getElementById('textguard').innerText = "'Va vers le sud pour trouver les transhumains, eux seuls ont les artefacts et la nourriture indispensable pour survivre !'"
}

// answer 2
function answerTwoGuard() {
    document.getElementById('textguard').innerText = "'Une série de terribles jeux vont te tester'"
    document.getElementById('answer1-guard').innerText = "'Qu'est ce que ces jeux m'apporteront?'"
    document.getElementById('answer2-guard').innerText = "'D'accord. Il y aura un grand défi ?'"
    button1.onclick = answer2_1_Guard;
    button2.onclick = answer2_2_Guard;
}

// answer 2.1
function answer2_1_Guard() {
    document.getElementById('textguide').innerText = "'Cela t'apporte la survie mon cher ! Le seul moyen pour sortir d'ici vivant est d'oser jouer en allant chez les transhumains.'"// Changer le texte2.1 du guide
}

// answer 2.2
function answer2_2_Guard() {
    document.getElementById('textguide').innerText = "'Oh que oui...'"
}

buttonOpenGuard.addEventListener("click", openFormDialGuard);
buttonCloseGuard.addEventListener("click", closeDialogueContainerWithGuard);
buttonOpen.addEventListener("click", initialTextGuard);