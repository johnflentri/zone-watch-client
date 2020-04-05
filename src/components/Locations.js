import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations } from "../actions";
import { Link } from "react-router-dom";
import CreateLocationContainer from './CreateLocationContainer';

class Locations extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    if (!this.props.locationsList) {
      return <div>Loading...</div>
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      const coord = pos.coords;
      console.log(`Latitude : ${coord.latitude}`);
      console.log(`Longitude: ${coord.longitude}`);
      console.log(`Accurate to approximately ${coord.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

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

const mapDispatchToProps = { getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(Locations);