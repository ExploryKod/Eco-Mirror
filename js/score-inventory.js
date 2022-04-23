
// Score and inventory are managed here

let inventory = [];
let itemInventory = [];

const contentInventory = document.getElementById("contentInventory");

// Function : information given to the hero depending on its score 

function win() {
    console.log("la fonction win est appelé");
    if (score == 15) {
        quiz.innerHTML = `
        
           <h3>Bravo! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3>
           <h3>Vous avez gagné une carte digitale qui vous permet de passer au niveau suivant</h3>
         <div class="cartedigi"> 
         <img src="./ressources/inventory/carteDigi.png" alt="carte digital"  >
         </div>
           <a href=''>  
           </a>
           <button class="btn" onclick="save1();">SAVE</button>
           <div class="elcontent">
           <img src="./ressources/pnj/mentorGuide.png" alt="carte digital"  >
           </div>`

    } else if (score == 10) {
        quiz.innerHTML = `
           <h3>${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre score final n'est pas suffisant, les transhumains vous font donc remonter le temps:<br/> vous allez revenir au vaisseau sans aucun souvenir !</p>
           <button onclick="location.reload()">Rejouer</button>`
       

    } else if (score == 5) {
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre score final n'est pas suffisant, les transhumains vous font donc remonter le temps:<br/> vous allez revenir au vaisseau sans aucun souvenir !</p>
           <button onclick="location.reload()">Rejouer</button>`

    } else if (score == 0) {
        // We call gameOver() function that is in quiz1.js file
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre mission a échoué et pour survivre vous vous transformez en transhumain</p>
           <button onclick="GameOver();";">Se transformer</button>`
    }
   
}

function save1() {
    console.log("le score 1");
    console.log(score);

    if (score === 15) {
        console.log('push image');
        inventory.push('./image/carteDigi.png');
        const img = document.createElement("img");
        img.src = './image/carteDigi.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);
        document.querySelector('.open-button-quizz').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
  
    } 

    document.getElementById("popupForm-quizz").style.display = "none";

}

/* fonction save localStorage */

/* function save() {
    var new_data = score;

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("popupForm2").style.display = "none";
    document.getElementById("popupForm3").style.display = "none";

} */


// Function view : what happen to the hero depending on its score

function view() {
    console.log('marche');
    newScore = localStorage.getItem('data')
    var Score_data = JSON.parse(localStorage.getItem('data'));
    // Score_data.push(newScore);
    console.log(localStorage.getItem('data'));
    console.log(Score_data);

    if (Score_data[0] === 15) {
        console.log('push image');
        inventory.push('./image/carteDigi.png');
        const img = document.createElement("img");
        img.src = './image/carteDigi.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);
        document.querySelector('.open-button').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
    }
    if (Score_data[1] === 25) {
        console.log('round 2');
        inventory.push('./image/potion1.png');
        const img = document.createElement("img");
        img.src = './ressources/inventory/potion.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button2').style.display = 'none';
        document.querySelector('.button3').style.display = 'block';


    }
    if (Score_data[2] === 35) {
        console.log('round 3');

        inventory.push('./image/bouclier.png');
        const img = document.createElement("img");
        img.src = './image/bouclier.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);

        document.querySelector('.button3').style.display = 'none';

    }

}