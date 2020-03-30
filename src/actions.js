import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const ALL_LOCATIONS = "ALL_LOCATIONS"
export const ALL_POSTS = "ALL_POSTS"
export const NEW_POST = "NEW_POST"
export const ALL_COMMENTS = "ALL_COMMENTS"
export const NEW_COMMENT = "NEW_COMMENT"
export const CURRENT_USER = 'CURRENT_USER'

const baseUrl = 'http://localhost:4000'

function loggedIn(jwt) {
  return {
    type: LOGGED_IN,
    payload: jwt
  }
}

export function login(username, email, password) {
  return async function (dispatch) {
    try {
      const body = { username, email, password }
      const response = await superagent
        .post(`${baseUrl}/login`)
        .send(body)
      const action = loggedIn(response.body)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

function allLocations(payload) {
  return {
    type: ALL_LOCATIONS,
    payload
  }
}

export const getLocations = () => (dispatch, getState) => {
  const state = getState()
  const { locations } = state
  if (!locations.length) {
    request(`${baseUrl}/location`)
      .then(response => {
        const action = allLocations(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function allPosts(payload) {
  return {
    type: ALL_POSTS,
    payload
  }
}

export const getPosts = () => (dispatch, getState) => {
  const state = getState()
  const { posts } = state
  if (!posts.length) {
    request(`${baseUrl}/post`)
      .then(response => {
        const action = allPosts(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function newPost(payload) {
  return {
    type: NEW_POST,
    payload
  }
}

export const createPost = (data, postId) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/locations/${postId}/post`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(data, postId)
    .then(response => {
      const action = newPost(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  }
}

export const getComments = () => (dispatch, getState) => {
  const state = getState()
  const { comments } = state
  if (!comments.length) {
    request(`${baseUrl}/comment`)
      .then(response => {
        const action = allComments(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  }
}

export const createComment = (data, commentId) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/comment`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(data, commentId)
    .then(response => {
      const action = newComment(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function currentUser(payload) {
  return {
    type: "CURRENT_USER",
    payload
  }
}

export const getCurrentUser = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request.get(`${baseUrl}/user`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = currentUser(response.body);
      dispatch(action);
    });
};
