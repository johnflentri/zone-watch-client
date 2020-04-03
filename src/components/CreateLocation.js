import React, { Component } from "react";

export default class CreateLocation extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Add a location :
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
            <input
              type="text"
              name="lat"
              placeholder="lat"
              value={this.props.values.lat}
              onChange={this.props.onChange}
            />
            <input
              type="text"
              name="lng"
              placeholder="lng"
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