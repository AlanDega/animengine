import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from "./components/Landing";
import SignUp from "./components/views/auth/SignUp";
import Home from "./components/views/home/Home";
import ProfileCreator from "./components/views/onboarding/profileCreator/ProfileCreator";
import ThreeDNeon from './components/3d/ThreeDNeon';




function App() {
  return (
   <>
    <BrowserRouter>
      <Route exact path="/" component={Landing} ></Route>
      <Route exact path="/registrate" component={SignUp}></Route>
      <Route exact path ="/home" component={Home}></Route>
      <Route exact path="/profile-creator" component={ProfileCreator}></Route>
      <Route exact path="/3d" component={ThreeDNeon}></Route> 
    </BrowserRouter>
   </>
  );
}

export default App;
