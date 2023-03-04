import React from 'react'
import abc from "../../assets/starsbg.mp4"
import marsRestaurant from "../../images/marsRestaurant.jpg"
import './styles.scss'

const CardCart = () => {
  return (
    <div className='cartCard'>
        <img src={marsRestaurant} alt="abc"/>
        <div className='item-details'>
            <p>Marsian Cocktail</p>
            <p className='price'>$400</p>
        </div>
        <div className='qty-price'>

        </div>
      
    </div>
  )
}

export default CardCart