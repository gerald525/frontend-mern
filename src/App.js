import React from 'react';
import Routes from './Routes'
import './App.css';
import Navbar from './components/Navbar'
// import { Redirect } from 'react-router-dom'
const axios = require('axios')

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      authentication: false,
      courseData: null
    }
  }
  
  login = async (email, password) => {
    const credentials = { email: email, password: password }
    try {
      return await axios.post('http://localhost:5000/auth/login', credentials)
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
    localStorage.removeItem('token')
    this.setState({ authentication: false })
  }

  authenticateUser = () => {  
    if (this.state.currentUser && localStorage.token) {
      return this.state.authentication ? true : localStorage.token === this.state.currentUser.token
    } else {
      return false
    }
  }

  handleLogin = async (event) =>  {
    event.preventDefault()
    const { email, password } = this.state
    const response = await this.login(email, password)
    if (response.data.error) {
      this.setState({ error: {
        message: response.data.error.message,
        status: response.data.error.status
        }
      })
    } else {
      localStorage.setItem('token', response.data.token)
      this.setState({
        currentUser: response.data.user, // {currentUser: { foundUser, token }}
        authentication: true
      })
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { authentication, courseData } = this.state
    return (
      <div className="App">
        <Navbar logout={this.logout} authentication={authentication} />
        <Routes 
          handleLogin={this.handleLogin} 
          handleInput={this.handleInput}
          authentication={authentication}
          courseData={courseData}
          authenticateUser={this.authenticateUser}
          // logout={this.logout}
        />
      </div>
    );
  }
}

export default App;
