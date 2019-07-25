import React from 'react';
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios')
require('./ProjectDashboard.css')


class ProjectDashboard extends React.Component {

  state = {
    projectData: null,
    resourceData: null,
    projectId: null
  }

  componentDidMount = async () => {
    // getting the id from its URL
    const id = this.props.match.params.id
    // need token id for authorisation
    const token = localStorage.token

    try {
      const dataOne = await axios.get(process.env.REACT_APP_API_URL + `/user/project/${id}`, {headers: { token: token }})
      const dataTwo = await axios.get(process.env.REACT_APP_API_URL + `/user/project/${id}/resources`, {headers: { token: token }})
      this.setState({
        projectData: dataOne.data,
        resourceData: dataTwo.data,
        projectId: dataOne.data._id
      })
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
      const { projectData, resourceData, projectId } = this.state
      return (
        <div className="mobile-project-dashboard-container">
          <div className="mobile-project-dashboard-contents">
            {projectData? <Link to={`/program-dashboard/${projectData.program}`} ><p>Back</p></Link> : null }
            <h2>Project</h2>
            {projectData? <h2>{projectData.name}</h2> : null }
            <div className="mobile-description-project-box">
              <h3>Description</h3>
              {projectData? <p>{projectData.description}</p> : null }
            </div>
            <div className="mobile-resources-project-box">
              <p>Content</p>
              <div className="mobile-project-scroll-box">
                {resourceData && resourceData.resources.map((item, index) => (
                  <div className="mobile-project-resource-data-link" key={index}>
                    <Link to={{
                      pathname: `/content/${index + 1}`,
                      state: { resourceData, projectId }
                    }}>
                      <p>{index + 1}. {item.name}</p>
                    </Link>
                    { item.completed ? <span role="img" aria-label="ticked box">✅</span> : <span role="img" aria-label="not ticked box"> ◻️</span> }
                  </div>      
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
    
  }

}

export default ProjectDashboard;