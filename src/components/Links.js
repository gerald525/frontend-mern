import React from 'react';
import { Link } from 'react-router-dom'

const Links = ({ logout, authentication }) => {
  return (
    <>
      {authentication ? <p onClick={logout}>Logout</p> : <Link to="/login">Login</Link>}
    </>
  );
};

export default Links;