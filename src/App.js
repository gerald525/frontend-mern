import React from 'react';
import Routes from './Routes'
import './App.css';
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

  handleLogin = async (event) =>  {
    event.preventDefault()
    const { email, password } = this.state
    const response = await this.login(email, password)
    console.log(response);
    if (response.error) {
      this.setState({ error: {
        message: response.error.message,
        status: response.error.status
        }
      })
    } else {
      this.setState({
        currentUser: response.user,
        authenticated: true
      })
      localStorage.setItem('token', response.token)
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
        <Routes 
          handleLogin={this.handleLogin} 
          handleInput={this.handleInput}
          authentication={authentication}
          courseData={courseData}
        />
      </div>
    );
  }
}

export default App;
