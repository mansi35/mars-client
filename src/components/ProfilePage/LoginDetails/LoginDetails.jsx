import React from 'react';
import './LoginDetails.scss';

function LoginDetails() {
  return (
    <div className="loginDetails">
      <div className="loginDetails__content">
        <div className="loginDetails__contenthead">
          <div className="loginDetails__profile">
            <h4>Login Details</h4>
            <h6>Manage your email address mobile number and password</h6>
          </div>
        </div>
        <div className="loginDetails__seperator" />
        <div className="loginDetails__name">
          <div className="loginDetails__fields__content">
            <h6>Mobile Number</h6>
            <p>+91 9222222222</p>
          </div>
        </div>
        <div className="loginDetails__seperator" />
        <div className="loginDetails__emails">
          <div className="loginDetails__emails__content">
            <h6>Email ID</h6>
            <div className="loginDetails__add">
              <h6>sarfarazalisyed2001@gmail.com</h6>
            </div>
          </div>
          <p>Verify your email</p>
        </div>
        <div className="loginDetails__seperator" />
        <div className="loginDetails__fields">
          <div className="loginDetails__fields__content">
            <h6>Password</h6>
            <div className="loginDetails__add">
              <h6>******</h6>
            </div>
          </div>
          <p>Change Password?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginDetails;
