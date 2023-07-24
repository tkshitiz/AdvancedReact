import React from 'react'
import Basics from './tutorial/usesState/useEffect-cleanup'
import FetchData from './tutorial/useEffect/useEffect-fetch-data'
import MultipleReturns from './tutorial/useEffect/multiple-returns'
import Setup from './tutorial/form/controlled-inputs'
// import './App.css';

function App() {
  return (
      <div className='container'>
      {/* <Basics/>
      <FetchData/> */}
      <MultipleReturns/>
      <Setup/>
    </div>
  );
}

export default App;