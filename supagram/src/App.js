import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
     <SignIn />
     <SignUp />
    </div>
  );
}

export default App;
