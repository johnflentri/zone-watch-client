import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getLocationPosts } from '../actions'
import CreatePostContainer from './CreatePostContainer';

class Posts extends Component {
  componentDidMount() {
    this.props.getLocationPosts();
  }

  render() {
    const { locationId } = this.props

    if (!this.props.postsList) {
      return <div>Loading...</div>
    }

    const postsFilter = this.props.postsList.filter(post => post.locationId === locationId)
    const mappedPosts = postsFilter.map(post => (
      <div key={post.id}>
        <ul>
          <Link to={`/posts/${post.id}`}>{post.title} </Link>
          <p>Posted by user: {post.userId}</p>
          <p>Date and time of post: {post.createdAt}</p>
        </ul>
      </div>
    ))

    if (!this.props.user) {
      return (
        <div>
          <h4>Posts:</h4>
          {mappedPosts}
        </div>
      )
    } else {
      return (
        <div>
          <CreatePostContainer locationId={locationId} />
          <h4>Posts:</h4>
          {mappedPosts}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user
});

const mapDispatchToProps = { getLocationPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);