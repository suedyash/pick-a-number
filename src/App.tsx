import { useState, useEffect } from 'react';
import './fonts.css';
import githubLogoImg from './assets/github-logo-white-mini.png';

function randomIntFromInterval(min: number, max: number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [display_guess, setdisplay_guess] = useState<string>("I'll display your previous guesses");
  const [display_hilo, setdisplay_hilo] = useState<string>("I'll let you know, low or high...");
  const [display_win, setdisplay_win] = useState<string>("I'll tell you when to celebrate ^^");
  const [randomValue, setRandomValue] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [tooHigh, setTooHigh] = useState<boolean | null>(null);
  const [tooLow, setTooLow] = useState<boolean | null>(null);
  const [prevGuesses, setPrevGuesses] = useState<number[]>([]);
  const [showRetry, setShowRetry] = useState<boolean>(false);

  useEffect(() => {
    const rand = randomIntFromInterval(1, 100);
    setRandomValue(rand);
  }, []);

  useEffect(() => {
    console.log("Random value:", randomValue);
  }, [randomValue]);

  useEffect(() => {
    const guess: string = prevGuesses.join(', ');
    if (prevGuesses.length > 0) {
      setdisplay_guess(guess);
    }
  }, [prevGuesses]);

  useEffect(() => {
    if (tooHigh === true) {
      setdisplay_hilo("Too high!");
    } 
    
    if (tooLow === true) {
      setdisplay_hilo("Too low!");
    }
  }, [tooHigh, tooLow])
  
  function handleSubmit() {
    const num = Number(inputValue); 
    if (num <= 0 || num >= 101 || isNaN(num)) {
      alert("Please enter a number between 1 and 100");
      return;
    }

    if (randomValue) {
      if (num > randomValue) {
        setTooHigh(true);
        setTooLow(false);
      } else if (num < randomValue) {
        setTooHigh(false);
        setTooLow(true);
      } else if (num === randomValue) {
        gameWon();
        return;
      }
    }

    setPrevGuesses([ ...prevGuesses, num ]);
  }

  function gameWon() {
    setdisplay_win("You Won!!!");
    setShowRetry(true); 
  }

  function retry() {
    const rand = randomIntFromInterval(1, 100);
    setRandomValue(rand); 
    setTooHigh(false);
    setTooLow(false);
    setPrevGuesses([]);
    setInputValue("");
    setdisplay_guess("I'll display your previous guesses");
    setdisplay_hilo("I'll let you know, low or high...");
    setShowRetry(false);
  }

  return (
    <>
      <div className='w-80 absolute left-1/2 -translate-x-1/2
                      my-8 p-0
                      flex flex-col justify-between items-stretch gap-4'>
        <h1 className='text-3xl font-poppinsSemiBold font-bold tracking-tight 
                      flex flex-row justify-center items-center'>
          PICK-A-<span className="italic text-fuchsia-300">NUMBER!</span>
        </h1>
        <details>
          <summary className='text-lg text-end'>
            What's this?
          </summary>
          <p className='text-base text-start'>
            We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer.
            We'll tell you if your guess was too high or too low. 
          </p>
        </details>
        <h3 className='text-xl text-start'>Enter a guess...</h3>
        <div 
          className='self-end 
                     flex flex-row justify-center items-center
                     w-2/3 gap-4'
        >
          {!showRetry && (
            <>
              <input 
              type='number' 
              placeholder='0 > guess < 101' 
              className='placeholder:text-zinc-500
                        bg-zinc-800 text-zinc-100 text-lg text-center
                        w-full border-2 border-fuchsia-300 rounded-lg p-1'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                type='button' 
                className='bg-zinc-800 text-zinc-100 text-lg text-center
                          border-2 border-fuchsia-300 rounded-lg px-3 py-1
                          transition duration-300 ease-in-out
                          hover:bg-fuchsia-300 hover:text-zinc-950'
                onClick={handleSubmit} 
              >
                ✓
              </button> 
            </>
          )}
          {showRetry && (
            <>
              <button 
                className='w-full bg-zinc-800 text-zinc-100 text-lg text-center
                           border-2 border-fuchsia-300 rounded-lg px-3 py-1
                           transition duration-300 ease-out
                           hover:bg-fuchsia-300 hover:text-zinc-950'
                onClick={retry}
              >
                Retry?
              </button>
            </>
          )}
        </div>
        <div className='display-screens w-full'>
            <span>{display_guess}</span>
        </div>
        <div className='display-screens w-full'>
            <span>{display_hilo}</span>
        </div>
        <div className='display-screens w-full'>
            <span style={{ color: (display_win === "You Won!!!") ? 'rgb(240,171,252)' : '' }}>{display_win}</span>
        </div>
      </div>

      <div
        className='w-full flex flex-row justify-center items-center gap-4 bg-zinc-950
                    fixed bottom-0 p-4 cursor-pointer' 
        onClick={() => {
          window.open("https://github.com/swyzsh", "_blank")
        }}
        >
        <img 
          src={githubLogoImg} 
          className='w-4 h-4'
        />
        <span className='text-zinc-100 text-base'>
          Swyzsh
        </span>
      </div>
    </>
  );
}

export default App;
