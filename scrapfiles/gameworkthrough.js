const question = document.querySelector("#question");
const answers = Array.from(document.querySelector("#answertext"));
const scoreText = document.querySelector("#score");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: 2,

    },
    {
        question: "Who Played Jack Sparrow",
        choice1: "Johnny Depp",
        choice2: "Toby Macguire",
        choice3: "Bill Clinton",
        choice4: "Tom Hanks",
        answer: 1
    }
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 2

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return windlow.location.assign("/end.html")
    }

    questionCounter++

    const QuestionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[QuestionIndex]
    question.innerText = currentQuestion.question

    answers.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(QuestionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"
        if (classToApply === "corrrect") {
        incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}