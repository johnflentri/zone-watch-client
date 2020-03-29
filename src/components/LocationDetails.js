import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLocations } from "../actions";

class LocationDetails extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    if (this.props.locationsList.length === 0) {
      return <p>Loading...</p>
    }

    const locationId = parseInt(this.props.match.params.id)
    const findLocation = this.props.locationsList.find(location => location.id === locationId)

    return (
      <div>
        {findLocation.name}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations,
});

const mapDispatchToProps = { getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
