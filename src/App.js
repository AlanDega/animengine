import React from 'react';
import GlobalFonts from './fonts/fonts';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from "./components/Landing";



function App() {
  return (
   <>
    <BrowserRouter>
      <Route exact path="/" component={Landing} ></Route>
      <GlobalFonts />
    </BrowserRouter>
   </>
  );
}

export default App;
