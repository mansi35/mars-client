import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dialog, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '../Input/Input';
import googlelogin from '../../images/googlelogin.svg';
import { signin, signup } from '../../actions/auth';
import './Auth.scss';

function Auth({ open, setOpen }) {
  const initialState = {
    firstName: '', lastName: '', email: '', phone: '', otp: '', password: '', confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [mainAuth, setMainAuth] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [otpVerification, setOtpVerification] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowOtp = () => setShowOtp((prevShowOtp) => !prevShowOtp);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowConfirmPassword = () => setShowConfirmPassword((prevConfirmShowPassword) => !prevConfirmShowPassword);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goBackToMainAuth = () => {
    setOtpVerification(false);
    setMainAuth(true);
  };

  const mainAuthToOtpVerification = (e) => {
    e.preventDefault();
    if (isSignUp) {
      setOtpVerification(true);
      setMainAuth(false);
    } else {
      dispatch(signin(formData, navigate));
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signup(formData, navigate));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <div className="auth">
        {mainAuth && (
          <form className="auth__main" onSubmit={mainAuthToOtpVerification}>
            {isSignUp && (
              <div className="auth__name">
                <div>
                  <span>First Name</span>
                  <Input name="firstName" placeholder="First Name" value={formData.firstName} handleChange={handleChange} />
                </div>
                <div>
                  <span>Last Name</span>
                  <Input name="lastName" placeholder="Last Name" value={formData.lastName} handleChange={handleChange} />
                </div>
              </div>
            )}
            <span>Email</span>
            <Input name="email" placeholder="Enter email" value={formData.email} handleChange={handleChange} type="email" />
            <span>Password</span>
            <Input name="password" placeholder="Enter your password" value={formData.password} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignUp && (
              <>
                <span>Confirm Password</span>
                <Input name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} handleChange={handleChange} type={showConfirmPassword ? 'text' : 'password'} handleShowPassword={handleShowConfirmPassword} />
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
            <button type="button" className="auth__google">
              <img src={googlelogin} alt="Login with Google" />
              {isSignUp ? 'Signup' : 'Login'}
              {' '}
              with Google
            </button>
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
                <p>
                  Already have an Account?
                  {' '}
                  <span onClick={() => setIsSignUp(false)}>Sign in here</span>
                </p>
              ) : (
                <p>
                  Don&apos;t have an Account?
                  {' '}
                  <span onClick={() => setIsSignUp(true)}>Sign up here</span>
                </p>
              )}
            </center>
          </form>
        )}
        {otpVerification && (
          <form className="auth__otp" onSubmit={handleSubmit}>
            <IconButton className="auth__otpGoBack" onClick={goBackToMainAuth}>
              <ArrowBackIcon />
            </IconButton>
            <span>Enter OTP Sent to your EMAIL ADDRESS</span>
            <Input name="otp" placeholder="Enter OTP" handleChange={handleChange} type={showOtp ? 'text' : 'password'} handleShowPassword={handleShowOtp} />
            <button type="submit" disabled={formData.otp.length !== 6} className="auth__email">VERIFY</button>
          </form>
        )}
      </div>
    </Dialog>
  );
}

export default Auth;
