import React from 'react';
import LoginDetails from '../LoginDetails/LoginDetails';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileVerificationHeader from '../ProfileVerificationHeader/ProfileVerificationHeader';
import './ProfileDetailsRight.scss';

function ProfileDetailsRight() {
  return (
    <div className="ProfileDetailsRight">
      <ProfileVerificationHeader />
      <ProfileInfo />
      <LoginDetails />
    </div>
  );
}

export default ProfileDetailsRight;
