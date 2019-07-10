import React from 'react';
import CourseList from './CourseList';
import Loading from './Loading'
import { Redirect } from 'react-router-dom'

const Dashboard = ({ courseData, authenticateUser }) => {
  if (!authenticateUser()) {
    console.log('redirecting...');
    return <Redirect to="/login" />
  } else {
    return (
      <div>
        {courseData ? <CourseList /> : <Loading />}
      </div>
    );
  }

};

export default Dashboard;