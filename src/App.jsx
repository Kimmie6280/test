import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar.jsx';


function App() {
  const[progress,setProgress] = useState(0);

  function updateProgress(){
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  }
  function resetProgress(){
    setProgress(0);
  }
  function decreaseProgress(){
    setProgress((previousProgress) => Math.max(previousProgress - 10, 0));
  }

  return (
    <>
      <ProgressBar progress={progress}/>
      <button onClick={updateProgress}>
        Increase Progress       
      </button>
      &nbsp;
      <button onClick={decreaseProgress}>
        Decrease Progress
      </button>
      &nbsp;
      <button onClick={resetProgress}>
        Reset Progress
      </button>
      

    </>
  )
}

export default App
