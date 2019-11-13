// IMPORT REACT
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

// IMPORT COMPONENTS
import './App.css';
import SignInForm from './components/SignIn/SignInForm'
import SignUpForm from './components/SignUp/SignUpForm'
import AppBar from './components/AppBar/AppBar'
import UserPage from './components/UserPage/UserPage'


// IMPORT API
import API from './adapters/API'

class App extends Component {

  state = {
    user: {}
  }

  // signIn = user => {
  //   this.setState({ username: user.username })
  //   localStorage.setItem('token', user.token)
  // }

  // signOut = () => {
  //   this.setState({ username: '' })
  //   localStorage.removeItem('token')
  // }

  // componentDidMount () {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     API.validate()
  //       .then(data => {
  //         if (data.error) throw Error(data.error)

  //         this.signIn(data)
  //         this.props.history.push('/profile')
  //       })
  //       .catch(error => alert(error))
  //   }
  // }

  addUserToState = (userData) => {
    this.setState({
      user: userData
    })
  }


  render() {
  return (
    <div className="App">
    <AppBar />
    <Switch>
      <Route
      path='/signin'
      component={routerProps => (
        <SignInForm {...routerProps} signIn={this.signIn} addUserToState={this.addUserToState}/>
      )}
      />
    <Route 
    path='/profile'
    component={routerProps => (
      <UserPage {...routerProps} user={this.state.user}/>
    )}/>
      <Route
      path='/sign-up'
      component={routerProps => (
    <SignUpForm {...routerProps}/>
      )}/>
     </Switch>
    </div>
  )};
}

export default withRouter(App);
