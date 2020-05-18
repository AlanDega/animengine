import React, { useState } from "react";
import "./home.css";
import Logo from "../../../assets/LogoTypo.svg";
import FeedOptions from "./FeedOptions";



export default function Home() {
    const [Posts, setPosts] = useState([]);

  return (
    <>
      <section className="homes">
        <div className="navBar">
          <img className="feed__logo" src={Logo} alt="" />
          <div className="nav-list">
            {/* <div className="search__bar__feed"></div> */}
            <img
              className="feed__avatar"
              src="https://res.cloudinary.com/dalnnaod7/image/upload/v1585523621/IMG_-rp94kw_xkmep4.jpg"
            ></img>
            <button
                onClick
             className="feed__navbar__btn">Sube archivos</button>
          </div>
        </div>
        <section className="filters">
          <div className="filters__options">
            {FeedOptions.map((option, i) => (
                <button 
                className={option.selected ? "filters__options__btn__active" : "filters__options__btn"}
            >
            <p>{option.text}</p>
            </button>
            ))}
          </div>
        </section>
        <section className="posts__container">
                <div className="post">
                    {/* <img className="post__img" src={post.img} alt="img"/>
                        <p>{post.author.name}</p>
                    <div className="post__metadata">
                        <img src={post.author.img} alt="img"/>
                        <div className="post__stats">
                            <img src={responsesIcon} alt="responses"/>
                                <p>{post.responses.length()}</p>
                            <img src={likesIcon} alt="likes"/>
                                <p>{post.likes.length()}</p>
                        </div>
                    </div> */}
                </div>
        </section>
      </section>
    </>
  );
}
