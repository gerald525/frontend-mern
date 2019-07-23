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
      currentUserData: null,
      currentUserEmail: null,
    }
  }
  
  componentDidMount() {
    // const url = process.env.REACT_APP_API_URL + '/user/program'
    
    const token = localStorage.getItem('token')
    // console.log(token)
    axios.post(process.env.REACT_APP_API_URL + '/user/fetch-user', {}, {headers: { token: token }})
      .then((responseOne) => {
        const id = responseOne.data.user.email.programs[0]
        axios.get(process.env.REACT_APP_API_URL + `/user/program/${id}`, {headers: { token: token }})
          .then((responseTwo) => {
            this.setState({
              dataProgram: responseTwo.data,
              authentication: true,
              currentUser: responseOne.data,
              currentUserData: responseOne.data.user.email,
              currentUserEmail: responseOne.data.user.email.email
            })
          })
      })
      .catch((err) => {
        console.log(err.response)
      })
    
  //   try {
  //     const response = await axios.get(`http://localhost:5000/user/program/${id}`, {headers: { token: token }})
  //     console.log(response)
  //     this.setState({
  //       dataProgram: response.data,
  //       authentication: true,
  //       currentUser: this.props.currentUser
  //     })
      
  //   } catch(err) {
  //     console.log(err.message);
  //     this.setState({ error: {
  //       message: 'Could not contact the server',
  //       status: 500
  //     }
  //   })
  // }
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
  // allowing ${program} to have an id
  const program = this.state.currentUserData ? this.state.currentUserData.programs[0] : null
  console.log(`program id for this user : ${program}`)

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
                    {this.state.currentUserEmail ? <small className="mobile-landingPage-data"> {this.state.currentUserEmail} </small> : <small>Loading user detail...</small>}
                  </div>
                  <Link to={`/program-dashboard/${program}`} >
                    <div className="mobile-program-link">
                    <p>Program</p>
                    {this.state.dataProgram ? <small className="mobile-landingPage-data">[ {this.state.dataProgram.name} ]</small> : <small>Loading program name...</small>}
                    </div>
                  </Link>
                  <Link to="/profile"><div className="mobile-profile-link"><p>Profile</p></div></Link>
                  <div className="mobile-support-link"><p>Support</p></div>
                </div>
              </div>
            
              )
    }
  }
    // if (!this.state.currentUser) {
    //   return null
    // } else {
    //   return (          
    //           <div className="mobile-landingPage-container"> 
    //             <div className="mobile-landingPage-contents">
    //               <div className="mobile-welcome-box"><p>G'day Mate</p></div>
    //               <Link to={`/program-dashboard/${program}`} >
    //                 <div className="mobile-program-link">
    //                 <p>Program</p>
    //                 {this.state.dataProgram ? <small>{this.state.dataProgram.name}</small> : <small>Loading program name...</small>}
    //                 </div>
    //               </Link>
    //               <Link to="/profile"><div className="mobile-profile-link"><p>Profile</p></div></Link>
    //               <div className="mobile-support-link"><p>Support</p></div>
    //             </div>
    //           </div>
            
    //           )
    // }
//   const { dataProgram } = this.state
//   console.log(dataProgram)
 
//  if (!localStorage.token) {
//    return <Redirect to="/login" />
//   } else if (this.props.currentUser === null) {
//     return null
//   } else {
//     return (
          
//       <div className="mobile-landingPage-container"> 
//         <div className="mobile-landingPage-contents">
//           <div className="mobile-welcome-box"><p>G'day Mate</p></div>
//           <Link to="/program-dashboard">
//             <div className="mobile-program-link">
//             <p>Program</p>
//              {this.state.dataProgram ? <small>{this.state.dataProgram.name}</small> : <small>Loading program name...</small>}
//             </div>
//           </Link>
//           <Link to="/profile"><div className="mobile-profile-link"><p>Profile</p></div></Link>
//           <div className="mobile-support-link"><p>Support</p></div>
//         </div>
//       </div>
    
//       )
//     }
  
  }
}

  export default LandingPageDashboard; 