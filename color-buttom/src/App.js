import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState("red")
  const [disableChecked, setDisableChecked] = useState(false)
  const newColor = color === "red" ? "blue" : "red"


  return (
    <>
      <button 
        onClick={() => setColor(newColor)} 
        style={{backgroundColor: color}}
        disabled={disableChecked}
        >
        {`Change color to ${newColor}`}
      </button>
      <input 
        type="checkbox"
        id="enable-button-checkbox"
        onChange={e => 
          setDisableChecked(e.target.checked)
        }
      />
    </>
  );
}

export default App;
