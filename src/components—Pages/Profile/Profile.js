import React from 'react';
import { Redirect, Link } from 'react-router-dom';
require('./Profile.css')

const Profile = (props) => {
    const { currentUser } = props.location.state
    const token = localStorage.token
    if (!token) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="profile-container">
          <div className="profile-contents">
            <h1>Profile</h1>
            <p>Email</p>
            <div className="profile-data">
              <small>{currentUser.email}</small>
            </div>
            <Link to="/profile-edit"><button className="profile-edit-button">Edit</button></Link>
          </div>
        </div>
      )
    }
};


export default Profile;



















// Layout for React.Component for further use!!!!

// import React from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios')
// require('./Profile.css')

// class Profile extends React.Component {

//   render() {

//     return (
//       null
//     )
//   }

// }

// export default Profile;