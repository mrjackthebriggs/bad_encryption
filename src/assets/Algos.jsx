import { useState, useEffect } from 'react'

function template({textIn = "", setTextOut = () => {}}) {

  function encFunc(strIn){

    return strIn;
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn]);
  return (
    <div className='algo-settings'>
    </div>
  )
}

export function VowelShift({textIn = "", setTextOut = () => {}}) {
  const [vowelShift, setVowelShift] = useState(1);
  const vowels = "aeiou"

  // splits, processes each one to see if its in the 
  // list and koves it up the index the specified amount.
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

export function ConsonantShift({textIn = "", setTextOut = () => {}}) {
  const [consShift, setConsShift] = useState(1);
  const cons = "bcdfghjklmnpqrstvwxyz"

  // same as above, splits, processes each one to see if its in the 
  // list and koves it up the index the specified amount.
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
        Shift Consonant:
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

export function SpeakChineseForEmDerek({textIn = "", setTextOut = () => {}}) {

  const translationTable = {
    "a":"人",
    'b':'丑',
    'c':'汇',
    'e':'丰',
    't':'丆',
    'x':'㐅',
    'y':'丫',
  }

  function encFunc(strIn){

    return strIn;
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn]);
  return (
    <div className='algo-settings'>
    </div>
  )
}

export function EmojiTranslate({textIn = "", setTextOut = () => {}}) {

  function encFunc(strIn){

    return strIn;
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn]);
  return (
    <div className='algo-settings'>
    </div>
  )
}