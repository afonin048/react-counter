
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(window.localStorage.getItem('counter') || 0);

  const handleClick = (isIncrement) => {
    let val = parseInt(counter);
    if(isIncrement){
      val +=1;
    } else {
      val -= 1;
    }
    
    setCounter(val);
    window.localStorage.setItem('counter', val);
    
  }
  

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => handleClick(false)}>-</button>
      <button onClick={() => handleClick(true)}>+</button>
    </div>
  );
}

export default App;
