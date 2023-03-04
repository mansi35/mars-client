import React from 'react'
import CardCart from '../../components/CartCard/CardCart'
import "./styles.scss"

const CartPage = () => {
  return (
    <div className='cartpage'>CartPage
    <div className='cart-items'>
        <CardCart/>
    </div>
    </div>

  )
}

export default CartPage