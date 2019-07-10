import React from 'react';
import Search from './Search'
import Logo from './Logo'
import Links from './Links'
import Profile from './Profile'

const Navbar = ({ authentication, logout }) => {
  return (
    <div>
      <Logo />
      <Search />
      <Links authentication={authentication} logout={logout}/>
      <Profile />
    </div>
  );
};

export default Navbar;