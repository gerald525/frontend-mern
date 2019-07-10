import React from 'react';
import { Link } from 'react-router-dom'

const Links = ({ logout, authentication }) => {
  return (
    <>
      {authentication ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
    </>
  );
};

export default Links;