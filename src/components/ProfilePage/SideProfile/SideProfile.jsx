import React from 'react';
import './SideProfile.scss';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

function SideProfile() {
  return (
    <div className="sideProfile">
      <div className="sideProfile__content">
        <div className="sideProfile__top">
          <h1>MS</h1>
        </div>
        <div className="sideProfile__bottom">
          <div className="sideProfile__name">
            <h4>Mansi Sharma</h4>
            <h6>Personal Profile</h6>
          </div>
          <div className="sideProfile__profile">
            <Person2Icon />
            <h6>Profile Details</h6>
          </div>
          <div className="sideProfile__logout">
            <LogoutIcon />
            <h6>Logout </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProfile;
