import React from 'react';
import { Redirect, Link } from 'react-router-dom';
require('./Content.css');


const Content = (props) => {
  // console.log(props.location.state)
  const { resourceData, projectId} = props.location.state
  
  // checking content array numbers
  const nextContent = props.match.params.id
  
  const currentContent = nextContent - 1
  
  // Display Next content number in render page
  let nextContentDisplayNumber = Number(nextContent) + 1
  
  // checking the array length of resources
  let resourcesArrayLength = resourceData.resources.length
  
  let nextContentLink = "No more content!"
  if (nextContent < resourcesArrayLength) {
    nextContentLink = resourceData.resources[`${nextContent}`].name
  }
  const item = resourceData.resources[`${currentContent}`]
  
  // linkDisplay render function
  let linkDisplay = (              
    <Link to={{
      pathname: `/content/${nextContentDisplayNumber}`,
      state: { item, resourceData, projectId }
    }}>
    <div className="resource-green-box"><span role="img" aria-label="hand pointing to right">👉🏻</span></div></Link>  
    );
    
    // upNext render function
    let upNext = <p>Up Next!</p>
    
    // LinkDisplay conditional and upNext statement
    if(nextContent >= resourcesArrayLength) {
      linkDisplay = <></>
      upNext = <p></p>
      nextContentDisplayNumber = ''
    }
    
    if (!localStorage.token) {
      return <Redirect to='/login' />
    } else {
      return (
        <div className="mobile-contents-container">
        <div className="mobile-resource-content">
        <Link to={`/project-dashboard/${projectId}`} ><p>Back</p></Link>
        <p className="resource-content-title">{item.name}</p>
        </div>
        <div className="resource-container">
        <div className="resource2-content-box">
        <p>[ type ] : {item.type}</p>
        </div>
        <div className="up-next-container">
        {upNext}
        <div className="up-next-link">
        <p>{nextContentDisplayNumber}. {nextContentLink}</p>
        {linkDisplay}
        </div>
        </div>
        <div className="mobile-project-scroll-box2">
        {resourceData && resourceData.resources.map((item, index) => (
          <div className="mobile-project-resource-data-link2" key={index}>
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
          );
        }
      };
      
      export default Content;