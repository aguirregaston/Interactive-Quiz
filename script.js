const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0,
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
];

const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  const questionText = document.createElement("p");
  questionText.textContent = `${index + 1}. ${q.question}`;
  questionDiv.appendChild(questionText);

  q.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => handleAnswer(index, i, button);
    questionDiv.appendChild(button);
  });

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  questionDiv.appendChild(feedback);

  quizContainer.appendChild(questionDiv);
});

function handleAnswer(questionIndex, selectedOption, button) {
  const question = questions[questionIndex];
  const feedback = button.parentNode.querySelector(".feedback");

  if (selectedOption === question.answer) {
    feedback.textContent = "Correct!";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.className = "feedback incorrect";
  }
}