import React, { useState } from 'react';
import OTPInput, { ResendOTP } from 'otp-input-react';

function OtpScreen() {
  const [OTP, setOTP] = useState('');
  return (
    <div>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType='number'
        disabled={false}
        inputClassName='border-2 border-slate-800 rounded'
      />
      <ResendOTP onResendClick={() => console.log('Resend clicked')} />
    </div>
  );
}

export default OtpScreen;
