import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions'
import Moment from 'react-moment'

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
          <br></br>
          <p>"{comment.content}"</p>
          <p>- {this.props.users.find(user => user.id === comment.userId).username}, <Moment>{comment.createdAt}</Moment></p>
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