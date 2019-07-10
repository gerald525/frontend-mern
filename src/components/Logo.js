import React from 'react';
require('./Logo.css')

const Logo = () => {
  return (
    <img src={require("../images/MI_logo.png")} alt={'MilkIt Logo'} />
  );
};

export default Logo;