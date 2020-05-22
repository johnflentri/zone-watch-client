import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className="centerDefault">
        <h3 className="pageHeading">A GPS-based communication platform.</h3>
        <ul>
          <li><p>Created an account, log in and navigate to the Zone Channels page using the toolbar.</p></li>
          <li><p>You will see a list of channels - starting with those closest to your GPS coordinates.</p></li>
          <li><p>Click on a channel to view posts from other users, and click on the title to read the post itself.</p></li>
          <li><p>Subscribe/unsubscribe to channels, write a post or comment anywhere you like.</p></li>
          <li><p>Want to create a channel? Simply think of a name, add the coordinates and submit.</p></li>
        </ul>
        <p></p>
        <h4>Zone Watch offers a new way to reach out to the community, the rest is up to you!</h4>
        <h4 style={{ textAlign: "center" }}><Link to={`/home`}>Continue</Link></h4>
      </div>
    )
  }
}
