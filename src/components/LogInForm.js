import React, { Component } from 'react'
import LogInFormContainer from './LogInFormContainer'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginForm extends Component {
  submit = async (username, email, password) => {
    this.props.login(username, email, password)
  }

  render() {
    return <LogInFormContainer
      submit={this.submit}
      title='Log in'
    />
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)