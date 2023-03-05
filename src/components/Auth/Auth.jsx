import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import Input from '../Input/Input';
import googlelogin from '../../images/googlelogin.svg';
import { signin, signup } from '../../actions/auth';
import './Auth.scss';
import { AUTH } from '../../constants/actionTypes';

function Auth({ open, setOpen }) {
  const initialState = {
    firstName: '', lastName: '', email: '', phone: '', otp: '', password: '', confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowConfirmPassword = () => setShowConfirmPassword((prevConfirmShowPassword) => !prevConfirmShowPassword);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.confirmPassword) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
    handleClose();
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <div className="auth">
        <form className="auth__main" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="auth__name">
              <div>
                <span style={{ color: "white" }}>First Name</span>
                <Input name="firstName" placeholder="First Name" value={formData.firstName} handleChange={handleChange} />
              </div>
              <div>
                <span style={{ color: "white" }}>Last Name</span>
                <Input name="lastName" placeholder="Last Name" value={formData.lastName} handleChange={handleChange} />
              </div>
            </div>
          )}
          <span style={{ color: "white" }}>Email</span>
          <Input name="email" placeholder="Enter email" value={formData.email} handleChange={handleChange} type="email" />
          <span style={{ color: "white" }}>Password</span>
          <Input name="password" placeholder="Enter your password" style={{ backgroundColor: "white" }} value={formData.password} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          {isSignUp && (
            <>
              <span style={{ color: "white" }}>Confirm Password</span>
              <Input style={{ color: "white" }} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} handleChange={handleChange} type={showConfirmPassword ? 'text' : 'password'} handleShowPassword={handleShowConfirmPassword} />
            </>
          )}
          <button type="submit" className="auth__email">{isSignUp ? 'CONTINUE' : 'LOGIN'}</button>
          <p className="auth__divider">
            Or
            {' '}
            {isSignUp ? 'Signup' : 'Login'}
            {' '}
            With
          </p>
          <GoogleLogin
            clientId="506995339520-77kuiakka8g9pd6g5sadd70gatmssveb.apps.googleusercontent.com"
            render={(renderProps) => (
              <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} className="auth__google">
                <img src={googlelogin} alt="Login with Google" />
                {isSignUp ? 'Signup' : 'Login'}
                {' '}
                with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <p>
            by proceeding, you agree to gosafejourney’s
            {' '}
            <span>Privacy Policy, User Agreement</span>
            {' '}
            &
            {' '}
            <span>T&Cs</span>
          </p>
          <center className="auth__switchMode">
            {isSignUp ? (
              <p style={{ color: "white" }}>
                Already have an Account?
                {' '}
                <span onClick={() => setIsSignUp(false)}>Sign in here</span>
              </p>
            ) : (
              <p style={{ color: "white" }}>
                Don&apos;t have an Account?
                {' '}
                <span onClick={() => setIsSignUp(true)}>Sign up here</span>
              </p>
            )}
          </center>
        </form>
      </div>
    </Dialog>
  );
}

export default Auth;
