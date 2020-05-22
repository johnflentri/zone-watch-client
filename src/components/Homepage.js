import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from './SignUpForm'
import LogInForm from './LogInForm'
import Newsfeed from './Newsfeed'

class Homepage extends Component {
  render() {
    if (this.props.user) {
      return <div>
        <Newsfeed />
      </div>
    } else
      return <div className="centerDefault">
        <SignupForm />
        <LogInForm />
      </div>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Homepage);