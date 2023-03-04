import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideProfile from '../../components/ProfilePage/SideProfile/SideProfile';
import ProfileDetailsRight from '../../components/ProfilePage/ProfileDetailsRight/ProfileDetailsRight';
import './Profile.scss';

function ProfileDetails() {
  return (
    <div className="ProfileDetails">
      <div className="ProfileDetails__content">
        <div className="ProfileDetails__contenthead">
          <div className="ProfileDetails__route">
            <Link to="/"><p>My Account</p></Link>
            <ChevronRightIcon />
            <Link to="/profile"><p>My Profile</p></Link>
          </div>
        </div>
        <div className="ProfileDetails__mainContent">
          <div className="ProfileDetails__profilebox">
            <SideProfile />
          </div>
          <ProfileDetailsRight />
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;