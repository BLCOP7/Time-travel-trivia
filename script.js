const questions = [
    {
        era: "Ancient Egypt",
        question: "Who was the first female pharaoh of Egypt?",
        options: ["Hatshepsut", "Nefertiti", "Cleopatra", "Nefertari"],
        answer: 0
    },
    {
        era: "Medieval Europe",
        question: "What was the primary language of the medieval church?",
        options: ["Latin", "Greek", "Hebrew", "English"],
        answer: 0
    },
    {
        era: "The Roaring Twenties",
        question: "Which amendment to the U.S. Constitution granted women the right to vote?",
        options: ["18th", "19th", "20th", "21st"],
        answer: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("era").innerText = `Era: ${questionData.era}`;
    document.getElementById("question").innerText = questionData.question;
    const options = document.querySelectorAll("#options button");
    options.forEach((button, index) => {
        button.innerText = questionData.options[index];
    });
    document.getElementById("result").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    const result = document.getElementById("result");
    if (selectedOption === questionData.answer) {
        result.innerText = "Correct! Time traveling to the next era...";
    } else {
        result.innerText = "Wrong! Try again.";
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert("Congratulations! You have completed the game.");
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

window.onload = loadQuestion;
