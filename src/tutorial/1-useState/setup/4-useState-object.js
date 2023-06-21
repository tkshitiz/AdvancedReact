import React, { useState } from 'react';

const UseStateObject = () => {

// const [person, setPerson] = useState({
//   name: 'kshitiz thapa',
//   age:69,
//   message : 'random title'
// })

const [name , setName]= useState('kshitiz thapa')
const [age , setAge]= useState(69)
const [message , setMessage]= useState('default value')


// const changeMessage =() =>{
//   setMessage('hello world')
  // if(person.message === 'random title')
  // {
  //    setPerson({...person, message:'change vayo'})
  // }
  // else{
  //   setPerson({...person, message: 'random title'})
  // }
  
// }
  return <>
  <h3>{name}</h3>
   <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={() =>{setMessage('hellow world')}}>change</button>
  </>;
 
};


export default UseStateObject;
