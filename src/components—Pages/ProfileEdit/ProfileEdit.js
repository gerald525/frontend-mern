import React from 'react';
import { Redirect, Link } from 'react-router-dom';
require('./ProfileEdit.css')

class ProfileEdit extends React.Component {

  render() {

    if (!localStorage.token) {
      return <Redirect to="/profile" />
    } else {
      return (
        <div className="profile-edit-container">
          <div className="profile-edit-contents">
            <Link to="/landing-page-dashboard"><p>Back</p></Link>
            <h1>Edit Profile</h1>
            <form className="profile-edit-form">
              <label>Email</label>
              <input type="email" name="email" id="email-input2" />
              <br />
              <input className="edit-form-button" type="submit" value="Submit" />
            </form>
          </div>

        </div>
       )
      
    }
  }

}

export default ProfileEdit;