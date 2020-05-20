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
      return <p className="loadingDefault">Loading...</p>
    }

    const locationId = parseInt(this.props.match.params.id)
    const findLocation = this.props.locationsList.find(location => location.id === locationId)

    return (
      <div>
        <Posts locationId={locationId} locationName={findLocation.name} />
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
