import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return( 
  <>
   <h2>useState counter example</h2>
   <section style={{margin: '4rem 0'}}>
   <h1>{value}</h1>
   <button className='btn' onClick={() =>{setValue(value +1)}}>increase</button>
   <button className='btn'onClick={() => {setValue(value-1)}}>decrease</button>
   <button className='btn'onClick={() => {setValue(0)}}>reset</button>
   </section>
  </>
  )
 
};

export default UseStateCounter;
