import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import CreatePost from './CreatePost'

class CreatePostContainer extends Component {
  state = {
    title: '',
    content: '',
    locationId: ''
  }

  onChange = (event) => {
    const { locationId } = this.props
    this.setState({
      [event.target.name]: event.target.value,
      locationId: locationId
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { locationId } = this.props
    this.props.createPost(this.state, locationId)
    this.setState({
      title: '',
      content: '',
      locationId: locationId
    })
  }

  render() {
    const { locationId } = this.props
    return (<CreatePost
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      locationId={locationId}
    />)
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer)
