import React, { useState, useEffect } from "react";

import logo from '../assets/a_logo.svg';

const user = "https://res.cloudinary.com/dalnnaod7/image/upload/v1588747118/user_jzbggc.png"

const card_images = [
  {
    id: 1,
    url:
      "https://res.cloudinary.com/dalnnaod7/image/upload/v1588631129/card_selector1_lqhfpq.png",
    hovered: false,
  },
  {
    id: 2,
    url:
      "https://res.cloudinary.com/dalnnaod7/image/upload/v1588631129/card_selector2_ouokgz.png",
    hovered: false,
  },
  {
    id: 3,
    url:
      "https://res.cloudinary.com/dalnnaod7/image/upload/v1588631137/card_selector3_hddz9c.png",
    hovered: false,
  },
  {
    id: 4,
    url:
      "https://res.cloudinary.com/dalnnaod7/image/upload/v1588631137/card_selector4_xj0yvn.png",
    hovered: false,
  },
];

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

export default function Slider(props) {
  const { slides } = props;
  const { length } = slides;

  const [curr, setCurr] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [highlight, setHighlight] = useState(0);
  const [cardImages, setCardImages] = useState([]);

  const handleHover = (i) => {
    console.log(i);
    // // const img = cardImages[i]
    // // setCardImages(img.hovered = true)
    // // console.log(cardImages);
    // if(i === 0)
    // console.log(i);
  };

  const handleUnhover = (i) => {
    // console.log(i);
  };

  // const goToNext = () => {
  //   setCurr(curr === length - 1 ? 0 : curr + 1);
  // };

  // on every change in the state this will rerun and rerender
  useEffect(() => {
    setCardImages(card_images);
    const interval = setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 0.1);

        // console.log(percentage);
      } else {
        setPercentage(0);
        setCurr(curr === length - 1 ? 0 : curr + 1);
        setHighlight(highlight === length - 1 ? 0 : highlight + 1);
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });

  if (!Array.isArray(slides) || slides <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <header>
        <img className="logo" src={logo} />
        <nav>
          <ul className="nav__links">
            <li>
              <p>Noticias</p>
            </li>
            <li>
              <p>Academia</p>
            </li>

            <li>
              <p>Funciones</p>
            </li>
            <li>
              <p>
                Comunidad
              </p>
            </li>
            <li>
              <p>Tienda</p>
            </li>
          </ul>
          <img className="user" src={user} height="24"/>
        </nav>
      </header>

      {slides.map((s, i) => (
        <div
          className={i === curr ? "slide active" : "slide"}
          key={s.id}
          aria-hidden={i !== curr}
        >
          <div>
            <h3>{s.subtitle}</h3>
            <h1>{s.title}</h1>
          </div>
          {i === curr && (
            <img className="image" src={s.image} alt={`Image for ${s.title}`} />
          )}
        </div>
      ))}
      <div className="progress">
        <ProgressBar className="progress_bar" percentage={percentage} />
        <div className="cards">
          {cardImages.map((img, i) => (
            <React.Fragment key={img.id}>
              {
                <img
                  key={img.id}
                  onClick={() => {
                    setCurr(i);
                    setHighlight(i);
                    setPercentage(0);
                  }}
                  onMouseEnter={() => {
                    cardImages.map((image, index) => {
                      if (index === i) {
                        image.hovered = true;
                      }
                    });
                  }}
                  onMouseLeave={() => {
                    cardImages.map((image, index) => {
                      if (index === i) {
                        image.hovered = false;
                      }
                    });
                  }}
                  src={img.url}
                  className={
                    highlight === i || img.hovered
                      ? "card__selector active"
                      : "card__selector"
                  }
                  alt="img"
                />
              }
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
