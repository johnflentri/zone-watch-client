import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocationPosts } from '../actions'
import Comments from './Comments';
import CreateCommentContainer from './CreateCommentContainer';

class PostDetails extends Component {
  componentDidMount() {
    this.props.getLocationPosts();
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

    return (
      <div className="centerDefault">
        <h3>{thisPost.title}</h3>
        <p>{thisPost.content}</p>
        <p>posted by {thisPost.userId} at the following time: {thisPost.createdAt}</p>
        <Comments postId={postId} />
        <CreateCommentContainer postId={postId} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user
});

const mapDispatchToProps = { getLocationPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
