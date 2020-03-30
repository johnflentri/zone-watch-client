import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import Comments from './Comments';
import CreateCommentContainer from './CreateCommentContainer';

class PostDetails extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.postsList) {
      return <p>Loading...</p>
    }

    const thisPost = this.props.postsList.find(post => post.id === parseInt(this.props.match.params.id))
    if (!thisPost) {
      return <p>Loading...</p>
    }

    const postId = parseInt(this.props.match.params.id)

    return (
      <div>
        <h3>{thisPost.title}</h3>
        <p>{thisPost.content}</p>
        <p>posted by {thisPost.userId} at the following time: {thisPost.createdAt}</p>
        <Comments />
        <CreateCommentContainer postId={postId} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postsList: state.posts,
  user: state.user
});

const mapDispatchToProps = { getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);