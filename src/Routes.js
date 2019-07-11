import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Course from './components/Course'
import NoMatch from './components/NoMatch'
import Dashboard from './components/Dashboard'
import Help from './components/Help'

class Routes extends React.Component {
  render() {
    const { courseData, handleLogin, handleInput, loadProgramData } = this.props
    return (
      <Switch>
        <Route path="/login" render={() => {
          return <Login 
            handleLogin={handleLogin} 
            handleInput={handleInput} 
          />
        }} />
        <Route path="/dashboard" render={() => {
          console.log('dashboard route')
          return   <Dashboard 
                    courseData={courseData} 
                    loadProgramData={loadProgramData}
                  />
        }} />
        <Route path="/course/:name" component={Course} />
        <Route path="/help" component={Help} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Routes;