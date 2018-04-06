
import React from'react';
import './Product.css'


export default function Product (props) {
  
    return (
      <div className="Product1">
      <div id="single">
      <img src={props.image} alt="image"/>
        <h1> {props.name} </h1>
        <h2>${props.price} </h2>
        </div>
       
      </div>
    );
  }


