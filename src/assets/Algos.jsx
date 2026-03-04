import { useState, useEffect } from 'react'

export function VowelShift({textIn = "", setTextOut = () => {}}) {
  useEffect(() => {
    setTextOut("poop");
  }, [textIn]);
  return (
    <>
      <h3>
      Vowel Shift
      </h3>
    </>
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
