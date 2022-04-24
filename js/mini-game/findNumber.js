function openForm2Find() {
    document.getElementById("popupForm2-find").style.display = "block";

}

// Création du randint()
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Générer un nombre entre 1 et 100
const genererNombreMystere = () => {
    const MysteryNumber = randint(1, 100);

    return MysteryNumber;
}

let numeroTentative = 1
    // Générer notre nombre à trouver
const nombreATrouver = genererNombreMystere()
    // La triche(savoir le nombre mystère)
    // console.log(nombreATrouver)

// Fonction du jeu 
const proposerNombre = () => {
    // Récupération du champs avec le nombre
    const input = document.getElementById('input-nombre-find')

    // Récupération la valeur du champs
    const valeur = input.value

    // Transformation de la valeur texte en nombre
    const nombre = parseInt(valeur, 10)

    // Afficher le texte sur le HTML
    const divProposition = document.createElement('div')
    divProposition.id = 'tentative_divi';

    divProposition.textContent = 'Tentative ' + numeroTentative

    const contain = document.getElementById('contain-find')

    contain.insertBefore(divProposition, contain.firstChild)


    // Comparaison du nombre mystère et du nombre proposer
    // Le nombre proposer est égal au nombre mystère
    if (nombre === nombreATrouver) {
        // Afficher Bravo

        contain.innerHTML = ` 
        <div id="diviBravo"> 
        <p class="bravo">Bravo 👏🎉!! Le chiffre mystère était: ${nombreATrouver}</p>
        <p class="pBravo">Vous avez gagné un Potion de vie!</p>
        <p class="pBravo">Sauvegarder la partie</p>
          </div>
        <img src="./ressources/inventory/potion.png" alt="potion" >
        `
        document.querySelector('.btnSave-find').style.display = 'inline-block';

        score += 15
        return;
        // Finir
    } else {
        // Le nombre est faux
        // Si le nombre est plus grand
        if (nombreATrouver > nombre) {
            // Afficher plus grand

            const divPlusgrand = document.createElement('div')
            divPlusgrand.id = 'grand_divi'
            divPlusgrand.textContent = "C'est plus 👍"

            contain.insertBefore(divPlusgrand, contain.firstChild)


        } else {
            // Si le nombre est plus petit
            // Afficher plus petit

            const divPluspetit = document.createElement('div')
            divPluspetit.id = 'petit_divi'

            divPluspetit.textContent = "C'est moins 👎"

            contain.insertBefore(divPluspetit, contain.firstChild)

        }
        // Ajout +1 par rapport aux nb de tentatives
        numeroTentative += 1;
    }
}

// Récupération du boutton
// Lorsqu'il y a un click, effectuer une proposition de nombre
const boutton = document.getElementById('button-proposer-find')
boutton.addEventListener('click', proposerNombre)



function save2() {

    if (score === 30) {
        inventory.push('./ressources/inventory/potion.png');
        const img = document.createElement("img");
        img.src = './ressources/inventory/potion.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button2').style.display = 'none';
        document.querySelector('.button3').style.display = 'block';
    }
    document.getElementById("popupForm2-find").style.display = "none";

}