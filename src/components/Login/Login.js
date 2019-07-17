import React from 'react';
import { Redirect } from 'react-router-dom'
require('./Login.css')

const Login = ({ handleInput, handleLogin }) => {
  if (localStorage.token) {
    console.log('authenticated, redirect to dashboard')
    return <Redirect to="/dashboard" />
  } else {
    return (
      <div className="login-background">
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
        </div>
      </div>
    )
  }
}

export default Login;