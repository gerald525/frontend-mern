import React from 'react';
import Search from './Search'
import Logo from './Logo'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const Navbar = ({ logout }) => {
  const token = localStorage.token
  return (
    <div>
      <Logo />
      <Search />
      {token ? <p onClick={logout}>Logout</p> : <Link to="/help">Help Center</Link>}
      <Profile />
    </div>
  );
};

export default Navbar;