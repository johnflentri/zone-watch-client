import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations } from "../actions";
import { Link } from "react-router-dom";
import CreateLocationContainer from './CreateLocationContainer';
import getDistanceInKm from '../functionality/distanceKm'

class Locations extends Component {
  state = {
    lat: '',
    lng: ''
  }

  componentDidMount() {
    this.props.getLocations();
    this.getLocation()
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported");
    }
  };

  getCoordinates = position => {
    const { latitude, longitude } = position.coords;
    this.setState({ lat: latitude, lng: longitude });
  };

  handleLocationError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert(
          "Unable to create account. User denied the request for Geolocation."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  sortingLocations = arr => {
    const sorted = arr.sort((a, b) => {
      a = getDistanceInKm(
        this.state.lat,
        this.state.lng,
        a.lat,
        a.lng
      );
      b = getDistanceInKm(
        this.state.lat,
        this.state.lng,
        b.lat,
        b.lng
      );

      return a - b;
    });
    return sorted;
  };


  render() {
    if (!this.props.locationsList) {
      return <div>Loading...</div>
    }

    this.sortingLocations(this.props.locationsList)

    const { locationsList } = this.props
    const mappedLocations = locationsList.map(location => (
      <div key={location.id}>
        <ul>
          <Link to={`/locationPosts/${location.id}`}>{location.name} </Link>
        </ul>
      </div>
    ))

    return (
      <div className="centerDefault">
        <h3 className="pageHeading">Zone Channels</h3>
        <CreateLocationContainer />
        {mappedLocations}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations,
});

const mapDispatchToProps = { getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(Locations);