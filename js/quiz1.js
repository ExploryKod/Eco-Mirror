// ==================== Quiz game in tranhuman camp

// Variables
let currentQuiz = 0;
let correctAnswer = 0;
let score = 0;

const quiz = document.getElementById('quiz-quizz')

const answerEls = document.querySelectorAll('.answer-quizz')
const questionEl = document.getElementById('question-quizz')
const a_text = document.getElementById('a_text-quizz')
const b_text = document.getElementById('b_text-quizz')
const c_text = document.getElementById('c_text-quizz')
const d_text = document.getElementById('d_text-quizz')
const submitBtn = document.getElementById('submit-quizz')

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


const btnplay = document.querySelector(".open-button-quizz");


/* Functions and events to start the quiz */

function openFormQuiz() {
    document.getElementById("popupForm-quizz").style.display = "block";

}




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

function GameOver() {
    document.location.href = "game-over.html";
}

btnplay.addEventListener("click", loadQuiz);

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

