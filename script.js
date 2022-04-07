const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",
    answer: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "New York",
    b: "LA",
    c: "Washington",
    d: "Boston",
    answer: "c",
  },
  {
    question: "What is the capital of UK?",
    a: "Liverpool",
    b: "Leicester",
    c: "South London",
    d: "London",
    answer: "d",
  },
  {
    question: "What is the capital of Germany?",
    a: "Berlin",
    b: "Frankfurt",
    c: "Leipzig",
    d: "Koeln",
    answer: "a",
  },
];

const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
/* let currentQuestion = 0; */

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

//Loading first time quiz
loadQuiz();

function getSelected() {
  const answersEl = document.querySelectorAll(".answers");

  let answer = undefined;

  answersEl.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEl.forEach((answersEls) => {
    answersEls.checked = false;
  });
  /* console.log("deselect"); */
}

let score = 0;
submitBtn.addEventListener("click", () => {
  //check to see the answer is correct
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].answer) {
      score++;
      /* console.log("score"); */
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      /* alert("Quiz Over"); */
      quiz.innerHTML = `<h1>The quiz is over</h1><h2>Your score is ${score}, out of ${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
