/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Input from '../../Input/Input';
import './EditProfile.scss';

function EditProfile({ open, setOpen }) {
  const initialState = {
    fullName: '',
    birthDate: new Date(),
    gender: 'Male',
    maritialStatus: 'Married',

  };
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <div className="editProfile">
        <div className="editProfile__head">
          <h3>Edit Profile</h3>
        </div>
        <div className="editProfile__content">
          <div className="editProfile__details">
            <div className="editProfile__details__row">
              <div className="editProfile__details__query">
                <p>
                  Full Name
                  <span>*</span>
                </p>
                <Input name="fullName" label="Full Name" handleChange={handleChange} />
              </div>
              <div className="editProfile__details__query">
                <p>
                  Birthday
                </p>
                <Input name="birthDate" label="Date" type="date" id="date" handleChange={handleChange} />
              </div>
            </div>
            <div className="editProfile__details__row">
              <div className="editProfile__details__query">
                <p>
                  Gender
                </p>
                <select name="gender" onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="editProfile__details__query">
                <p>
                  Marital Status
                </p>
                <select name="maritialStatus" onChange={handleChange}>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>
          </div>
          <div className="editProfile__buttons">
            <button type="button" className="editProfile__cancelbtn" onClick={handleClose}>Cancel</button>
            <button type="button" className="editProfile__savebtn" onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    </Dialog>

  );
}

export default EditProfile;
