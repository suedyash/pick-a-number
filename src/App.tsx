import './fonts.css';

function App() {
  return (
    <>
      <div className='w-80 h-[calc(100% - 4rem)] absolute left-1/2 -translate-x-1/2
                      my-8 p-0
                      flex flex-col justify-start items-stretch'>
        <h1 className='text-3xl font-poppinsSemiBold font-bold 
                      flex flex-row justify-center items-center'>
          PICK-A-<span className="italic">NUMBER!</span>
        </h1>
        <details>
          <summary className='text-lg text-end'>
            What's this?
          </summary>
          <p className='text-base text-center'>
            We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer.
            We'll tell you if your guess was too high or too low. 
          </p>
        </details>
        </div>
    </>
  );
}

export default App;
