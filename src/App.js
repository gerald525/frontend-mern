import React from 'react';
import Routes from './Routes';
import './App.css';
import Error from './components—Pages/Error/Error'
const axios = require('axios')


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
    }
  }

  login = async (email, password) => {
    const credentials = { email: email, password: password }
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/login', credentials)
      if (response.error) {
        return response.error
      } else {
        return response
      }
    } catch(err) {
      console.log(err.message);
      return { error: {
          message: err.message,
          status: err.status
        }
      }
      // const response = { error: {
      //   message: 'Could not contact the server',
      //   status: 500
      //   }
      // }
    }
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      error: null
    })
  }

  handleLogin = async (event) =>  {
    event.preventDefault()
    const { email, password } = this.state
    const response = await this.login(email, password)
    if (response.error) {
      this.setState({ error: {
        message: response.error.message,
        status: response.error.status
        }
      })
    } else {
    localStorage.setItem('token', response.data.token)
    this.setState({
      currentUser: response.data.user,
      error: null
    })
    console.log(this.state);
    }
  }


  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }


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
