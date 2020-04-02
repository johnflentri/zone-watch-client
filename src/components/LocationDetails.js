import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocationPosts } from "../actions";
import Posts from './Posts'

class LocationDetails extends Component {
  componentDidMount() {
    this.props.getLocationPosts(this.props.match.params.id);
  }

  render() {
    if (this.props.locationsList.length === 0) {
      return <p>Loading...</p>
    }

    const locationId = parseInt(this.props.match.params.id)
    const findLocation = this.props.locationsList.find(location => location.id === locationId)

    return (
      <div>
        <h3>{findLocation.name}</h3>
        <Posts locationId={locationId} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations,
  locationPostsList: state.posts
});

const mapDispatchToProps = { getLocationPosts };

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
