import { useState } from 'react'
import {VowelShift, ContantShift} from './assets/Algos'
import './App.css'

const algoMap = {
  "Vowel Shift":VowelShift,
  "Contant Shift":ContantShift
}

function App() {
  const [algo, setAlgo] = useState("Vowel Shift");

  const SelectedComponenent = algoMap[algo];

  const [textIn, setTextIn] = useState('');
  const [textOut, setTextOut] = useState('');

  return (
    <>
      <h1 className="title"
      >BaD eNCRYPTioN
      </h1>
      <div className="textbox text-in">
        <p>Text in</p>
        <textarea type="textarea" 
        placeholder='Put message here'
        value={textIn}
        onChange={(e) => setTextIn(e.target.value)}
        />
      </div>
      <div className="algo-select">
        <select 
        value={algo}
        onChange={(e) => {
          setAlgo(e.target.value)
        }}
        >
          {Object.keys(algoMap).map((k) => (
          <option key={k} value={k}>{k}</option>   
        ))}
        </select>
        <SelectedComponenent 
        textIn={textIn}
        setTextOut={setTextOut}
        />
      </div>
      
      <div className="textbox text-out">
        <p>Text out</p>
        <textarea type="text" 
        readOnly 
        value={textOut}
        placeholder='Will output here'
        />
      </div>
    </>
  )
}

export default App
