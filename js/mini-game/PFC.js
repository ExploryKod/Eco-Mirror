function openForm3PFC() {
    document.getElementById("popupForm3-PFC").style.display = "block";

}

//variable contenant tous les boutons
const buttons = document.querySelectorAll("button");

// fonction des boutons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const moi = buttons[i].name;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].name;
        let resultat_PFC = "";

        if ((moi === "Pierre" && robot === "Ciseau") || (moi === "Feuille" && robot === "Pierre") || (moi === "Ciseau" && robot === "feuille")) {


            resultat_PFC = " <p> <em> Félicitation ! </em> <br> Vous avez gagné un stabilisateur pour rejoindre votre vaisseau </p> ";

            document.querySelector(".resultat_PFC").innerHTML = `
           <div class="elPFC"> 
           <p class="winPFC"> ${resultat_PFC} </p>
          <p> vous avez joué : ${moi} </p>
          <p> l'adversaire a joué : ${robot} </p>
            
            <button class="btn btnSavePFC" onclick="save3();">SAVE</button>
           </div>
            
             
            `
            score += 15


        } else if (moi === robot) {

            resultat_PFC = "Egalité";
            document.querySelector(".resultat_PFC").innerHTML = `
            <p>vous avez joué : ${moi} </p></br>
            <p> l'adversaire a joué : ${robot} </p>
            <p> ${resultat_PFC}</p>
            `;

        } else {


            resultat_PFC = "vous avez perdu !"
            document.querySelector(".resultat_PFC").innerHTML = `
            <p>vous avez joué : ${moi}</p> </br>
            <p> l'adversaire a joué : ${robot} </p>
           <p>  ${resultat_PFC} </p>
            `;

        }
        //pour afficher les resultats




    });
}

function save3() {


    if (score === 45) {

        inventory.push('./ressources/inventory/bouclier.png');
        const img = document.createElement("img");
        img.src = './ressources/inventory/bouclier.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button3').style.display = 'none';

    }
    document.getElementById("popupForm3-PFC").style.display = "none";

}