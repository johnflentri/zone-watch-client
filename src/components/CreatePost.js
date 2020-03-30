import React, { Component } from "react";

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Add a post :
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.props.values.title}
              onChange={this.props.onChange}
            />
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