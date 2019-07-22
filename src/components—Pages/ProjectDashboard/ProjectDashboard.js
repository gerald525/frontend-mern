import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./ProjectDashboard.css')


class ProjectDashboard extends React.Component {

  state = {
    projectData: null,
  }

  componentDidMount = async () => {

    // getting the id from its URL
    const id = this.props.match.params.id
    console.log(id)

    // need token id for authorisation
    const token = localStorage.token

    // getting project data
    const response = await axios.get(`http://localhost:5000/user/project/${id}/resources`, {headers: { token: token }})
    console.log(response)
  }


  render() {

    if (!localStorage.token) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="mobile-project-dashboard-container">
          <div className="mobile-project-dashboard-contents">
            <p>Back</p>
            <h2>Project 1</h2>
            <h2>Project Name</h2>

          </div>

        </div>
      )
    }
    
  }

}

export default ProjectDashboard;