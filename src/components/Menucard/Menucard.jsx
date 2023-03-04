import React from "react";
import './Menucard.scss';

export default function Menucard(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="food_name">{props.name}</h2>
      {/* <p className="price">{props.price}</p> */}
      <p>{props.description}</p>
      {/* <p>
        <button>Add to Cart</button>
      </p> */}
    </div>
  );
}