let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let playerGuess;
let previousGuesses = []; // create an empty array to store guesses

const guesses = document.querySelector('.guesses');
const gameStatus = document.querySelector('.gameStatus');
const lowOrHi = document.querySelector('.lowOrHi');
const inputForm = document.getElementById('guess-input-container');
const inputForm_input = document.getElementById('guess-input'); 
const inputForm_submit = document.getElementById('submit-button');

const retryButton = document.getElementById('retry-button');
if (retryButton) {
  retryButton.style.display = 'none'; // initially hidden
  retryButton.style.width = '148px';
  retryButton.style.height = '30px';
  retryButton.style.marginLeft = 'auto';
  retryButton.style.textAlign = 'center';
  retryButton.style.fontFamily = 'Forum';
  retryButton.style.fontSize = '18px';
  retryButton.style.fontWeight = '900';
  retryButton.style.color = '#cba6f7';
}

inputForm.addEventListener('submit', function(event) {
  event.preventDefault();
  playerGuess = parseInt(document.getElementById('guess-input').value, 10); // Ensure playerGuess is an integer

  checkGuess();
});

function checkGuess() {
  guessCount++;

  console.log(`Test: guesscount: ${guessCount}`);

  if (guessCount === 1) {
    guesses.innerText = 'Previous guesses were: ';
  }
  guesses.innerText += ` ${playerGuess}`;
  previousGuesses.push(playerGuess);

  console.log(`Test: random: ${randomNumber}`);

  if (playerGuess === randomNumber) {
    gameStatus.textContent = 'Congratulations! You got it right!';
    gameStatus.style.color = '#cba6f7';
    setGameOver();

  } else if (guessCount === 10) {
    gameStatus.textContent = 'GAME OVER!!!';
    gameStatus.style.color = '#f38ba8';
    setGameOver();

  } else {
    gameStatus.textContent = 'WRONG!!!';
    gameStatus.style.color = '#eba0ac';
    
    if (playerGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (playerGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
}

function setGameOver() {
  
  // disable input and hide form
  inputForm_input.disabled = true;
  inputForm_submit.disabled = true;
  inputForm_input.style.display = 'none';
  inputForm_submit.style.display = 'none';

  // show retry button
  retryButton.style.display = 'block';

  retryButton.addEventListener('click', retryGame);
}
  
function retryGame() {

  // hide retry button
  retryButton.style.display = 'none';
  inputForm_input.disabled = false;
  inputForm_submit.disabled = false;
  inputForm_input.style.display = 'flex';
  inputForm_submit.style.display = 'block';

  // reset key game metrics
  guessCount = -1;
  previousGuesses = [];
  function resetMessages() {
    inputForm_input.value = '';
    gameStatus.textContent = '';
    lowOrHi.textContent = '';
    
    guesses.innerText = "";
    guesses.innerText = 'Previous guesses were: ';
  }
  setTimeout(resetMessages, 30);
  
  // generate new Random number for new round
  randomNumber = Math.floor(Math.random() * 100) + 1;
}