const questions = [
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheet", "Colorful Style Sheet", "Computer Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<button>"],
    answer: "<a>"
  }
];
let current = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
function showQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}
function checkAnswer(selected) {
  const correct = questions[current].answer;
  if (selected === correct) score++;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}
function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerText = `Your Score: ${score}/${questions.length}`;
}
nextBtn.onclick = () => {
  if (current < questions.length) showQuestion();
};
showQuestion();