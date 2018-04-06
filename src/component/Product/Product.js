
import React from'react';
import './Product.css'


export default function Product (props) {
  
    return (
      <div className="Product1">
        <h1> {props.name} </h1>
        <h2>${props.price} </h2>
        <img src={props.image} alt="image"/>
       
      </div>
    );
  }


