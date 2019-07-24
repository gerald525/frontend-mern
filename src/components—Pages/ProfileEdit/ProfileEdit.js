import React from 'react';
import { Redirect } from 'react-router-dom';
require('./ProfileEdit.css')

class ProfileEdit extends React.Component {

  render() {

    if (!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="profile-edit-container">
          <div className="profile-edit-contents">
            <h1>Edit Profile</h1>
            <form className="profile-edit-form">
              <label>Email</label>
              <br/>
              <input type="email" name="email" id="email-input" />
              <br/>
              <label>Password</label>
              <br/>
              <input type="text" name="password" id="password-input" />
              <br/>
              <input className="edit-form-button" type="submit" value="Submit" />
            </form>
          </div>

        </div>
       )
      
    }
  }

}

export default ProfileEdit;