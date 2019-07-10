import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Course from './components/Course'
import NoMatch from './components/NoMatch'
import Dashboard from './components/Dashboard'

class Routes extends React.Component {
  render() {
    const { authentication, authenticateUser, courseData, handleLogin, handleInput } = this.props
    return (
      <Switch>
        <Route path="/login" render={() => {
          return <Login handleLogin={handleLogin} handleInput={handleInput} authentication={authentication} />
        }} />
        <Route path="/dashboard" render={() => {
          console.log('dashboard route')
          return <Dashboard courseData={courseData} authentication={authentication} authenticateUser={authenticateUser} />
        }} />
        <Route path="/course/:name" component={Course} authenticateUser={authenticateUser} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Routes;