import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from './SignUpForm'
import LogInForm from './LogInForm'
import Locations from './Locations'
import Newsfeed from './Newsfeed'

class Homepage extends Component {
  render() {
    if (this.props.user) {
      return <div>
        <Newsfeed />
        <Locations />
      </div>
    } else
      return <div>
        <SignupForm />
        <LogInForm />
      </div>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Homepage);