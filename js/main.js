"use strict";

let againBtn = document.querySelector(".again");
let guessNumber = document.querySelector(".number");
let inputNumber = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let hintMessage = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let backgroundBody = document.querySelector("body");

let randomNumber = Math.floor(Math.random() * (1 * 20) + 1);
const compareNumbers = () => {
  console.log(randomNumber);
  if (randomNumber === Number(inputNumber.value)) {
    backgroundBody.style.backgroundColor = "#60b347";
    hintMessage.textContent = "👍 Congratulation you win";
    guessNumber.textContent = randomNumber;
    if (Number(highScore.textContent) < Number(score.textContent)) {
      highScore.textContent = score.textContent;
    }
  } else {
    score.textContent = score.textContent - 1;
    if (Number(score.textContent) !== 0) {
      if (Number(inputNumber.value) > randomNumber) {
        hintMessage.textContent = "📈 to high";
      } else if (Number(inputNumber.value) < randomNumber) {
        hintMessage.textContent = "📉 to low";
      }
    } else {
      hintMessage.textContent = "💀 Game Over";
      backgroundBody.style.backgroundColor = "#FF2400";
      checkBtn.disabled = true;
      guessNumber.textContent = randomNumber;
    }
  }
};
const playAgain = () => {
  score.textContent = 20;
  highScore.textContent = 0;
  hintMessage.textContent = "Start guessing...";
  guessNumber.textContent = "?";
  backgroundBody.style.backgroundColor = "#222";
};

againBtn.addEventListener("click", playAgain);
