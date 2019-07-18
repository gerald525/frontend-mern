import React from 'react';
import { Redirect, Link } from 'react-router-dom'
const logo = require('../../images/MIAcademy_logo-_white.png')
require('./Login.css')

const Login = ({ handleInput, handleLogin }) => {
  if (localStorage.token) {
    console.log('authenticated, redirect to dashboard')
    return <Redirect to="/dashboard" />
  } else {
    return (
      <div className="login-background">
        <img className="login-logo" src={logo} alt="MI Academy Logo"/>
        <div className="mobile-form-alignment">
          <form>
            <label className="form-label">Email</label>
            <br/>
            <input type="email" name="email" id="email" onChange={handleInput} />
            <br/>
            <label className="form-label">Password</label>
            <br/>
            <input type="password" name="password" id="password" onChange={handleInput}/>
            <br/>
            <input className="login-form-button" type="submit" value="Sign In" onClick={handleLogin} />
          </form>
          <Link to="/forgotpassword"><p className="forgot-password">Forgot your password?</p></Link>
        </div>
      </div>
    )
  }
}

export default Login;