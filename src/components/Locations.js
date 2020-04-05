import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations, currentGeo } from "../actions";
import { Link } from "react-router-dom";
import CreateLocationContainer from './CreateLocationContainer';

class Locations extends Component {
  state = {
    lat: '',
    lng: ''
  }

  componentDidMount() {
    this.props.getLocations();
    // this.props.currentGeo();
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
    // this.props.currentGeo({ lat: latitude, lng: longitude })
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

  render() {
    console.log("Coordinates in state", this.state)

    if (!this.props.locationsList) {
      return <div>Loading...</div>
    }

    const { locationsList } = this.props
    const mappedLocations = locationsList.map(location => (
      <div key={location.id}>
        <ul>
          <Link to={`/locationPosts/${location.id}`}>{location.name} </Link>
        </ul>
      </div>
    ))

    return (
      <div>
        <h4>Locations Page</h4>
        <CreateLocationContainer />
        {mappedLocations}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations,
});

const mapDispatchToProps = { getLocations, currentGeo };

export default connect(mapStateToProps, mapDispatchToProps)(Locations);