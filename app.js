let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let playerGuess; // holds latest player guess
let lastGuess;
let guessCorrect;
let gameEnd;
let resetButton;


const guesses = document.querySelector('.guesses');
const gameStatus = document.querySelector('.gameStatus');
const lowOrHi = document.querySelector('.lowOrHi');
const inputForm = document.getElementById('guess-input-container');

inputForm.addEventListener('submit', function(event) {
  event.preventDefault();
  playerGuess = parseInt(document.getElementById('guess-input').value, 10); // Ensure playerGuess is an integer

  checkGuess();
});

function checkGuess() {
  guessCount++;

  console.log(`Test: guesscount: ${guessCount}`);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses were, ';
  }
  guesses.textContent = `${guesses.textContent} ${playerGuess}`;

  console.log(`Test: random: ${randomNumber}`);

  if (playerGuess === randomNumber) {
    gameStatus.textContent = 'Congratulations! You got it right!';
    gameStatus.style.color = '#cba6f7';
    // setGameOver();

  } else if (guessCount === 10) {
    gameStatus.textContent = 'GAME OVER!!!';
    gameStatus.style.color = '#f38ba8';
    // setGameOver();

  } else {
    gameStatus.textContent = 'Nah uh!!!';
    gameStatus.style.color = '#eba0ac';
    
    if (playerGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (playerGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

}








/*
lastGuess = playerGuess;

// check guess
if (playerGuess === randomNumber) {
  guessCorrect = true;
} else {
  guessCorrect = false;
}

// do something when guess is correct and end game
if (guessCorrect = true) {
  console.log(`Congrats! your guess: ${playerGuess} is the correct answer.`);
  gameEnd = true;
} else {
  guessCount++; //increment number of guesses taken
  turnsLeft--; //decrement number of turns left
  console.log(`Womp Womp! You have ${turnsLeft} Turns Left.`);
  
  
}

// do something when Game Ends
if (gameEnd = true) {
  console.log("Would you like to Restart the game?");
  // get button entry and assign to playerRetry here
}
*/