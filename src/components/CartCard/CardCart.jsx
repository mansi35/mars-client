import { React, useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCart } from "../../context/CartContext";
import marsRestaurant from "../../images/marsRestaurant.jpg";
import "./styles.scss";

const CardCart = ({ Aslots }) => {
  const [quantity, setQuantity] = useState(0);
  const [slot, setSlot] = useState(1);

  const handleChange = (event) => {
    setSlot(event.target.value);
  };

  function increaseQty() {
    setQuantity((prev) => {
      return prev + 1;
    });
  }

  function decreaseQty() {
    setQuantity((prev) => {
      return prev - 1;
    });
  }


  return (
    <div className="cartCard">
      <div className="imgs-details">
        <img src={marsRestaurant} alt="abc" />
        <div className="item-details">
          <div className="name">Marsian Cocktail</div>
          <p className="price">$400</p>
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
      </div>
      <div className="qty-price">
        <p>$800</p>
        {Aslots!=="1" && <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Slot</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={slot}
            onChange={handleChange}
          >
            {Aslots.split("").map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>}
      </div>
    </div>
  );
};

export default CardCart;
