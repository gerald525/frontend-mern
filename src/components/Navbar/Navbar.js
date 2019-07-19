import React from 'react';
// import Search from '../Search/Search'
// import Logo from '../Logo/Logo';
// import Profile from '../Profile/Profile'
import { Link } from 'react-router-dom'
require('./Navbar.css')

const Navbar = ({ logout }) => {
  const token = localStorage.token
  return (
    <div className="mobile-navbar">
      <div className="mobile-contents">
        <Link to="/menu"><div className="mobile-link-logo"></div></Link>
        {/* <Logo /> */}
        {/* <Search /> */}
        <div className="logout-box">
          {token ? <p onClick={logout}>Log Out</p> : null }
        </div>
        {/* //  <Link to="/help">Help Center</Link> */}
        {/* <Profile /> */}
      </div>
    </div>
  );
};

export default Navbar;