import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components—Pages/Login/Login';
import ProfileDetails from './components—Pages/Profile/Profile';
import NoMatch from './components/NoMatch';
import LandingPageDashboard from './components—Pages/LandingPageDashboard/LandingPageDashboard';
import Support from './components—Pages/Support/Support';
import ForgotPassword from './components—Pages/ForgotPassword/ForgotPassword';

class Routes extends React.Component {
  render() {
    const { handleLogin, handleInput, loadProgramData, currentUser } = this.props
    const token = localStorage.token
    return (
      <Switch>
      <Route path="/login" render={() => {
        return <Login 
        handleLogin={handleLogin} 
        handleInput={handleInput} 
        />
      }} />
      <Route path="/landing-page-dashboard" /*component={DashboardData}*/ render={() => {
        console.log('landing-page-dashboard route')
        return   <LandingPageDashboard 
        loadProgramData={loadProgramData}
        handleLogin={this.props}
        currentUser={currentUser} 
        />
      }} />
      <Route path="/program/:name" /*component={Program}*/ />
      <Route path="/support" component={Support} />
      <Route path="/forgotpassword" render={() => {
        return <ForgotPassword/>
      }}/>
      { token ? <Route path="/LandingPageDashboard" render={() => {
        return <LandingPageDashboard/>
      }}/> : <Redirect to="/login" /> }
      <Route component={NoMatch} />
      </Switch>
      )
    }
  }
  
  export default Routes;