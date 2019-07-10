import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Course from './components/Course'
import CourseList from './components/CourseList'
import NoMatch from './components/NoMatch'

class Routes extends React.Component {
  render() {
    const { authentication, courseList, handleLogin, handleInput } = this.props
    return (
      <Switch>
        <Route path="/login" render={() => {
          return <Login handleLogin={handleLogin} handleInput={handleInput} authentication={authentication} />
        }} />
        <Route path="/courses" render={() => {
          return <CourseList courseList={courseList} authentication={authentication} />
        }} />
        <Route path="/course/:name" component={Course} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Routes;