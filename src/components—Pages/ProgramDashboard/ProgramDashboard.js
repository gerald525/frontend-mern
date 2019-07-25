import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./ProgramDashboard.css')


class ProgramDashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      projectOne: null,
      projectTwo: null,
      projectThree: null,
      projectFour: null 
    }
  }
  
  
  componentDidMount = async () => {
    
    // console.log(this.props.program)
    
    // get the program id first
    // const program = this.props.currentUser
    // console.log(program)
    // const id = this.props.program
    // console.log(`program id: ${id}`)
    // getting the id from its URL
    const id = this.props.match.params.program
    console.log(id)
    // need token id for authorisation
    const token = localStorage.token
    
    // delete this after review with group
    // extracting program id using axios
    // const data = await axios.get(`http://localhost:5000/user/program/${id}`, {headers: { token: token }})
    // getting the other id to be able to get projects data
    // console.log(data)
    
    // delete this after review with group
    // fetching one project
    // console.log(data.data.projects)
    // const projectId = data.data.projects[0]
    // console.log(projectId)
    // const response = await axios.get(`http://localhost:5000/user/project/${projectId}`, {headers: { token: token }})
    // console.log(response)
    
    // fetching all projects
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + `/user/program/${id}/projects`, {headers: { token: token }})
      // getting correct data
      // console.log(response)
      // console.log(response.data.projects)
      // console.log(response.data.projects[0])
      this.setState({
        projectOne: response.data.projects[0],
        projectTwo: response.data.projects[1],
        projectThree: response.data.projects[2],
        projectFour: response.data.projects[3]     
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

render() {
  console.log(this.state)
  const { projectOne, projectTwo, projectThree, projectFour} = this.state
  console.log(projectOne)
  console.log(projectTwo)
  console.log(projectThree)
  console.log(projectFour)
  
  
  
  if (!localStorage.token) {
    return <Redirect to="/login" />
  } else {
    return (
      
      // <div>
      //   {this.state.projectOne ? <p>{this.state.projectOne.name}</p> : null }
      // </div>
      <div className="mobile-programDashboard-container">
      
      <div className="mobile-programDashboard-contents">
      {this.state.projectOne ?
        <Link to={`/project-dashboard/${this.state.projectOne._id}`}>
        <div className="mobile-programDashboard-project-one">
        <p>Start Date: {this.state.projectOne.startDate}</p>
        <p>Due Date: {this.state.projectOne.endDate}</p>
        <h2>Project 1</h2>
        <h2>{this.state.projectOne.name}</h2>
        <div className="mobile-programDashboard-status-box">
        {this.state.projectOne.completed ? <p>Completed</p>: <p>Not Completed</p>}
        </div>
        </div>
        </Link>
        : <div className="mobile-programDashboard-project-one">
        <h2>Loading...</h2>
        </div> }
        
        {this.state.projectTwo ? 
          <Link to={`/project-dashboard/${this.state.projectTwo._id}`}>
          <div className="mobile-programDashboard-project-two">
          <p>Start Date: {this.state.projectTwo.startDate}</p>
          <p>Due Date: {this.state.projectTwo.endDate}</p>
          <h2>Project 2</h2>
          <h2>{this.state.projectTwo.name}</h2>
          <div className="mobile-programDashboard-status-box">
          {this.state.projectTwo.completed ? <p>Completed</p>: <p>Not Completed</p>}
          </div>
          </div>
          </Link> 
          : <div className="mobile-programDashboard-project-two">
          <h2>Loading...</h2>
          </div> }
          
          {this.state.projectThree ? 
            <Link to={`/project-dashboard/${this.state.projectThree._id}`}>
            <div className="mobile-programDashboard-project-three">
            <p>Start Date: {this.state.projectThree.startDate}</p>
            <p>Due Date: {this.state.projectThree.endDate}</p>
            <h2>Project 3</h2>
            <h2>{this.state.projectThree.name}</h2>
            <div className="mobile-programDashboard-status-box">
            {this.state.projectThree.completed ? <p>Completed</p>: <p>Not Completed</p>}
            </div>
            </div>
            </Link>
            :  <div className="mobile-programDashboard-project-three">
            <h2>Loading...</h2>
            </div>}
            
            {this.state.projectFour ?
              <Link to={`/project-dashboard/${this.state.projectFour._id}`}>
              <div className="mobile-programDashboard-project-four">
              <p>Start Date: {this.state.projectFour.startDate}</p>
              <p>Due Date: {this.state.projectFour.endDate}</p>
              <h2>Project 4</h2>
              <h2>{this.state.projectFour.name}</h2>
              <div className="mobile-programDashboard-status-box">
              {this.state.projectFour.completed ? <p>Completed</p>: <p>Not Completed</p>}
              </div>
              </div>
              </Link>
              : <div className="mobile-programDashboard-project-four">
              <h2>Loading...</h2>
              </div> }
              
              
              </div>
              </div>
              )
            }
            // return (
            
            // <div>
            //   {this.state.projectOne ? <p>{this.state.projectOne.name}</p> : null }
            // </div>
            //   <div className="mobile-programDashboard-container">
            
            //       <div className="mobile-programDashboard-contents">
            //         <div className="mobile-programDashboard-project-one">
            //           <p>Start Date:</p>
            //           <p>Due Date:</p>
            //           <h2>Project 1</h2>
            //           <h2>Hello world</h2>
            //           <div className="mobile-programDashboard-status-box">
            //             <p>Not Completed</p>
            //           </div>
            //         </div>
            //         <div className="mobile-programDashboard-project-two">
            //           <p>Start Date:</p>
            //           <p>Due Date:</p>
            //           <h2>Project 2</h2>
            //           <h2>Hello world</h2>
            //           <div className="mobile-programDashboard-status-box">
            //             <p>Not Completed</p>
            //           </div>
            //         </div>
            //         <div className="mobile-programDashboard-project-three">
            //           <p>Start Date:</p>
            //           <p>Due Date:</p>
            //           <h2>Project 3</h2>
            //           <h2>Hello world</h2>
            //           <div className="mobile-programDashboard-status-box">
            //             <p>Not Completed</p>
            //           </div>
            //         </div>
            //         <div className="mobile-programDashboard-project-four">
            //           <p>Start Date:</p>
            //           <p>Due Date:</p>
            //           <h2>Project 4</h2>
            //           <h2>Hello world</h2>
            //           <div className="mobile-programDashboard-status-box">
            //             <p>Not Completed</p>
            //           </div>
            //         </div>
            //       </div>
            //   </div>
            // )
          }
          
        }
        
        export default ProgramDashboard;
        
        