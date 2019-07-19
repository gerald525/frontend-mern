import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login/Login'
import Course from './components/Course/Course'
import NoMatch from './components/NoMatch'
import Dashboard from './components/Dashboard/Dashboard'
import Help from './components/Help/Help'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Menu from './components/Menu/Menu'
// import DashboardData from './components/Dashboard/DashboardData'

class Routes extends React.Component {
  render() {
    const { courseData, handleLogin, handleInput, loadProgramData, currentUser } = this.props
    const token = localStorage.token
    return (
      <Switch>
        <Route path="/login" render={() => {
          return <Login 
            handleLogin={handleLogin} 
            handleInput={handleInput} 
          />
        }} />
        <Route path="/dashboard" /*component={DashboardData}*/ render={() => {
          console.log('dashboard route')
          return   <Dashboard 
                    courseData={courseData} 
                    loadProgramData={loadProgramData}
                    handleLogin={this.props}
                    currentUser={currentUser} 
                  />
        }} />
        <Route path="/course/:name" component={Course} />
        <Route path="/help" component={Help} />
        <Route path="/forgotpassword" render={() => {
          return <ForgotPassword/>
        }}/>
        { token ? <Route path="/menu" render={() => {
          return <Menu/>
        }}/> : <Redirect to="/login" /> }
         <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Routes;