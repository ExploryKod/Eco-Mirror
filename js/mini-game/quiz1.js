// ==================== Games in tranhuman camp
let currentQuiz = 0;
let correctAnswer = 0;
let score = 0;

let inventory = [];

const contentInventory = document.getElementById("contentInventory");

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

const quiz = document.getElementById('quiz-quizz')

const answerEls = document.querySelectorAll('.answer-quizz')
const questionEl = document.getElementById('question-quizz')
const a_text = document.getElementById('a_text-quizz')
const b_text = document.getElementById('b_text-quizz')
const c_text = document.getElementById('c_text-quizz')
const d_text = document.getElementById('d_text-quizz')
const submitBtn = document.getElementById('submit-quizz')

/* Function start game quiz */
function openFormQuiz() {
    document.getElementById("popupForm-quizz").style.display = "block";

}
/* END */

const btnplay = document.querySelector(".open-button-quizz");
btnplay.addEventListener("click", loadQuiz);


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
        } else {
            win();

        }
    }
})


function win() {

    if (score == 15) {
        quiz.innerHTML =
            `
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
        quiz.innerHTML =
            `<h3>${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre score final n'est pas suffisant, les transhumains vous font donc remonter le temps:<br/> vous allez revenir au vaisseau sans aucun souvenir !</p>
           <button onclick="location.reload()">Rejouer</button>`


    } else if (score == 5) {
        quiz.innerHTML =
            `  <h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre score final n'est pas suffisant, les transhumains vous font donc remonter le temps:<br/> vous allez revenir au vaisseau sans aucun souvenir !</p>
           <button onclick="location.reload()">Rejouer</button>`

    } else if (score == 0) {
        // We call gameOver() function that is in quiz1.js file
        quiz.innerHTML =
            `<h3>Oups! ${correctAnswer}/${quizQuestion.length} réponses correctes</h3>
           <h3>Votre score final : <em> ${score}</em></h3> 
           <p>Votre mission a échoué et pour survivre vous vous transformez en transhumain</p>
           <button onclick="GameOver();";">Se transformer</button>`
    }

}

function save1() {


    if (score === 15) {

        inventory.push('./ressources/inventory/carteDigi.png');
        const img = document.createElement("img");
        img.src = './ressources/inventory/carteDigi.png';
        img.id = 'imgObject';
        contentInventory.appendChild(img);
        document.querySelector('.open-button-quizz').style.display = 'none';
        document.querySelector('.button2').style.display = 'block';
    }
    document.getElementById("popupForm-quizz").style.display = "none";

}