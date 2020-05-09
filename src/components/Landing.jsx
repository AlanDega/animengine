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
import location_svg from "../assets/location_svg.svg";
import Logo1 from "./Logo1";
import Logo2 from "./Logo2";
import Logo3 from "./Logo3";
import Logo4 from "./Logo4";

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
  display: grid;
  grid-template-rows: 1fr 0.5;
  height: 100%;
  width: 100%;
  background: #100F20;
  
`;
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;
  justify-content:center;
  width:100%
  height: 100%;
  padding-top: 40px;
`;

const Locations = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Location = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
`

const LocationRow1 = styled.div`
display: grid;
grid-template-columns: 30% 70%;
height: 80%;
width:100%;
color: white;
`


const Row1 = styled.div`
display: grid; 
width: 100%;

`

const Row2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`

const SocialMedia = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1.5fr;
  grid-template-columns: 100%;
  justify-items: center;
  height: 320px;
  width: 100%;
  border-top: solid .5px #541FEA;
  border-bottom: solid .5px #541FEA;
`

const Contact = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 100%;
  justify-items: center;
  height: 320px;
  width: 100%;
  border-top: solid .5px #541FEA;
  border-bottom: solid .5px #541FEA;
`
const News = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 100%;
  justify-items: center;
  height: 320px;
  width: 100%;
  border-top: solid .5px #541FEA;
  border-bottom: solid .5px #541FEA;
`


const Logo = styled.img`
  justify-self: center;
  margin-top: 20px;
  height: 40px;
  width: 40px;
`

const List = styled.ul`
  margin-top: 0px;
`

const ListTitle = styled.h2`
  font-weight: 340;
`
const Email = styled.p`
  margin-top: -15px;
  font-weight: 800;
  color: #636F7D
`

const Noticia = styled.p`
font-size: 18px;
font-weight: 500;
color: #636F7D;
max-width: 70%;
padding-bottom: 20px;
border-bottom: solid 0.5px rgba(255, 255, 255, 0.2); 
`

const ListElement = styled.li`
width: 100%;
`

const Copyright = styled.div`
display: grid;
  height: 120px;
  width: 100%;
  background: #541FEA;
  align-items: center;
  color: white;
`


export default function Landing(props) {
  const [barPixels, setBarPixels] = useState();
  const [percentage, setPercentage] = useState(0);


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
            <Card title={img.title}  img={img.url} />
          ))}
        </div>
        <Footer>
          <FooterContent>
            <SocialMedia>
              <Row1>
                <Logo src={logo} />
              </Row1>
              <Row2>
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
              </Row2>
            </SocialMedia>

            <Contact>
              <List>
                <li>
                  <ListTitle>Contacto</ListTitle>

                </li>
                <li>
                  <h3>Patrocinios</h3>
                  <Email>patrocinios@animental.qx</Email>
                </li>
                <li>
                  <h3>Marketing</h3>
                  <Email>marketing@animental.qx</Email>
                </li>
                <li>
                  <h3>Trabajos</h3>
                  <Email>trabajos@animental.qx</Email>
                </li>
              </List>
            </Contact>
           
            <News>
              <List>
                <li>
                  <ListTitle>Noticias</ListTitle>
                </li>
                <ListElement>
                  <Noticia> 
                     10 nuevos ingenieros se unieron al equipo
                      del proyecto Fightball.
                  </Noticia>
                </ListElement>
                <ListElement>
                  <Noticia> 
                     El 22 de febreno anunciaremos la nueva versión
                     de Animental.
                  </Noticia>
                </ListElement>
                
                
              </List>
            </News>
            
          </FooterContent>
          <Locations>
              <Location>
                <LocationRow1>
                  <img src={location_svg} />
                  <h2>London, Inglaterra</h2>
                </LocationRow1>
               
              </Location>
              <Location>
              <LocationRow1>
                <img src={location_svg} />
                  <h2>Tokio, Japón</h2>
                </LocationRow1>
               
              </Location>
              <Location>
              <LocationRow1>
                <img src={location_svg} />
                  <h2>Dakar, Senegal</h2>
                </LocationRow1>
                
              </Location>
              <Location>
              <LocationRow1>
                <img src={location_svg} />
                  <h2>Berlín, Alemania</h2>
                </LocationRow1>
              </Location>
            </Locations>
            <Copyright>
              <p style={{ color: "white"  , marginLeft: "100px" }}> Alan Dega 2020.</p>
            </Copyright>
        </Footer>
      </div>
    </>
  );
}
