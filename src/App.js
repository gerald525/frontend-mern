import React from 'react';
import Routes from './Routes'
import './App.css';
import Navbar from './components/Navbar'
import ErrorScreen from './components/ErrorScreen'
const axios = require('axios')

class App extends React.Component {
  constructor(){
    super()
    this.state = {
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
    console.log('logging out');
    localStorage.removeItem('token')
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
      })
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  fetchCourseData = async () => {
    console.log('fetch course data function');
    try {
      return await axios.get('http://localhost/private/coursedata', {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${this.state.currentUser.token}`
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

  loadCourseData = async () => {
    console.log('loading data');
    try {
      const response = await this.fetchCourseData()
      console.log(response);
      if (response.data.error) {
        this.setState({ 
          error: {
            message: response.data.error.message,
            status: response.data.error.status
          },
          loading: false
        })
      } else {
        this.setState({
          courseData: response.data.courseData
        })
        console.log(this.state.courseData);
      }
    } catch(err) {
      this.setState({ 
        error: {
          message: err.message,
          status: err.status
        },
        loading: false
      })
    }
  }

  render() {
    const { courseData, error } = this.state
    return (
      <div className="App">
        <Navbar logout={this.logout} />
        {error && <ErrorScreen status={error.status} message={error.message}/>}
        <Routes 
          handleLogin={this.handleLogin} 
          handleInput={this.handleInput}
          courseData={courseData}
          loadCourseData={this.loadCourseData}
        />
      </div>
    );
  }
}

export default App;
