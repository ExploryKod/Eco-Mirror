let currentQuiz = 0
let correctAnswer = 0
let score = 0
let clic = 1
let inventory = []

const contentInventory = document.getElementById("contentInventory");

const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const quizQuestion = [{
    question: "Quel est la part de gaz à effet de serre auquel contribue la pollution numérique?",
    a: "15%",
    b: "1%",
    c: "4%",
    d: "8%",
    correct: "c",
},
{
    question: "Dans les outils suivant, quels sont ceux qui peuvent être utilisé pour réduire votre pollution numérique?",
    a: "Cleannetwork",
    b: "Cleanfox",
    c: "La corbeille dans votre boîte e-mail",
    d: "Greenanalyser",
    correct: "b",
},
{
    question: "Qui contribue le plus à la pollution numérique parmis les acteurs suivants :",
    a: "Les fabricants du hardware",
    b: "Les développeurs web",
    c: "Vous, en tant qu'utilisateur peu scrupuleux consommateur de streaming.",
    d: "Votre chat quand vous le laissez jouer à L.O.L sans surveillance",
    correct: "a",
},

];


/* Function start game quiz */
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    console.log("j'ouvre le quiz");
}


/* END */

const btnplay = document.querySelector(".open-button");
const btnplayId = document.querySelector("#open-quiz");

btnplay.addEventListener("click", loadQuiz);
btnplayId.addEventListener("click", openForm);

function loadQuiz() {

    deselectAnswers()

    const currentQuizQuestion = quizQuestion[currentQuiz]

    questionEl.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizQuestion[currentQuiz].correct) {
            correctAnswer++
            score += 5;
        }

        currentQuiz++

        if (currentQuiz < quizQuestion.length) {
            loadQuiz()
            console.log("rejouer")
        } else {
            win();

        }
    }
})

/* window.onload = */
function win() {
    console.log("la fonction win est appelé");
    if (score == 15) {

        quiz.innerHTML = `
        
           <h3>Bravo! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3>
           <h3>Vous avez gagné une carte digitale qui vous permet de passer au niveau suivant</h3>
         <div class="cartedigi">  <img src="../image/carteDigi.png" alt="carte digital"  >
         <img src="../image/cartefind.png" alt="carte digital"  >
         </div>
           <a href=''>  
           
           </a>
           <button class="btn" onclick="save1();">SAVE</button>
           

           
           <div class="elcontent">
           <img src="../image/mentorGuide.png" alt="carte digital"  >
           </div>
           `
    } else if (score == 10) {
        quiz.innerHTML = `
           <h3>${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <span class="affichage" onclick="closeForm()">&times;</span>
           <button onclick="location.reload()">Rejouer</button>
           
           `


    } else if (score == 5) {
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <button onclick="location.reload()">Rejouer</button>
           `

    } else if (score == 0) {
        quiz.innerHTML = `
           <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <button onclick="location.reload()">Rejouer</button>
           `
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
        document.querySelector('.open-button').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
    }
    document.getElementById("popupForm").style.display = "none";

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




// window.onload = function view() {
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
        img.src = './image/potion1.png';
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