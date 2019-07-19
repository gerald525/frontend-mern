import React from 'react';
import Loading from '../Loading/Loading'
import { Redirect } from 'react-router-dom'
const axios = require('axios')

class Dashboard extends React.Component  {
  constructor(){
    super()
    this.state = {
      programData: null,
      authentication: false,
      currentUser: null,
    }
  }

  componentDidMount = async () => {
    console.log('fetch Program function');
    // const url = process.env.REACT_APP_API_URL + '/user/program'
    // let programData = this.props.programData
    let currentUser = this.props.currentUser
    console.log(currentUser.programs[0])
    let id = currentUser.programs[0]
    let token = localStorage.token
    // const options = {
    //   token: localStorage.token
    // }
    try {
      const response = await axios.get(`http://localhost:5000/user/program/${id}`, {headers: { token: token }})
      this.setState({
        programData: response.data,
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
  // programData =  loadProgramData()
  // console.log(programData)
  // console.log(props)
  // let programData = props.programData
  // let currentUser = props.currentUser
  // console.log(currentUser.programs[0])
  // let id = currentUser.programs[0]
  // let token = localStorage.token
  // const authentication = await axios.get(`http://localhost:5000/user/program/${id}`, {headers: { token: token }})
  // console.log(authentication)
 
  if (!localStorage.token) {
    console.log('no token, redirecting to login page')
    return <Redirect to="/login" />
  } else if (!this.state.programData) {
    console.log('No course Data. Call loadProgramData function')
  }

  return (
    <div>
      {this.state.programData ? 
        
        <div >
            {this.state.programData.name}: {this.state.programData.description} by {this.state.programData.endDate} }
          </div>

        : <Loading />}
    </div>
  );
  }
}

export default Dashboard;