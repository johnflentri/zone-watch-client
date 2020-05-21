import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocationPosts, getCurrentUser, getLocations } from '../actions'
import { Link } from "react-router-dom";
import Comments from './Comments';
import CreateCommentContainer from './CreateCommentContainer';
import Moment from 'react-moment'

class PostDetails extends Component {
  componentDidMount() {
    this.props.getLocationPosts();
    this.props.getCurrentUser();
    this.props.getLocations();
  }

  render() {
    if (!this.props.postsList) {
      return <p className="loadingDefault">Loading...</p>
    }

    const thisPost = this.props.postsList.find(post => post.id === parseInt(this.props.match.params.id))
    if (!thisPost) {
      return <p className="loadingDefault">Loading...</p>
    }

    const postId = parseInt(this.props.match.params.id)
    const users = this.props.user.currentUser.users

    return (
      <div className="centerDefault">
        <h3 className="pageHeading"><Link to={`/locationPosts/${thisPost.locationId}`}>{this.props.locationsList.find(location => location.id === thisPost.locationId).name}</Link></h3>
        <h4>{thisPost.title}</h4>
        <p>{thisPost.content}</p>
        <p>- {this.props.user.currentUser.users.find(user => user.id === thisPost.userId).username}, <Moment>{thisPost.createdAt}</Moment></p>
        <Comments postId={postId} users={users} />
        <CreateCommentContainer postId={postId} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user,
  locationsList: state.locations
});

const mapDispatchToProps = { getLocationPosts, getCurrentUser, getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
