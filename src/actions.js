import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const ALL_LOCATIONS = "ALL_LOCATIONS"
export const ALL_POSTS = "ALL_POSTS"
export const NEW_POST = "NEW_POST"

const baseUrl = 'http://localhost:4000'

function loggedIn(jwt) {
  console.log("jwt", jwt)
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