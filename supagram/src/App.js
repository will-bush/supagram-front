// IMPORT REACT
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

// IMPORT COMPONENTS
import './App.css';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import AppBar from './components/AppBar/AppBar'
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile'

// IMPORT API
import API from './API'

class App extends Component {


  render() {
  return (
    <div className="App">
    <AppBar />
    <Profile />
     <Post />
     <Post />
     <SignIn />
     <SignUp />
     
    </div>
  )};
}

export default App;
