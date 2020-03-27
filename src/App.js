import React, { Component } from 'react'
import { Route } from "react-router";
import './App.css';
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';
import Homepage from './components/Homepage';
import Locations from './components/Locations'

class App extends Component {
  render() {
    return <main>
      <Route path='/' exact component={Homepage} />
      <Route path='/locations' component={Locations} />
      <SignUpForm />
      <LogInForm />
    </main>
  }
}

export default App
