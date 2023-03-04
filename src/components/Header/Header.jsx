import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        App Logo
      </div>
      <div className="search-bar">
        <input type="text" />
        <SearchIcon className="icon"/>
      </div>
      <div className="icons">
        <ShoppingCartIcon className="icon"/> 
        <FavoriteBorderIcon className="icon"/>
        <AccountCircleIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;
