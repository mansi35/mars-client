import React from 'react';
import Background from '../Background/Background';
import './OfferCard.scss';

function OfferCard({ image }) {
  return (
    <div className="offerCard">
      <div className="offerCard__bg">
        <Background />
      </div>
      <div className="offerCard__imagetext">
        <div>
          <h3>North Indian</h3>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
