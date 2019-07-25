import React from 'react';
require('./ForgotPassword.css')

const ForgotPassword = ({ handleInput, handleSubmit }) => {
  return (
    <div className="forgot-password-container">
      <div className="password-content-container">
      <h1>Forgot Password</h1>
      <form>
            <label className="forgot-password-label">Email</label>
            <input type="email" name="email" id="email2" onChange={handleInput} />
            <input className="forgotpassword-form-button" type="submit" value="Resend Password" onClick={handleSubmit} />
      </form>
      <p>Copyright © 2019 MI ACADEMY. All rights reserved.</p>
      <p>Term of Use</p>
      </div>
    </div>
      
  )
}

export default ForgotPassword;