import React from 'react'
import Proptypes from 'prop-types'
import { useState } from 'react';

function CounterApp({value}) {

  const [counter, setCounter] = useState (value);

  const handleAdd = () => { 
    //setCounter ( (c) => c+1) //esta forma es igual que la siguiente
    setCounter ( counter + 1 );
    //console.log('+1')
  };

  const handleSubstract = () => {
    setCounter ( counter - 1)
  };

  const handleClear = () => {
    setCounter (value)
  };


  return (
    <div>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleClear }>Clear</button>
       
    </div>
  )
}

CounterApp.propTypes = {
  value: Proptypes.number.isRequired,
}

export default CounterApp
