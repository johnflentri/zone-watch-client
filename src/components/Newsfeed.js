import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCurrentUser } from "../actions";

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log("got the current user?", this.props)
    return (
      <div>
        This is the Newsfeed
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
