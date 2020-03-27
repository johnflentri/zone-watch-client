import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations } from "../actions";

class Locations extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    if (!this.props.locationsList) {
      return <p>Loading...</p>
    }

    const mappedLocations = this.props.locationsList.map(location => (
      <ul key={location.id}>
        <p>{location.name}</p>
      </ul>
    ))

    return (
      <div>
        <h4>Locations Page</h4>
        <p>{mappedLocations}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations,
});

const mapDispatchToProps = { getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(Locations);