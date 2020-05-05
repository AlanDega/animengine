import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import { getNodeText } from "@testing-library/react";
import Slider from "./Slider";
import slides from "../assets/slides";

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
        <h1>Crea tú universo</h1>
      </div>
    </>
  );
}
