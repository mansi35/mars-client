import React from 'react';
import './Rocket.scss';
// import { productData, responsive } from "../../components/MenuItem/data";
// import { productData, responsive } from "../../components/MenuItem/EarthDataItems";

function Rocket({selectedItem}) {
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
                <p>Add to Cart</p>
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
  )
}

export default Rocket