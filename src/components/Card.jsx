import React from 'react';


const Card = props => (
    <>
    <div className="card">
        <img src={props.img} />
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    </>
)
export default Card;