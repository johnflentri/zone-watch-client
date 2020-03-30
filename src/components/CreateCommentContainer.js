import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions'
import CreateComment from './CreateComment'

class CreateCommentContainer extends Component {
  state = {
    content: '',
    postId: ''
  }

  onChange = (event) => {
    const { postId } = this.props
    this.setState({
      [event.target.name]: event.target.value,
      postId: postId
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { postId } = this.props
    this.props.createComment(this.state, postId)
    this.setState({
      content: ''
    })
  }

  render() {
    const { postId } = this.props
    return (<CreateComment
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      postId={postId}
    />)
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  createComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentContainer)
