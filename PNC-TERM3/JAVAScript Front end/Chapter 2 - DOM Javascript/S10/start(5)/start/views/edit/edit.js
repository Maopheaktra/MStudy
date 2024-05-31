// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");

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
];

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage !== null) {
    questions = questionsStorage;
  }
}

//  EDIT ---------------------------------------------------------

function renderQuestions() {
  // 1 - Remove the card container and create a new one
  dom_questions_view.lastElementChild.remove();
  // 2 - For all questions,  create a new div (class : item), and append it the 
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    let dom_question_container = document.createElement('div');
    dom_question_container.id = "question_container"
    dom_questions_view.appendChild(dom_question_container)

    let card = document.createElement("div");
    card.setAttribute('class', 'card');
    card.dataset.index = "0"

    let div = document.createElement('div');
    div.setAttribute('class', 'question-info');

    let spam = document.createElement('spam');
    spam.setAttribute('class', 'title');

    spam.textContent = question.title;
    let action = document.createElement('div');

    action.setAttribute('class', 'actions');
    let img = document.createElement('img');

    img.src = "../../img/edit.svg";
    let image = document.createElement('img');
    image.src = "../../img/trash.png";

    div.appendChild(spam);
    card.appendChild(div);
    card.appendChild(action)
    action.appendChild(img);
    action.appendChild(image)
    dom_question_container.appendChild(card);
  }

}

function editQuestion(event) {
  
}

function removeQuestion(event) {
  //  Get index from the dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // TODO Remove question at given index

  // TODO changes to local storage

  // TODO Update the view
}

// MAIN  ---------------------------------------------------------

loadQuestions();

renderQuestions();
