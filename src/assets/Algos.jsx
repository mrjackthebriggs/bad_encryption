import { useState, useEffect } from 'react'

export function VowelShift({textIn = "", setTextOut = () => {}}) {
  const [vowelShift, setVowelShift] = useState(1);
  const vowels = "aeiou"

  function vowShiftFunct(strIn){

    return strIn.split('').map((char) => {
      if(!vowels.includes(char.toLowerCase())){
        return char;
      }

      const isUpperCase = char == char.toUpperCase();
      
      const newChar = vowels.at((vowels.indexOf(char.toLowerCase()) + vowelShift) % vowels.length)

      return isUpperCase ? newChar.toUpperCase() : newChar;
    }).join('');
  }
  
  useEffect(() => {
    setTextOut(vowShiftFunct(textIn));
  }, [textIn,vowelShift]);
  return (
    <div className='algo-settings'>
      <label>
        Shift Vowel:
        <input
        type='number'
        value={vowelShift}
        onChange={(e) => {
          const val = parseInt(e.target.value);

          if (val < vowels.length && val >= 0){
            setVowelShift(val);
          }   
        }}
        />
      </label>
    </div>
  )
}

export function ContantShift({textIn = "", setTextOut = () => {}}) {
  const [consShift, setConsShift] = useState(1);
  const cons = "bcdfghjklmnpqrstvwxyz"

  function vowShiftFunct(strIn){

    return strIn.split('').map((char) => {
      if(!cons.includes(char.toLowerCase())){
        return char;
      }

      const isUpperCase = char == char.toUpperCase();
      
      const newChar = cons.at((cons.indexOf(char.toLowerCase()) + consShift) % cons.length)

      return isUpperCase ? newChar.toUpperCase() : newChar;
    }).join('');
  }
  
  useEffect(() => {
    setTextOut(vowShiftFunct(textIn));
  }, [textIn,consShift]);
  return (
    <div className='algo-settings'>
      <label>
        Shift Vowel:
        <input
        type='number'
        value={consShift}
        onChange={(e) => {
          const val = parseInt(e.target.value);

          if (val < cons.length && val >= 0){
            setConsShift(val);
          }   
        }}
        />
      </label>
    </div>
  )
}
