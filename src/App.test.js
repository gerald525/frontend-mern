import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

// import { login, logout } from './App';

describe('App', () => {
    test('renders', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.exists()).toBe(true);
    });
});





// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       programData: null
//     }
//   }
  
//   login = async (email, password) => {
//     const credentials = { email: email, password: password }
//     try {
//       return await axios.post('http://localhost:5000/auth/login', credentials)
//     } catch(err) {
//       console.log(err.message);
//       this.setState({ error: {
//         message: 'Could not contact the server',
//         status: 500
//         }
//       })
//     }
//   }

//   logout = () => {
//     console.log('logging out');
//     localStorage.removeItem('token')
//     this.setState({
//       error: null
//     })
//   }

//   handleLogin = async (event) =>  {
//     event.preventDefault()
//     const { email, password } = this.state
//     const response = await this.login(email, password)
//     if (response.data.error) {
//       this.setState({ error: {
//         message: response.data.error.message,
//         status: response.data.error.status
//         }
//       })
//     } else {
//       localStorage.setItem('token', response.data.token)
//       this.setState({
//         currentUser: response.data.user, // {currentUser: { foundUser, token }}
//       })
//     }
//   }

//   handleInput = (event) => {
//     event.preventDefault();
//     this.setState({
//       [event.target.id]: event.target.value
//     })
//   }

//   fetchProgram = async () => {
//     console.log('fetch Program function');
//     const url = 'http://localhost:5000/user/program'
//     const options = {
//       token: localStorage.token
//     }
//     try {
//       return await axios.get(url, options)
//     } catch(err) {
//       console.log(err.message);
//       this.setState({ error: {
//         message: 'Could not contact the server',
//         status: 500
//         }
//       })
//     }
//   }

//   loadProgramData = async () => {
//     console.log('Load Program Data function');
//     try {
//       const response = await this.fetchProgram()
//       console.log(response);
//       if (response.data.error) {
//         this.setState({ 
//           error: {
//             message: response.data.error.message,
//             status: response.data.error.status
//           },
//           loading: false
//         })
//       } else {
//         console.log('updating state with Program Data');
//         this.setState({
//           programData: response.data.programData
//         })
//         console.log(this.state.programData);
//       }
//     } catch(err) {
//       this.setState({ 
//         error: {
//           message: err.message,
//           status: err.status
//         },
//         loading: false
//       })
//     }
//   }

//   render() {
//     const { programData, error } = this.state
//     return (
//       <div className="App">
//         <Navbar logout={this.logout} />
//         {error && <ErrorScreen status={error.status} message={error.message}/>}
//         <Routes 
//           handleLogin={this.handleLogin} 
//           handleInput={this.handleInput}
//           programData={programData}
//           loadProgramData={this.loadProgramData}
//         />
//       </div>
//     );
//   }
// }

