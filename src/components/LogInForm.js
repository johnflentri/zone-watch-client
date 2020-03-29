import React, { Component } from 'react'
import AuthFormContainer from './AuthFormContainer'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginForm extends Component {
  submit = async (username, email, password) => {
    this.props.login(username, email, password)
  }

  render() {
    return <AuthFormContainer
      submit={this.submit}
      description='logged in'
      title='Log in'
    />
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)