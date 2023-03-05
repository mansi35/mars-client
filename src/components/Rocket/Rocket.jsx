import { React, useState,useEffect } from "react";
import "./Rocket.scss";
import { useDispatch } from 'react-redux';
// import { productData, responsive } from "../../components/MenuItem/data";
// import { productData, responsive } from "../../components/MenuItem/EarthDataItems";
import IconButton from "@mui/material/IconButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { addFoodItem, decrementFoodItem, incrementFoodItem, removeFoodItem } from "../../actions/cart";

function Rocket({ selectedItem }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
    setQuantity(0);
  },[selectedItem])

  function increaseQty() {
    setQuantity((prev) => {
      return prev + 1;
    });
    if(quantity===0) dispatch(addFoodItem(selectedItem));
    else dispatch(incrementFoodItem({...selectedItem, qty:quantity}));
}

  function decreaseQty() {
    if(quantity!==0){
    setQuantity((prev) => {
      return prev - 1;
    });
    if(quantity===1) dispatch(removeFoodItem(selectedItem));
    else dispatch(decrementFoodItem({...selectedItem, qty:quantity}));
}
  }
  return (
    <div class="rocket">
      <div class="rocket-body">
        <div class="body"></div>
        <div class="fin fin-left"></div>
        <div class="fin fin-right"></div>
        <div class="window"></div>
      </div>
      <div class="exhaust-flame"></div>
      <ul class="exhaust-fumes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <p>{selectedItem?.name}</p>
          <p>{selectedItem?.description}</p>
          <p>{selectedItem?.price}</p>
          <div className="center-btn">
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
        </li>
      </ul>
      <ul class="star">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Rocket;
