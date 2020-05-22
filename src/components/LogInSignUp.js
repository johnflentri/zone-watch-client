import React, { Component } from 'react'
import SignupForm from './SignUpForm'
import LogInForm from './LogInForm'

export default class LogInSignIn extends Component {
  render() {
    return (
      <div className="centerDefault">
        <SignupForm />
        <LogInForm />
      </div>
    )
  }
}
