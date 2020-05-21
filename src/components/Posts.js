import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getLocationPosts, addLocation, removeLocation, getCurrentUser } from '../actions'
import CreatePostContainer from './CreatePostContainer';
import Moment from 'react-moment'

class Posts extends Component {
  componentDidMount() {
    this.props.getLocationPosts();
    this.props.getCurrentUser();
  }

  handleAddClick = event => {
    event.preventDefault()
    let unmounted = false
    const { locationId } = this.props

    if (!unmounted) {
      this.props.addLocation(locationId)
    }

    return () => {
      unmounted = true
    }
  }

  handleRemoveClick = event => {
    event.preventDefault()
    let unmounted = false
    const { locationId } = this.props

    if (!unmounted) {
      this.props.removeLocation(locationId)
    }

    return () => {
      unmounted = true
    }
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
          <p>- {this.props.currentUser.users.find(user => user.id === post.userId).username}, <Moment>{post.createdAt}</Moment></p>
        </ul>
      </div>
    ))

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">{locationName}</h3>
        <div className="regularButton">
          <button onClick={this.handleAddClick}>Add to My Newsfeed</button>
          <button onClick={this.handleRemoveClick}>Remove from My Newsfeed</button>
        </div>
        <br></br>
        <CreatePostContainer locationId={locationId} />
        <h4>Posts:</h4>
        {mappedPosts.reverse()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = { getLocationPosts, addLocation, removeLocation, getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);