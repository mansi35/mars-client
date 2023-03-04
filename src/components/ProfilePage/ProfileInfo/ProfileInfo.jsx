import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import './ProfileInfo.scss';
import EditProfile from '../EditProfile/EditProfile';

function ProfileInfo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="profileInfo">
      <div className="profileInfo__content">
        <div className="profileInfo__contenthead">
          <div className="profileInfo__profile">
            <h4>Profile</h4>
            <h6>Basic info, for a faster booking experience</h6>
          </div>
          <div onClick={handleOpen} className="profileInfo__edit">
            <EditIcon />
            <h6>Edit</h6>
          </div>
        </div>
        <div className="profileInfo__seperator" />
        <div className="profileInfo__name">
          <div className="profileInfo__fields__content">
            <h6>Name</h6>
            <p>Sarfaraz Ali Syed</p>
          </div>
        </div>
        <div className="profileInfo__seperator" />
        <div className="profileInfo__fields">
          <div className="profileInfo__fields__content">
            <h6>Birthday</h6>
            <div onClick={handleOpen} className="profileInfo__add">
              <AddIcon />
              <h6>ADD</h6>
            </div>
          </div>
        </div>
        <div className="profileInfo__seperator" />
        <div className="profileInfo__fields">
          <div className="profileInfo__fields__content">
            <h6>Gender</h6>
            <div onClick={handleOpen} className="profileInfo__add">
              <AddIcon />
              <h6>ADD</h6>
            </div>
          </div>
        </div>
        <div className="profileInfo__seperator" />
        <div className="profileInfo__fields">
          <div className="profileInfo__fields__content">
            <h6>Marital Status</h6>
            <div onClick={handleOpen} className="profileInfo__add">
              <AddIcon />
              <h6>ADD</h6>
            </div>
          </div>
        </div>
      </div>
      <EditProfile open={open} setOpen={setOpen} />
    </div>
  );
}

export default ProfileInfo;
