import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [Peoples, setPeople] = React.useState(data)

  const removeItems =(id) =>{
    let newPeople=Peoples.filter((people) => people.id !== id)
    setPeople(newPeople)
  }
  return<>
    {
     Peoples.map((people) => {
     const {id, name} = people  //array destructuring in js
     return (
      <div key= {id} className='item'>
            <h4>{name}</h4> 
      <button onClick={()=>removeItems(id)} >remove</button> 
      </div>
     )
     })
    }
      <button className='btn' onClick={() => setPeople([])}>clear items </button>  
    </>
};

export default UseStateArray;
