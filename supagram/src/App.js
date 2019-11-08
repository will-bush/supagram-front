// IMPORT REACT
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

// IMPORT COMPONENTS
import './App.css';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import AppBar from './components/AppBar/AppBar'
import UserPage from './components/UserPage/UserPage'

// IMPORT API
import API from './API'

class App extends Component {

  state = {
    username: ''
  }

  signIn = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

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
  //         this.props.history.push('/inventory')
  //       })
  //       .catch(error => alert(error))
  //   }
  // }


  render() {
  return (
    <div className="App">
    <AppBar />
    <Switch>
      <Route
      path='/signin'
      component={routerProps => (
        <SignIn {...routerProps} signIn={this.signIn}/>
      )}
      />
    <Route 
    path='/profile'
    component={routerProps => (
      <UserPage {...routerProps} user={this.state.username}/>
    )}/>
    <SignUp />
     <SignIn />
     
     </Switch>
    </div>
  )};
}

export default withRouter(App);
