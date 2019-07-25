import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import logo from '../../images/MIAcademy_logo-_white.png'
require('./Login.css')

const Login = ({ handleInput, handleLogin }) => {
  if (localStorage.token) {
    console.log('authenticated, redirect to home page')
    return <Redirect to="/landing-page-dashboard" />
  } else {
    return (
      <div className="login-background">
        <div className="login-content">
          <img className="login-logo" src={logo} alt="MI Academy Logo"/>
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
            <Link to="/forgotpassword"><h3 className="forgot-password">Forgot your password?</h3></Link>
            <p>Copyright © 2019 MI ACADEMY. All rights reserved.</p>
            <p>Term of Use</p>
        </div>
      </div>
    )
  }
}

export default Login;