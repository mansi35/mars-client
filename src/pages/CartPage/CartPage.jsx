import React from "react";
import CardCart from "../../components/CartCard/CardCart";
import "./styles.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CartPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="cartpage">
        <div className="cart-items">
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
        </div>
        <div className="payment-div">
          <button className="pay-btn">Proceed to Pay</button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CartPage;
