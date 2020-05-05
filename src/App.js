import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from "./components/Landing";



function App() {
  return (
   <>
    <BrowserRouter>
      <Route exact path="/" component={Landing} ></Route>
    </BrowserRouter>
   </>
  );
}

export default App;
