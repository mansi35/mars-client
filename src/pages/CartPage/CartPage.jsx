import React from "react";
import CardCart from "../../components/CartCard/CardCart";
import "./styles.scss";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CartPage = () => {
  const [slot, setSlot] = React.useState("1");

  const handleChange = (event) => {
    setSlot(event.target.value);
  };

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
          <CardCart Aslots={slot}/>
          <CardCart Aslots={slot}/>
          <CardCart Aslots={slot}/>
          <CardCart Aslots={slot}/>
          <CardCart Aslots={slot}/>
        </div>

        <div className="payment-div">
          <button className="pay-btn">PROCEED TO PAY</button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CartPage;
