import React from 'react';
import './OfferCard.scss';

function OfferCard({ click, name, url, price,description }) {
  return (
    <div className="offerCard" onClick={()=>{click({name,description,price,url})}}>
      <div className="offerCard__bg">
        <img src={url}/>
      </div>
      <div className="offerCard__imagetext">
        <div>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
