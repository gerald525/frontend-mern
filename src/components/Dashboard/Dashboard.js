import React from 'react';
import CourseList from '../CourseList/CourseList';
import Loading from '../Loading/Loading'
import { Redirect } from 'react-router-dom'

const Dashboard = ({ programData, loadProgramData }) => {
  // programData =  loadProgramData()
  console.log(programData)
  
 
  if (!localStorage.token) {
    console.log('no token, redirecting to login page')
    return <Redirect to="/login" />
  } else if (!programData) {
    console.log('No course Data. Call loadProgramData function')
  }

  return (
    <div>
      {programData ? <CourseList /> : <Loading />}
    </div>
  );
}

export default Dashboard;