import React, { useState } from "react";
import "./profile-creator.css";
import HoveredAvatar from "./HoveredAvatar.svg";
import UnhoveredAvatar from "./UnhoveredAvatar.svg";
import Logo from "../../auth/LogoTypo.svg";
import { useSpring, animated } from "react-spring";
import ThreeDNeon from "../../../3d/ThreeDNeon";

const userPic =
  "https://res.cloudinary.com/dalnnaod7/image/upload/v1585523621/IMG_-rp94kw_xkmep4.jpg";

export default function ProfileCreator() {
  const [imgHovered, setImgHovered] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [isDone, setDone] = useState(false);
  const [isAnimationDone, setAnimationDone] = useState(false);
  const [TimeDone, setTimeDone] = useState(false);
  const [chosenPic, setChosenPic] = useState(false);

  const fadeOutTxt = useSpring({
    opacity: isDone ? 0 : 1,
    transform: isDone ? "translate(-750px) " : "translate(0px)",
  });

  const fadeOutImg = useSpring({
    opacity: isDone ? 0 : 1,
    transform: isDone ? "translate(300px)" : "translate(0px)",
  });

  const fadeIn = useSpring({
    opacity: isAnimationDone ? 1 : 0,
  });

  return (
    <>
      <div className="logoTypo">
        <img src={Logo} alt="img" />
      </div>
      {!isAnimationDone ? (
        <div className="daContainer">
          <animated.div className="avatar-creator" style={fadeOutTxt}>
            <h1>Bienvenido! vamos a crear tú perfil</h1>
            <p>Para que todo el mundo conozca tú trabajo</p>
            <h3>Agrega un Avatar</h3>
            <div className="avatar-buttons">
              <button
                onClick={() => setChosenPic(true)}
                className="button1"
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
              >
                {chosenPic ? (
                  <img className="pic" src={userPic}></img>
                ) : (
                  <img
                    src={imgHovered ? HoveredAvatar : UnhoveredAvatar}
                    alt="img"
                  />
                )}
              </button>
              <button
                onClick={() => setChosenPic(true)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={Hovered ? "uploader" : "uploader-inactive"}
              >
                Elige una imagen
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => {
                  setDone(true);
                  setTimeout(() => {
                    setAnimationDone(true);
                  }, 600);
                }}
                className={chosenPic ? "active" : "inactive"}
              >
                Siguiente
              </button>
            </div>
          </animated.div>
          <animated.div className="featured-work" style={fadeOutImg}>
            <div className="img-txt">
              <img></img>
              <p>Chris Peralta</p>
            </div>
          </animated.div>
        </div>
      ) : (
        <>
          <animated.div style={fadeIn}>
           
          </animated.div>
          <animated.div style={fadeIn}>
        
            <ThreeDNeon />
          </animated.div>
        </>
      )}
    </>
  );
}
