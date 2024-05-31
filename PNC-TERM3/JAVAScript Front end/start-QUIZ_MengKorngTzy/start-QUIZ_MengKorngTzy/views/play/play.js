// DOMS ELEMENTS  ---------------------------------------------------------
const domStart = document.querySelector("#start");
const domQuiz = document.querySelector("#quiz");
const domQuestion = document.querySelector("#question");
const domChoiceA = document.querySelector("#A");
const domChoiceB = document.querySelector("#B");
const domChoiceC = document.querySelector("#C");
const domChoiceD = document.querySelector("#D");
const domScore = document.querySelector("#score");
const domProgressValue = document.querySelector(".value");
let runningQuestionIndex = 0;
let score = 0;
let progressLength = 0;
let id = null;

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choiceA: "The <head> section",
    choiceB: "Both of <head> and <body> section",
    choiceC: "The <body> section",
    choiceD: "I don't know !",
    correct: "B",
  },
  {
    title: "<p id='demo'>Hello World!</p>",
    choiceA: "document.getElementById('demo').innerHTML = 'Hello World!'",
    choiceB: "#demo.innerHTML = 'Hello World!'",
    choiceC: "document.getElementByName('p').innerHTML = 'Hello World!'",
    choiceD: "I don't know !",
    correct: "A",
  },
];

// Get the "questions" in Local Storage from "edit.js"
function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage != null) {
    questions = questionsStorage;
  }
}

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

// Show each questions
function renderQuestion() {
  startRun();
  domQuestion.textContent = questions[runningQuestionIndex].title;
  domChoiceA.textContent = questions[runningQuestionIndex].choiceA;
  domChoiceB.textContent = questions[runningQuestionIndex].choiceB;
  domChoiceC.textContent = questions[runningQuestionIndex].choiceC;
  domChoiceD.textContent = questions[runningQuestionIndex].choiceD;
}

// Increase score by 1 if we selected the correct option
function checkAnswer(choice) {
  if (choice == questions[runningQuestionIndex].correct) {
    score++;
  }
  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    startRun();
    renderQuestion();
  } else {
    renderSCore();
  }
}

// Show the result
function renderSCore() {
  hide(domQuiz);
  show(domScore);

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let comment = "AMAZING !";
  let image = "../../img/100.png";

  switch (true) {
    case scorePerCent <= 20:
      comment = "HUMM !";
      image = "../../img/20.png";
      break;
    case scorePerCent <= 40:
      comment = "YOU CAN IMPROVE !";
      image = "../../img/40.png";
      break;
    case scorePerCent <= 60:
      comment = "NOT BAD !";
      image = "../../img/60.png";
      break;
    case scorePerCent <= 80:
      comment = "GOOD !";
      image = "../../img/80.png";
      break;
  }
  domScore.innerHTML = "<img src=" + image + ">";
  domScore.innerHTML += "<p>" + comment + " : " + scorePerCent + " %</p>";
}

function progress() {
  clearTimeout(id)
  if (progressLength >= 100) {
    runningQuestionIndex++;
    if (runningQuestionIndex < questions.length) {
      renderQuestion()
    }else {
      renderSCore();
    }
    progressLength = 0;
    return
  }
  progressLength += 0.3
  domProgressValue.style.width = progressLength + "%";
  id = setTimeout(progress, 20);
}

function startRun() {
  progressLength = 0;
  progress();
}

// Start Quiz
domStart.onclick = () => {
  startRun();
  hide(domStart);
  show(domQuiz);
  renderQuestion();
};

loadQuestions();