const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const modal = document.getElementById("myModal");
let guessCount = 1;
let resetButton;
function submitHandler() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += `${userGuess} `;
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 5) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver(1);
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
// When the user clicks on <span> (x), close the modal
function closeModal() {
  // remove the modal
  modal.style.display = "none";
}
function setGameOver(check) {
  // show the modal
  if (check) {
    modal.style.display = "block";
    const video = document.querySelector("#myVideo");
    video.autoplay = true;
    video.load();
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    guesses.textContent = "";
  }
}
