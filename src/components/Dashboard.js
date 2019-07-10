import React from 'react';
import CourseList from './CourseList';
import Loading from './Loading'
import { Redirect } from 'react-router-dom'

const Dashboard = ({ courseData, authenticateUser, loadCourseData }) => {
  if (!authenticateUser()) {
    return <Redirect to="/login" />
  } else {
    if (!courseData) {
      console.log('calling loadCourseData function')
      loadCourseData()
    }
    return (
      <div>
        {courseData ? <CourseList /> : <Loading />}
      </div>
    );
  }

};

export default Dashboard;