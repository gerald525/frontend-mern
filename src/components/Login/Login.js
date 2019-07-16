import React from 'react';
import { Redirect } from 'react-router-dom'

const Login = ({ handleInput, handleLogin }) => {
  if (localStorage.token) {
    console.log('authenticated, redirect to dashboard')
    return <Redirect to="/dashboard" />
  } else {
    return (
      <form>
        <label>Email</label>
        <input type="email" name="email" id="email" onChange={handleInput} />
        <label>Password</label>
        <input type="password" name="password" id="password" onChange={handleInput}/>
        <input type="submit" value="Submit" onClick={handleLogin} />
      </form>
    )
  }
}

export default Login;