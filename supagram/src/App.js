import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import AppBar from './components/AppBar/AppBar'
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="App">
    <AppBar />
    <Profile />
     <Post />
     <Post />
     <SignIn />
     <SignUp />
     
    </div>
  );
}

export default App;
