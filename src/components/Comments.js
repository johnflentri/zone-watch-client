import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions'

class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const { postId } = this.props

    if (!this.props.commentsList) {
      return <div>Loading...</div>
    }

    const commentsFilter = this.props.commentsList.filter(comment => comment.postId === postId)
    const mappedcomments = commentsFilter.map(comment => (
      <div key={comment.id}>
        <ul>
          <p>User {comment.userId} said "{comment.content}" at {comment.createdAt}</p>
        </ul>
      </div>
    ))
    return (
      <div>
        {mappedcomments}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  commentsList: state.comments,
});

const mapDispatchToProps = { getComments };

export default connect(mapStateToProps, mapDispatchToProps)(Comments);