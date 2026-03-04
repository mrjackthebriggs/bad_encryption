import { useState, useEffect } from 'react'

function template({textIn = "", setTextOut = () => {}, decrypt = false}) {

  function encFunc(strIn){

    return strIn;
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn,decrypt]);
  return (
    <div className='algo-settings'>
    </div>
  )
}

export function VowelShift({textIn = "", setTextOut = () => {}, decrypt = false}) {
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
      
      const newChar = vowels.at((vowels.indexOf(char.toLowerCase()) + (decrypt ? -vowelShift : vowelShift)) % vowels.length)

      return isUpperCase ? newChar.toUpperCase() : newChar;
    }).join('');
  }
  
  useEffect(() => {
    setTextOut(vowShiftFunct(textIn));
  }, [textIn,vowelShift,decrypt]);
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

export function ConsonantShift({textIn = "", setTextOut = () => {}, decrypt = false}) {
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
      
      const newChar = cons.at((cons.indexOf(char.toLowerCase()) + (decrypt ? -consShift : consShift)) % cons.length)

      return isUpperCase ? newChar.toUpperCase() : newChar;
    }).join('');
  }
  
  useEffect(() => {
    setTextOut(vowShiftFunct(textIn));
  }, [textIn,consShift,decrypt]);
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

export function SpeakChineseForEmDerek({textIn = "", setTextOut = () => {}, decrypt = false}) {

  let translationTable = {
    "a":"氏",
    'b':'丑',
    'c':'汇',
    'd':'',
    'e':'乇',
    'f':'下',
    'g':'沰',
    'h':'牝',
    'i':'个',
    'j':'丿',
    'k':'长',
    'l':'乚',
    'm':'爪',
    'n':"九",
    'o':'囙',
    'p':'沪',
    'q':'中',
    'r':'伬',
    's':'互',
    't':'亇',
    'u':'凵',
    'v':'丩',
    'w':'屲',
    'x':'义',
    'y':'丫',
    'z':'之'
  }

  function encFunc(strIn){

    if(decrypt){
      const temp_obj = {}
      Object.keys(translationTable).map((k) => {
        temp_obj[translationTable[k]] = k;
      })

      translationTable = temp_obj;
    }

    return strIn.split('').map((i) => {
      if (!(i.toLowerCase() in translationTable)){
        return i;
      }

      return translationTable[i.toLowerCase()]
    }).join('');
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn,decrypt]);
  return (
    <div className='algo-settings'>
    </div>
  )
}

export function EmojiTranslate({textIn = "", setTextOut = () => {}, decrypt = false}) {

  function encFunc(strIn){

    return strIn;
  }
  
  useEffect(() => {
    setTextOut(encFunc(textIn));
  }, [textIn,decrypt]);
  return (
    <div className='algo-settings'>
    </div>
  )
}