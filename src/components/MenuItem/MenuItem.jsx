import React from "react";
import './Menuitem.scss';

export default function MenuItem(props) {


  return (
    <div className="card" onClick={()=>{props.click(props.name)}}>
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