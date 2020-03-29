import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations } from "../actions";
import { Link } from "react-router-dom";

class Locations extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    if (!this.props.locationsList) {
      return <div>Loading...</div>
    }

    const { locationsList } = this.props
    const mappedLocations = locationsList.map(location => (
      <div key={location.id}>
        <ul>
          <Link to={`/locations/${location.id}`}>{location.name} </Link>
        </ul>
      </div>
    ))

    return (
      <div>
        <h4>Locations Page</h4>
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