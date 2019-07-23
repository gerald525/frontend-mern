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
    console.log(response);
    if (response.data.error) {
      this.setState({ error: {
        message: response.data.error.message,
        status: response.data.error.status
        }
      })
    } else {
      localStorage.setItem('token', response.data.token)
      this.setState({
        currentUser: response.data.user
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
