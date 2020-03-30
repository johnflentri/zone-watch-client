import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import CreatePostContainer from './CreatePostContainer';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log("user??", this.props.user)
    const { locationId } = this.props

    if (!this.props.user) {
      return (
        <div>
          <h4>Posts:</h4>
        </div>
      )
    } else {
      return (
        <div>
          <CreatePostContainer locationId={locationId} />
          <h4>Posts:</h4>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user
});

const mapDispatchToProps = { getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);