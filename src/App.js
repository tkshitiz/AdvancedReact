import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";

// import Setup from './tutorial/1-useState/setup/5-useState-counter'
function App() {
  return (
      <BrowserRouter>
       <Switch>
         <Route component = {Home} path ='/'/>
         <Route component = {About} path ='/about'/>
         <Route component = {SinglePost} path ='/post/:slug'/>
         <Route component = {Post} path ='/post'/>

       </Switch>
      </BrowserRouter>
  ); 
}

export default App
