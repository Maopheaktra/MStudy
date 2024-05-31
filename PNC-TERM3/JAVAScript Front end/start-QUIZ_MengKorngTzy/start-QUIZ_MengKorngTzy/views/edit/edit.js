// DOMS ELEMENTS  ---------------------------------------------------------
const questionsView = document.getElementById('questions-view');
const questionsDialog = document.getElementById('questions-dialog');
const questionsContainer = document.getElementById('questions-container');
const dom_score = document.querySelector("#score");
let questionPosition;

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

let runningQuestionIndex = 0;
let score = 0;

//  LOCAL STORAGE ---------------------------------------------------------
// Set questions to String and save it in Local Storage by using key "questions"
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

// Get the "questions" in Local Storage
function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage != null) {
    questions = questionsStorage;
  }
}

// Temperary function. It used when we want to clear everything in Local Storage
// localStorage.clear();

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

// This Func play two roles, when we clicked on "Create" and "Edit" 
function onCreate(event) {
  // When we clicked on "Create" button
  if (event.target.textContent == "Create") {
    let newQuestion = {};
  
    newQuestion.title = document.getElementById('title').value;
    newQuestion.choiceA = document.getElementById('choiceA').value;
    newQuestion.choiceB = document.getElementById('choiceB').value;
    newQuestion.choiceC = document.getElementById('choiceC').value;
    newQuestion.choiceD = document.getElementById('choiceD').value;
    newQuestion.correct = document.getElementById('correct').value;
  
    // Add new object which represented for new question to array object "questions"
    questions.push(newQuestion);
  }
  // Edit a question by using "questionPosition" to identify the question we want to edit
  else {
    questions[questionPosition].title   = document.getElementById('title').value;
    questions[questionPosition].choiceA = document.getElementById('choiceA').value;
    questions[questionPosition].choiceB = document.getElementById('choiceB').value;
    questions[questionPosition].choiceC = document.getElementById('choiceC').value;
    questions[questionPosition].choiceD = document.getElementById('choiceD').value;
    questions[questionPosition].correct = document.getElementById('correct').value;
  }
  saveQuestions();
  renderQuestion();
}

// Show the questions-container when we clicked on the button Edit 
function showEditQuestion(event) {
  show(questionsDialog);
  
  // Update text of "create" button to "Edit" button
  document.querySelector('menu').lastElementChild.textContent = "Edit";
  
  // index of each card
  questionPosition = event.target.closest('.card').dataset.index;
  
  document.getElementById('title').value = questions[questionPosition].title;
  document.getElementById('choiceA').value = questions[questionPosition].choiceA;
  document.getElementById('choiceB').value = questions[questionPosition].choiceB;
  document.getElementById('choiceC').value = questions[questionPosition].choiceC;
  document.getElementById('choiceD').value = questions[questionPosition].choiceD;
  document.getElementById('correct').value = questions[questionPosition].correct;
}

// Close the question-container
function onCancel() {
  questionsDialog.style.display = "none";
}

// Render questions
function renderQuestion() {
  hide(questionsDialog);

  // Remove the previous card
  for (const card of document.querySelectorAll('.card')) {
    card.remove();
  }

  // Display all new cards
  for (let i = 0; i < questions.length; i++) {
    const card = document.createElement('div');
    const QInfo = document.createElement('div');
    const actions = document.createElement('div');
    const title = document.createElement('span');
    const trash = document.createElement('img');
    const edit = document.createElement('img');

    card.className = "card";
    QInfo.className = "question-info";
    actions.className = "actions";
    title.className = "title";
    card.dataset.index = i;

    trash.src = "../../img/trash.png";
    edit.src = "../../img/edit.svg"
    title.textContent = questions[i].title;

    trash.addEventListener('click', removeQuestion); // To remove question
    edit.addEventListener('click', showEditQuestion); // To Edit question

    actions.appendChild(edit);
    actions.appendChild(trash);
    QInfo.appendChild(title);
    card.appendChild(QInfo);
    card.appendChild(actions);
    questionsContainer.appendChild(card);
  }
}

// Show the questions-container when we clicked on the button "Add question"
function onAddQuestion(){
  show(questionsDialog);

  // Update text of "Edit" button to "Create" button
  document.querySelector('menu').lastElementChild.textContent = "Create";
}

// Remove question 
function removeQuestion(event) {
  if (window.confirm("Do you want to delete this question?")) {

    // Find the index of the question that we want to remove
    const index = event.target.closest('.card').dataset.index;

    /*
      Removes elements from an array and, if necessary, 
      inserts new elements in their place, returning the deleted elements.
    */
    questions.splice(index, 2);
  }

  saveQuestions();
  renderQuestion();
}

loadQuestions(); 
renderQuestion();