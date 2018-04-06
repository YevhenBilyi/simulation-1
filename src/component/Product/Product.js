
import React from'react';


export default function Product (props) {
  
    return (
      <div className="Product">
        <h1> {props.name} </h1>
        <h2>{props.price} </h2>
        <div><img src={props.image} alt="image"/></div>
      </div>
    );
  }


