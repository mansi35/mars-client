import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";
import Auth from "../Auth/Auth";
import logo from "../../assets/Logo.png"
import Logout from '@mui/icons-material/Logout';
import {
  Avatar, IconButton, ListItemIcon, Menu, MenuItem,
} from '@mui/material';

function Header(props) {
  const [openAuth, setOpenAuth] = useState(false);
  const handleOpen = () => setOpenAuth(true);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate= useNavigate();

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={props.visible}>
        <div className="search-bar">
          <input type="text" />
          <SearchIcon className="icon " />
        </div>
      </div>
      <div className="icons">
        <Link to="/cart" style={{ color: "white" }}><ShoppingCartIcon className="icon" /></Link>
        <FavoriteBorderIcon className="icon" />
        {currentUser ?
          (
            <div>
              <Menu
                className="header__muiMenu"
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 26,
                      height: 26,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => navigate('/profile')}>
                  <ListItemIcon>
                  <AccountCircleIcon className="icon" />
                  </ListItemIcon>
                  <div className="header__profileMenu">
                    <p>My Profile</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="medium" />
                  </ListItemIcon>
                  <div className="header__profileMenu">
                    <p>Logout</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          ) :
          (
            <div>
              <button style={{ fontSize: "18px", backgroundColor: "#1FBCFF", color: "white", borderRadius: "7px", cursor: "pointer" }} onClick={handleOpen} >Sign In</button>
            </div>
          )}

      </div>
      <Auth open={openAuth} setOpen={setOpenAuth} />
    </div>
  );
}

export default Header;
