import React from 'react';
import CourseList from './CourseList';
import Loading from './Loading'
import { Redirect } from 'react-router-dom'

const Dashboard = ({ courseData, loadCourseData }) => {
  if (!localStorage.token) {
    console.log('no token, redirecting to login page')
    return <Redirect to="/login" />
  } else if (!courseData) {
    console.log('No course Data. Call loadCourseData function')
    // loadCourseData()
  }

  return (
    <div>
      {courseData ? <CourseList /> : <Loading />}
    </div>
  );
}

export default Dashboard;