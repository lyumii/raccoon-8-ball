const questionInput = document.getElementById("question-input");
const answerSpan = document.getElementById("answer");
const getAnswer = document.getElementById("get-answer");
const clearQuestion = document.getElementById("clear-question");
const questionsAndAnswers = document.getElementById("questions-and-answers");

const answer1 = "Go for it... but don't blame me if things go sideways.";
const answer2 = "Nope, not happening.";
const answer3 = "Ask me again when I'm not napping.";
const answer4 = "Not today, Satan, not today.";
const answer5 = "It's called trash can, not trash cannot, for a reason.";
const answer6 = "Sure, but you might regret it.";
const answer7 = "I'd tell you, but I'm too busy digging through trash.";
const answer8 = "The answer is lost in the trash. Try again later.";
const answeredQuestions = [];

clearQuestion.addEventListener("click", function () {
  answerSpan.innerHTML = "";
  questionInput.value = "";
  getAnswer.disabled = false;
});

getAnswer.addEventListener("click", function () {
  eightBall();
});

questionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    eightBall();
  }
});

function eightBall() {
  let answer;
  if (questionInput.value === "") {
    return;
  } else {
    switch (Math.floor(Math.random() * 8) + 1) {
      case 1:
        answer = answer1;
        break;
      case 2:
        answer = answer2;
        break;
      case 3:
        answer = answer3;
        break;
      case 4:
        answer = answer4;
        break;
      case 5:
        answer = answer5;
        break;
      case 6:
        answer = answer6;
        break;
      case 7:
        answer = answer7;
        break;
      case 8:
        answer = answer8;
        break;
    }
  }
  answerSpan.innerHTML = answer;
  answeredQuestions.push({
    question: questionInput.value,
    answer: answerSpan.innerHTML,
  });
  getAnswer.disabled = true;
  appendUl();
}

function appendUl() {
  questionsAndAnswers.innerHTML = "";
  for (let i = 0; i < answeredQuestions.length; i++) {
    let li = document.createElement("li");
    li.textContent = `You asked: "${answeredQuestions[i].question}" and the raccoon answered: "${answeredQuestions[i].answer}".`;
    questionsAndAnswers.appendChild(li);
  }
}
