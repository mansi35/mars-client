/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ProfileVerificationHeader.scss';

function ProfileVerificationHeader() {
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(true);
  const [verifyAddress, setVerifyAddress] = useState(false);

  return (
    <div className="verify">
      <div className="verify__details">
        <p>Add all your details for better experience </p>
        <div className="verify__content">
          <div className={verifyEmail ? 'verified' : 'unverified'}>
            {verifyEmail ? <CheckCircleIcon /> : <AddCircleIcon />}
            {verifyEmail ? <h6>Verified Email</h6> : <h6>Verify Email</h6>}

          </div>
          <div className={verifyPhone ? 'verified' : 'unverified'}>
            {verifyPhone ? <CheckCircleIcon /> : <AddCircleIcon />}
            {verifyPhone ? <h6>Verified Phone Number</h6> : <h6>Verify Phone Number</h6>}
          </div>
          <div className={verifyAddress ? 'verified' : 'verify__address'}>
            {verifyAddress ? <CheckCircleIcon /> : <AddCircleIcon />}
            {verifyAddress ? <h6>Added Address</h6> : (
              <>
                <h6>Add Address</h6>
                <p>*</p>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileVerificationHeader;
