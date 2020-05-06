import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import slides from "../assets/slides";
import logo from "../assets/a_logo.svg"
import styled from 'styled-components';

const AwesomeHeadline = styled.h1`
  font-family: 'Jaapokkienchance' ;
`

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default function Landing(props) {
  const [barPixels, setBarPixels] = useState();
  const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     if(percentage < 100){
  //         setPercentage(percentage + .1);

  //     console.log(percentage);
  //     } else {

  //       return ()  => {
  //       clearInterval(interval);
  //     }
  //     }
  //   }, 10);

  // });
  return (
    <>
     

      <Slider slides={slides} />
      <div className="crea">
        <AwesomeHeadline>
          Crea tú universo
        </AwesomeHeadline>
      </div>
    </>
  );
}
