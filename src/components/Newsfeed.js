import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser, getPosts, getLocations } from "../actions";

class Newsfeed extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getLocations();
    this.props.getPosts();
  }

  render() {
    console.log("PROPS", this.props)

    if (!this.props.currentUser) {
      return <div>Loading...</div>
    }

    // const currentUser = this.props.currentUser.id
    // console.log("currentUser", currentUser)

    if (!this.props.postsList) {
      return <div>Loading...</div>
    }

    const mappedPosts = this.props.postsList.map(post => (
      <div key={post.id}>
        <ul>
          <Link to={`/posts/${post.id}`}>{post.title} </Link>
          <p>Posted by user: {post.userId}</p>
          <p>Date and time of post: {post.createdAt}</p>
        </ul>
      </div>
    ))

    return (
      <div>
        <h4>Newsfeed:</h4>
        {mappedPosts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  postsList: state.posts,
  locationsList: state.locations
});

const mapDispatchToProps = { getCurrentUser, getPosts, getLocations };

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
