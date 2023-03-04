import React from "react";
import CardCart from "../../components/CartCard/CardCart";
import { useCart } from '../../context/CartContext'
import "./styles.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CartPage = () => {
  const {
    cart,
    showCartItems,
    setShowCartItems,
    showCart,
    checkout
  } = useCart()
  const totalCents = cart.reduce((sum, entry) => {
    return sum + entry.item.priceCents * entry.quantity
  }, 0)
  return (
    <div className='cartpage'>CartPage
    <div className='cart-items'>
        <CardCart/>
    </div>
    </div>
  )
}

export default CartPage;
