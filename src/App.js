import React, { Component } from 'react'
import './App.css';
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';

class App extends Component {
  render() {
    return <main>
      <SignUpForm />
      <LogInForm />
    </main>
  }
}

export default App
