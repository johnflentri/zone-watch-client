import React, { Component } from "react";

export default class CreateLocation extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Create a channel:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
            <input
              type="text"
              name="lat"
              placeholder="Latitude"
              value={this.props.values.lat}
              onChange={this.props.onChange}
            />
            <input
              type="text"
              name="lng"
              placeholder="Longitude"
              value={this.props.values.lng}
              onChange={this.props.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}