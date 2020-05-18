import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from 'react-router-dom';

import "./sign-up.css";
import Regis from "./Regis.svg";
import Typo from "./LogoTypo.svg";


export default function SignUp(props) {
  let current = null;
  return (
    <>
      <div className="sign-form">
        <div className="logo">
          <img src={Typo}></img>
        </div>
        <div className="container">
          <div className="left">
            <div className="img-txt">
              <img></img>
              <p>Azazuka Midoriya</p>
            </div>
          </div>
          <div class="right">
            <div className="daSvg">
              <img src={Regis} />
            </div>
            <div className="content">
              <svg viewBox="0 0 320 300">
                <defs>
                  <linearGradient
                    // inkscape:collect="always"
                    id="linearGradient"
                    x1="13"
                    y1="193.49992"
                    x2="307"
                    y2="193.49992"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      style={{ stopColor: "#6100FF" }}
                      offset="0"
                      id="stop876"
                    />
                    <stop
                      style={{ stopColor: "#EA01FE" }}
                      offset="1"
                      id="stop878"
                    />
                  </linearGradient>
                </defs>
                <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
              </svg>
              <div class="form">
                <label for="email">Email</label>
                <input
                  onFocus={(e) => {
                    if (current) current.pause();
                    current = anime({
                      targets: "path",
                      strokeDashoffset: {
                        value: 0,
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                      strokeDasharray: {
                        value: "240 1386",
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                    });
                  }}
                  type="email"
                  id="email"
                />
                <label for="password">Password</label>
                <input
                  onFocus={(e) => {
                    if (current) current.pause();
                    current = anime({
                      targets: "path",
                      strokeDashoffset: {
                        value: -336,
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                      strokeDasharray: {
                        value: "240 1386",
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                    });
                  }}
                  type="password"
                  id="password"
                />
                <Link to="/profile-creator"> 
                    <input
                  onFocus={(e) => {
                    if (current) current.pause();
                    current = anime({
                      targets: "path",
                      strokeDashoffset: {
                        value: -730,
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                      strokeDasharray: {
                        value: "530 1386",
                        duration: 700,
                        easing: "easeOutQuart",
                      },
                    });
                  }}
                  type="submit"
                  id="submit"
                  value="Submit"
                  
                />
                </Link>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
