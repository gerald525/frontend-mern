import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./Profile.css')


class Profile extends React.Component {

  render() {
    // test if localStorage.token works
    console.log(localStorage.token)

    if (!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="profile-container">
          <div className="profile-contents">
            <h1>Profile</h1>
            <p>Email</p>
            <div className="profile-data">
              <small>[ input data from backend ]</small>
            </div>
            <p>Password</p>
            <div className="profile-data">
              <small>[ input data from backend ]</small>
            </div>
            <Link to="/profile-edit"><button className="profile-edit-button">Edit</button></Link>
          </div>

        </div>
      )
    }
  }

}

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