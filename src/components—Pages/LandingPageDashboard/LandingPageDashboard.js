import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./LandingPageDashboard.css')


class LandingPageDashboard extends React.Component  {
  constructor(){
    super()
    this.state = {
      programData: null,
      authentication: false,
      currentUser: null,
      currentUserData: null,
      currentUserEmail: null,
    }
  }
  
  componentDidMount() {
    const token = localStorage.getItem('token')
    axios.get(process.env.REACT_APP_API_URL + '/user', {headers: { token: token }})
      .then((responseOne) => {
        try {
          const id = responseOne.data.user.programs[0]
          axios.get(process.env.REACT_APP_API_URL + `/user/program/${id}`, {headers: { token: token }})
            .then((responseTwo) => {
              this.setState({
                programData: responseTwo.data,
                authentication: true,
                currentUser: responseOne.data.user,
                currentUserEmail: responseOne.data.user.email
              })
            })
        } catch(err) {
          console.log(err.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  render() {
    const { currentUserEmail, programData } = this.state
    const program = this.state.currentUser ? this.state.currentUser.programs[0] : null
    const currentUser = this.state.currentUser ? this.state.currentUser : null
    if(!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      if (!this.state.currentUser) {
        return null
      } else {
        return (          
          <div className="mobile-landingPage-container"> 
            <div className="mobile-landingPage-contents">
              <div className="mobile-welcome-box">
                <p>Welcome</p>
                {currentUserEmail ? <small className="mobile-landingPage-data"> {currentUserEmail} </small> : <small>Loading user detail...</small>}
              </div>
              <Link to={`/program-dashboard/${program}`} >
                <div className="mobile-program-link">
                <p>Program</p>
                {programData ? <small className="mobile-landingPage-data">[ {programData.name} ]</small> : <small>Loading program name...</small>}
                </div>
              </Link>
              <Link to={{
                pathname: "/profile",
                state: { currentUser }
              }}><div className="mobile-profile-link"><p>Profile</p></div></Link>
              <div className="mobile-support-link">
                <p>Support</p>
                <small className="mobile-landingPage-data">[ Unavailable! ]</small>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

  export default LandingPageDashboard; 