const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choiceText"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelectorAll(".score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Qual é o verdadeiro nome de Jon Snow?",
        choice1: "Jon Stark",
        choice2: "Aemon Targaryen",
        choice3: "Aegon Targaryen",
        answer: 3
    },
    {
        question: "A que Casa pertence Daenerys?",
        choice1: "Stark",
        choice2: "Targaryen",
        choice3: "Greyjoy",
        answer: 2
    },
    {
        question: "Qual era o nome da loba de Sansa Stark?",
        choice1: "Lady",
        choice2: "Ghost",
        choice3: "Princess", 
        answer: 1
    },
    {
        question: "Quantas temporadas teve a série?",
        choice1: "9",
        choice2: "7",
        choice3: "8",
        answer: 3
    },
    {
        question: "Como Jon Snow morreu?",
        choice1: "Esfaqueado",
        choice2: "Ele não morreu",
        choice3: "Uma flecha atravessou seu peito",
        answer: 1
    }, 
    {
        question: "Quem matou Oberyn Martell?",
        choice1: "Jaime Lannister",
        choice2: "Montanha",
        choice3: "Ele se suicidou",
        answer: 2
    },
    {
        question: "Quem matou o Rei Louco?",
        choice1: "Robert Baratheon",
        choice2: "Jaime Lannister",
        choice3: "Ned Stark",
        answer: 2
    },
    {
        question: "Como é chamado o líder do exército dos mortos?",
        choice1: "Rei da Noite",
        choice2: "Rei dos Mortos",
        choice3: "Rei das Sombras",
        answer: 1
    },
    {
        question: "Quem era a(o) amante de Renly Baratheon?",
        choice1: "Robb Stark",
        choice2: "Brienne de Tarth",
        choice3: "Loras Tyrell",
        answer: 3
    },
    {
        question: "Qual era o nome do bastardo de Robert Baratheon?",
        choice1: "Gendry",
        choice2: "Joffrey",
        choice3: "Stannis",
        answer: 1
    }
]

const scorePoints = 10;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0; 
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("mostRecentStore", score);
         
        alert("Fim");
    }

    questionCounter++;
    progressText.innerHTML = `Questão ${questionCounter} de ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerHTML = currentQuestion["choice" + number];
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        console.log(choice);

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === "correct") {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerHTML = score;
}

startGame() 







