import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './components—Pages/Login/Login'
import NoMatch from './components/NoMatch'
import LandingPageDashboard from './components—Pages/LandingPageDashboard/LandingPageDashboard'
import Support from './components—Pages/Support/Support'
import ForgotPassword from './components—Pages/ForgotPassword/ForgotPassword'
import ProgramDashboard from './components—Pages/ProgramDashboard/ProgramDashboard'
import Profile from './components—Pages/Profile/Profile'
import ProfileEdit from './components—Pages/ProfileEdit/ProfileEdit'
import ProjectDashboard from './components—Pages/ProjectDashboard/ProjectDashboard'
import Navbar from './components/Navbar/Navbar'

class Routes extends React.Component {
  render() {
    const { handleLogin, handleInput, currentUser, logout } = this.props
    const token = localStorage.token
    console.log(currentUser)
    return (

      <BrowserRouter>
        {token ? <Navbar logout={logout} /> : null }
        <Switch>
          <Route exact path="/login" render={() => {
            return <Login 
              handleLogin={handleLogin} 
              handleInput={handleInput} 
            />
          }} />
          <Route exact path="/landing-page-dashboard" render={() => {
            console.log('landing-page-dashboard route')
            console.log(currentUser)
            return   <LandingPageDashboard
                      // handleLogin={handleLogin}  
                      currentUser={currentUser} 
                    />
          }} /> 
          <Route path="/program/:name" /*component={Program}*/ />
          <Route path="/profile" render={() => {
            return <Profile />
           }}/>
          <Route path="/profile-edit" render={() => {
            return <ProfileEdit />
           }}/>
          <Route path="/support" component={Support} />
          <Route path="/forgotpassword" render={() => {
            return <ForgotPassword/>
          }}/>
          { token ? <Route path="/program-dashboard" render={() => {
            return <ProgramDashboard
                    currentUser={currentUser} 
                    />
          }}/> : <Redirect to="/login" /> }

          <Route path="/project-dashboard/:id" render={(props) => {
            return <ProjectDashboard {...props} />
          }}/>

          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    )

  }
  
  export default Routes;