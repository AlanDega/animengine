import React, { useState, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Slider from "./Slider";
import slides from "../assets/slides";
import logo from "../assets/a_logo.svg";
import Title from "../assets/crea.svg";
import Section from "./Section";
import Card from "./Card";
import section_images from "../assets/sectionImages";

const wave_image =
  "https://res.cloudinary.com/dalnnaod7/image/upload/v1588876149/image_jer1fu.jpg";

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

const Footer = styled.div`
  display: grid 
  height: 300px;
  width: 100%;
  background: #100F20;
  justify-content: center;
`;
const FooterContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: repeat(5, auto);
  justify-content:center;
  width:100%
  height: 100%;
  padding-top: 40px;
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 200px;
  width:100%;
  border-top: solid .5px #541FEA;
  border-bottom: solid .5px #541FEA;
`


export default function Landing(props) {
  const [barPixels, setBarPixels] = useState();
  const [percentage, setPercentage] = useState(0);

  const sectionRef = useRef(null);

  return (
    <>
      <Slider slides={slides} />
      <div className="crea">
        <img height="200" width="800" src={Title} />
      </div>
      <div className="waves">
        <Section
          title="Empoderado por Rust"
          text="Animental fue escrito en Rust y gracias a su compatibilidad con Web-assembly podemos crear videojuegos con mayor eficiencia y de la mejor calidad en la web."
          image={wave_image}
        />
      </div>
      <div className="last">
        <Fade big>
          <h1>Gana tokens ayudando al ecosistema</h1>
        </Fade>
        <div className="image-group">
          {section_images.map((img, i) => (
            <Card title="Hey baby" text="text 1" img={img} />
          ))}
        </div>
        <Footer>
          <FooterContent>
                <SocialMedia>
                  <img src={logo} height="40" width="40" />
                  
                </SocialMedia>
                <SocialMedia>
                  <img src={logo} height="40" width="40" />
                </SocialMedia>
                <SocialMedia>
                  <img src={logo} height="40" width="40" />
                </SocialMedia>
                <SocialMedia>
                  <img src={logo} height="40" width="40" />
                </SocialMedia>
                <SocialMedia>
                  <img src={logo} height="40" width="40" />
                </SocialMedia>
          
          </FooterContent>
        </Footer>
      </div>
    </>
  );
}
