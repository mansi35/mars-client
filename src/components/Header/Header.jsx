import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      APP LOGO
      <div className="icons">
        <ShoppingCartIcon className="icon"/>
        <FavoriteBorderIcon className="icon"/>
        <AccountCircleIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;
