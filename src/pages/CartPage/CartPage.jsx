import React from "react";
import CardCart from "../../components/CartCard/CardCart";
import "./styles.scss";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CartPage = () => {
  const [slot, setSlot] = React.useState("1");
  const cartItems = useSelector(state => state.cart);

  console.log(cartItems);
  const handleChange = (event) => {
    setSlot(event.target.value);
  };

  const price = ()=>{
    let p=0;
    cartItems.forEach((item)=>{
      p+=item.price.slice(1)*item.qty;
    })

    return p;
  }

  // if(price()===0){
  //   return <div className="cartpage">
  //     <div className="cartpage-no-items">
  //       You Have No Items in the Cart
  //     </div>
  //   </div>
  // }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="cartpage">
        <div className="select-schedule">
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Slots</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={slot}
              onChange={handleChange}
            >
              <MenuItem value={"1"}>One</MenuItem>
              <MenuItem value={"12"}>Two</MenuItem>
              <MenuItem value={"123"}>Three</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="cart-items">
          {cartItems.map((item)=>{
             return <CardCart Aslots={slot} item={item}/>
          })}
        </div>

        <div className="payment-div">
          <p>Total Price: ${price()}</p>
          <button className="pay-btn">PROCEED TO PAY</button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CartPage;
