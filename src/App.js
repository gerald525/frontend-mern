import React from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Error from './components—Pages/Error/Error'
import { throwStatement } from '@babel/types';
const axios = require('axios')


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
    }
  }
  // state = {
  //   currentUser: null,
  // }
  // componentDidMount = async () => {

  // }

  login = async (email, password) => {
    const credentials = { email: email, password: password }
    try {
      return await axios.post(process.env.REACT_APP_API_URL + '/auth/login', credentials)
    } catch(err) {
      console.log(err.message);
      this.setState({ error: {
        message: 'Could not contact the server',
        status: 500
        }
      })
    }
  }

  logout = () => {
    console.log('logging out');
    localStorage.removeItem('token')
    this.setState({
      error: null
    })
  }

  handleLogin = async (event) =>  {
    event.preventDefault()
    const { email, password } = this.state
    const response = await this.login(email, password)
    console.log(response)
    if (response.data.error) {
      this.setState({ error: {
        message: response.data.error.message,
        status: response.data.error.status
        }
      })
    } else {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', response.data.user.programs[0])
      console.log(response.data.user)
      // console.log(localStorage.user)
      // get user programs ID
      const userProgramId = response.data.user.programs[0]
      console.log(userProgramId)
      this.setState({
        currentUser: response.data.user, // {currentUser: { foundUser, token }}
      })
    }
  }


  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  // fetchProgram = async () => {
  //   // need the user project id
  //   console.log('fetch Program function');
  //   const url = process.env.REACT_APP_API_URL + `/user/program/`
  //   const options = {
  //     token: localStorage.token
  //   }
  //   // console.log(token)
  //   try {
  //     return await axios.get(url, options)
  //   } catch(err) {
  //     console.log(err.message);
  //     this.setState({ error: {
  //       message: 'Could not contact the server',
  //       status: 500
  //       }
  //     })
  //   }
  // }

  // loadProgramData = async () => {
  //   console.log('Load Program Data function');
  //   try {
  //     const response = await this.fetchProgram()
  //     console.log(response);
  //     if (response.data.error) {
  //       this.setState({ 
  //         error: {
  //           message: response.data.error.message,
  //           status: response.data.error.status
  //         },
  //         loading: false
  //       })
  //     } else {
  //       console.log('updating state with Program Data');
  //       this.setState({
  //         programData: response.data.programData
  //       })
  //       console.log(this.state.programData);
  //     }
  //   } catch(err) {
  //     this.setState({ 
  //       error: {
  //         message: err.message,
  //         status: err.status
  //       },
  //       loading: false
  //     })
  //   }
  // }

  render() {
    const { programData, error, currentUser } = this.state

      return (
        <div className="App">
          {/* {token ? <Navbar logout={this.logout} /> : null } */}
          {error && <Error status={error.status} message={error.message}/>}
          <Routes 
            handleLogin={this.handleLogin} 
            handleInput={this.handleInput}
            programData={programData}
            loadProgramData={this.loadProgramData}
            currentUser={currentUser}
            logout={this.logout}
            // error={error}  
          />
        </div>
      );
    // const token = localStorage.token
  }
}

export default App;
