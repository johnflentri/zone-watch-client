import React, { Component } from "react";

export default class CreateComment extends Component {
  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.props.onSubmit}>
          <label>
            <input
              type="text"
              name="content"
              placeholder="Write a comment..."
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