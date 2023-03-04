import { React, useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { useCart } from '../../context/CartContext'
import marsRestaurant from "../../images/marsRestaurant.jpg";
import "./styles.scss";

const CardCart = () => {
  const [quantity, setQuantity] = useState(0);

  function increaseQty() {
    setQuantity((prev) => {
      return prev + 1;
    });
  }

  function decreaseQty() {
    setQuantity((prev) => {
      return prev - 1;
    });
  }
  
  return (
    <div className="cartCard">
      <div className="imgs-details">
        <img src={marsRestaurant} alt="abc" />
        <div className="item-details">
          <div className="name">Marsian Cocktail</div>
          <p className="price">$400</p>
          <div className="btn-flex">
            <IconButton aria-label="delete" onClick={decreaseQty}>
              <RemoveRoundedIcon />
            </IconButton>
            <p>{quantity}</p>
            <IconButton aria-label="delete" onClick={increaseQty}>
              <AddRoundedIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="qty-price"><p>$800</p></div>
    </div>
  );
};

export default CardCart;
