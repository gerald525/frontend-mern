import React from 'react';
require('./Menu.css')

const Menu = () => {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-contents">
        <div className="mobile-welcome-box"><p>G'day Mate</p></div>
        <div className="mobile-project-link"><p>Projects</p></div>
        <div className="mobile-account-details-link"><p>Account Details</p></div>
        <div className="mobile-support-link"><p>Support</p></div>
      </div>
    </div>
  )
}

export default Menu;