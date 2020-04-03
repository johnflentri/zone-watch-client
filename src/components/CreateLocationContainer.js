import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLocation } from '../actions'
import CreateLocation from './CreateLocation'

class CreateLocationContainer extends Component {
  state = {
    name: '',
    lat: '',
    lng: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createLocation(this.state)
    this.setState({
      name: '',
      lat: '',
      lng: ''
    })
  }

  render() {
    return (<CreateLocation
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  createLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLocationContainer)
