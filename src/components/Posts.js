import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getLocationPosts, addLocation, removeLocation } from '../actions'
import CreatePostContainer from './CreatePostContainer';

class Posts extends Component {
  componentDidMount() {
    this.props.getLocationPosts();
  }

  handleAddClick = event => {
    event.preventDefault()
    const { locationId } = this.props
    this.props.addLocation(locationId)
  }

  handleRemoveClick = event => {
    event.preventDefault()
    const { locationId } = this.props
    this.props.removeLocation(locationId)
  }

  render() {
    const { locationId, locationName } = this.props

    if (!this.props.postsList) {
      return <div className="centerDefault">Loading...</div>
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
        <div className="centerDefault">
          <button>Add this location to my newsfeed</button>
          <h4>Posts:</h4>
          {mappedPosts}
        </div>
      )
    } else {
      return (
        <div className="centerDefault">
          <h3>{locationName}</h3>
          <button onClick={this.handleAddClick}>Add this location to my newsfeed</button>
          <button onClick={this.handleRemoveClick}>Remove this location from my newsfeed</button>
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

const mapDispatchToProps = { getLocationPosts, addLocation, removeLocation };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);