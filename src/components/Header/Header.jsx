import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";
import Auth from "../Auth/Auth";
import logo from "../../assets/Logo.png"

function Header() {
  const [openAuth, setOpenAuth] = useState(false);
  const handleOpen = () => setOpenAuth(true);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search-bar">
        <input type="text" />
        <SearchIcon className="icon"/>
      </div>
      <div className="icons">
        <ShoppingCartIcon className="icon"/> 
        <FavoriteBorderIcon className="icon"/>
        <AccountCircleIcon className="icon" onClick={handleOpen}/>
      </div>
      <Auth open={openAuth} setOpen={setOpenAuth} />
    </div>
  );
}

export default Header;
