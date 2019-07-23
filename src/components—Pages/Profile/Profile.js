import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./Profile.css')


class Profile extends React.Component {

  state = {
    profileData: null
  }

  componentDidMount = async () => {
    const token = localStorage.token
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/user/fetch-user', {}, {headers: { token: token }})
      this.setState({
        profileData: response.data.user.email
      })
    } catch(err) {
      console.log(err.message);
      this.setState({ error: {
        message: 'Could not contact the server for profile.js',
        status: 500
      }
    })
    }
  }

  render() {
    console.log(this.state.profileData)

    if (!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="profile-container">
          <div className="profile-contents">
            <h1>Profile</h1>
            <p>Email</p>
            <div className="profile-data">
            {this.state.profileData ? <small>{this.state.profileData.email}</small> : null }
            </div>
            <p>Password</p>
            <div className="profile-data">
            {this.state.profileData ? <small className="profile-password">{this.state.profileData.password}</small> : null }
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