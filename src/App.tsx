import './fonts.css';

function App() {
  return (
    <>
      <div className='w-80 h-[calc(100% - 4rem)] absolute left-1/2 -translate-x-1/2
                      my-8 p-0
                      flex flex-col justify-start items-stretch gap-4'>
        <h1 className='text-3xl font-poppinsSemiBold font-bold 
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
                     w-2/3 gap-4'>
          <input 
            type='number' 
            placeholder='0 > guess < 101' 
            className='placeholder:text-zinc-500
                       bg-zinc-800 text-zinc-100 text-lg text-center
                       w-full border-2 border-fuchsia-300 rounded-lg p-1'
          />
          <button 
            type='submit' 
            className='bg-zinc-800 text-zinc-100 text-lg text-center
                       border-2 border-fuchsia-300 rounded-lg px-3 py-1
                       transition duration-300 ease-in-out
                       hover:bg-fuchsia-300 hover:text-zinc-950'
          >✓</button> 
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
