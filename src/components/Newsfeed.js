import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser, getPosts, getLocations } from "../actions";
import Moment from 'react-moment'

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getLocations();
    this.props.getPosts();
  }

  render() {
    console.log("props?", this.props)
    if (!this.props.postsList && !this.props.locationsList) {
      return <div className="loadingDefault">Loading...</div>
    }

    const mappedPosts = this.props.postsList.map(post => (
      <div key={post.id}>
        <ul>
          <p>Title: <Link to={`/posts/${post.id}`}>{post.title} </Link></p>
          <p>Zone Channel: <Link to={`/locationPosts/${post.locationId}`}>{this.props.locationsList[post.locationId - 1].name}</Link></p>
          <p>Posted by {this.props.currentUser.users[post.userId - 1].username}, <Moment parse="YYYY-MM-DD HH:mm">{post.createdAt}</Moment></p>
          <br></br>
        </ul>
      </div>
    ))

    return (
      <div>
        <h3 className="pageHeading">Newsfeed</h3>
        {mappedPosts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  postsList: state.posts,
  locationsList: state.locations,
});

const mapDispatchToProps = { getCurrentUser, getPosts, getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
