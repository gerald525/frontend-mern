import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./ProjectDashboard.css')


class ProjectDashboard extends React.Component {

  state = {
    projectData: null,
    resourceData: null,
  }

  componentDidMount = async () => {
    console.log('component did mount')
    // getting the id from its URL
    const id = this.props.match.params.id
    console.log(`project-dashboard url ${id}`)

    // need token id for authorisation
    const token = localStorage.token

    // getting project data
    // const response = await axios.get(`http://localhost:5000/user/project/${id}`, {headers: { token: token }})
    // console.log(response)
    try {
      const dataOne = await axios.get(process.env.REACT_APP_API_URL + `/user/project/${id}`, {headers: { token: token }})
      console.log(dataOne.data)
      const dataTwo = await axios.get(process.env.REACT_APP_API_URL + `/user/project/${id}/resources`, {headers: { token: token }})
      console.log(dataTwo.data)
      this.setState({
        projectData: dataOne.data,
        resourceData: dataTwo.data
      })
      console.log(this.state);
    } catch(err) {
      console.log(err.message);
      this.setState({ error: {
        message: 'Could not contact the server for ProjectDashboard.js',
        status: 500
      }
    })
    }

  }


  render() {
    
    if (!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      const { projectData } = this.state
      console.log(projectData);
      return (
        <div className="mobile-project-dashboard-container">
          <div className="mobile-project-dashboard-contents">
            {projectData? <Link to={`/program-dashboard/${projectData.program}`} ><p>Back</p></Link> : null }
            <h2>Project 1</h2>
            {projectData? <h2>{projectData.name}</h2> : null }
            <div>
              <p>Description</p>
            </div>
            <div>
              <p>resources</p>
            </div>
          </div>
        </div>
      )
    }
    
  }

}

export default ProjectDashboard;