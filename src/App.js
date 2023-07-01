import React from 'react'
import Basics from './tutorial/usesState/useEffect-cleanup'
import FetchData from './tutorial/useEffect/useEffect-fetch-data'
import MultipleReturns from './tutorial/useEffect/multiple-returns'
// import './App.css';

function App() {
  return (
      <div className='container'>
      {/* <Basics/>
      <FetchData/> */}
      <MultipleReturns/>
    </div>
  );
}

export default App;