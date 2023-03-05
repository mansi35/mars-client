import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ReactComponent as MyProfileIcon } from '../../images/myProfileIcon.svg';
import SearchIcon from '@mui/icons-material/Search';
import decode from 'jwt-decode';
import "./Header.scss";
import Auth from "../Auth/Auth";
import logo from "../../assets/Logo.png"
import Logout from '@mui/icons-material/Logout';
import {
  Avatar, IconButton, ListItemIcon, Menu, MenuItem,
} from '@mui/material';
import { LOGOUT } from "../../constants/actionTypes";
import { useDispatch } from "react-redux";

function Header(props) {
  const [openAuth, setOpenAuth] = useState(false);
  const handleOpen = () => setOpenAuth(true);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(currentUser)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = currentUser?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setCurrentUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line
  }, [location]);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
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
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar className="header__profile" src={currentUser.result.imageUrl} alt={currentUser.result.fullName}>{currentUser.result.fullName[0]}</Avatar>
            </IconButton>
          ) :
          (
            <div>
              <button style={{ fontSize: "18px", backgroundColor: "#1FBCFF", color: "white", borderRadius: "7px", cursor: "pointer" }} onClick={handleOpen} >Sign In</button>
            </div>
          )}

      </div>
      <Auth open={openAuth} setOpen={setOpenAuth} />
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
            <MyProfileIcon />
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
  );
}

export default Header;
