import { useState } from 'react'
import {VowelShift, ConsonantShift,SpeakChineseForEmDerek} from './assets/Algos'
import './App.css'

const algoMap = {
  "Vowel Shift":VowelShift,
  "Consonant Shift":ConsonantShift,
  "Speak Chinese for 'em Derek":SpeakChineseForEmDerek
}

function App() {
  const [algo, setAlgo] = useState("Vowel Shift");
  const [decrypt, setDecrypt] = useState(false);

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
        <div className="selectboxes">
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
          <select 
          value={decrypt}
          onChange={(e) => setDecrypt((e.target.value === 'true'))}
          >
            <option value={false}>Encrypt</option>
            <option value={true}>Decrypt</option>
          </select>
        </div>
        
        <SelectedComponenent 
        textIn={textIn}
        setTextOut={setTextOut}
        decrypt={decrypt}
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
