import React from 'react';


const Card = props => (
    <>
    <div className="cardStyle">
        {/* <img src={props.image} /> */}
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    </>
)
export default Card;