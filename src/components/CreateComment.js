import React, { Component } from "react";

export default class CreateComment extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Add a comment :
            <input
              type="text"
              name="content"
              placeholder="content"
              value={this.props.values.content}
              onChange={this.props.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}