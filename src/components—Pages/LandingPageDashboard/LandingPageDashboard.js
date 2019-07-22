import React from 'react';
// import Loading from '../../components/Loading/Loading'
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./LandingPageDashboard.css')


class LandingPageDashboard extends React.Component  {
  constructor(){
    super()
    this.state = {
      dataProgram: null,
      authentication: false,
      currentUser: null,
    }
  }
  // state = {
  //   dataProgram: null,
  //   authentication: false,
  //   currentUser: null,
  // }

  componentDidMount = async () => {
    // checking if data is available from props, placing currentUser = {currentUser} in LandingPd routes
    // console.log(this.props)
    // const url = process.env.REACT_APP_API_URL + '/user/program'

    // getting program id from token user
    console.log(localStorage.user)

    // getting program id from currentUser
    // let id = []
    // if (this.props.currentUser = null)
    let currentUser = this.props.currentUser
    console.log(currentUser.programs[0])
   
    const id = currentUser.programs[0]
    

  
    // need token for authorisation
    let token = localStorage.token

    try {
      const response = await axios.get(`http://localhost:5000/user/program/${id}`, {headers: { token: token }})
      this.setState({
        dataProgram: response.data,
        authentication: true,
        currentUser: this.props.currentUser
      })
      
    } catch(err) {
      console.log(err.message);
      this.setState({ error: {
        message: 'Could not contact the server',
        status: 500
      }
    })
  }
}


// programList = () => {
//   return (
//     <div>
//         {this.state.programData.map((item, index) => (
//         <div >
//           {this.state.programData.name}: {this.state.programData.description} by {this.state.programData.endDate} }
//         </div>
//       ))}
//       </div>
//   )
// }

render() {
  console.log(this.state)
  const { dataProgram } = this.state
  console.log(dataProgram)
 
 if (!localStorage.token) {
   return <Redirect to="/login" />
 } else {
    return (
          
      <div className="mobile-landingPage-container"> 
        <div className="mobile-landingPage-contents">
          <div className="mobile-welcome-box"><p>G'day Mate</p></div>
          <Link to="/program-dashboard">
            <div className="mobile-program-link">
            <p>Program</p>
             {this.state.dataProgram ? <small>{this.state.dataProgram.name}</small> : <small>Loading program name...</small>}
            </div>
          </Link>
          <Link to="/profile"><div className="mobile-profile-link"><p>Profile</p></div></Link>
          <div className="mobile-support-link"><p>Support</p></div>
        </div>
      </div>
    
      )
    }
  
  }
}

  export default LandingPageDashboard; 