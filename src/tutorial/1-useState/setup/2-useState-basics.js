import React, { useState } from 'react';

const UseStateBasics = () => {
 
  const [text, setText] = useState('Default value')

  const handleClick =() =>{
    setText('click garda yesto aayo')
  }

  return (
    <>
     <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>click me</button>
    </>
  )
};

export default UseStateBasics;
