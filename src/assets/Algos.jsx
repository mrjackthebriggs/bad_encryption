import { useState, useEffect } from 'react'

export function VowelShift({textIn = "", setTextOut = () => {}}) {
  const [vowelShift, setVowelShift] = useState(1);

  function vowShiftFunct(strIn){
    strIn.replace()
  }
  
  useEffect(() => {
    setTextOut("poop");
  }, [textIn]);
  return (
    <div className='algo-settings'>
      <label>
        Shift Vowel:
        <input
        type='number'
        value={vowelShift}
        onChange={(e) => {
          const val = e.target.value;

          if (val <= 5 && val > 0){
            setVowelShift(e.target.value);
          }   
        }}
        />
      </label>
    </div>
  )
}

export function ContantShift({textIn = "", setTextOut = () => {}}) {

  useEffect(() => {
    setTextOut("pee");
  }, [textIn]);
  
  return (
    <>
      <h3>
      Contant Shift
      </h3>
    </>
  )
}
