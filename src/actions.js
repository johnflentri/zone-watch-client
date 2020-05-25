import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const ALL_LOCATIONS = "ALL_LOCATIONS"
export const ALL_POSTS = "ALL_POSTS"
export const ALL_LOCATION_POSTS = "ALL_LOCATION_POSTS"
export const NEW_POST = "NEW_POST"
export const ALL_COMMENTS = "ALL_COMMENTS"
export const NEW_COMMENT = "NEW_COMMENT"
export const CURRENT_USER = 'CURRENT_USER'
export const ADD_USER_LOCATION = 'ADD_USER_LOCATION'
export const REMOVE_USER_LOCATION = 'REMOVE_USER_LOCATION'
export const ALL_USER_LOCATIONS = 'ALL_USER_LOCATIONS'
export const CREATE_LOCATION = 'CREATE_LOCATION'
export const USER_GEO = 'USER_GEO'

// const baseUrl = 'http://localhost:4000'
const baseUrl = 'https://hidden-headland-87450.herokuapp.com/'

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
  const { locations, user } = state
  if (!locations.length) {
    request(`${baseUrl}/location`)
      .set('Authorization', `Bearer ${user.jwt}`)
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
  const { user } = state
  request(`${baseUrl}/post`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = allPosts(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function allLocationPosts(payload) {
  return {
    type: ALL_LOCATION_POSTS,
    payload
  }
}

export const getLocationPosts = (id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request(`${baseUrl}/locationPosts/${id}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = allLocationPosts(response.body)
      dispatch(action)
    })
    .catch(console.error)
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
    type: CURRENT_USER,
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

function getUserLocations(payload) {
  return {
    type: ALL_USER_LOCATIONS,
    payload
  }
}

export const allUserLocations = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request(`${baseUrl}/userLocations`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = getUserLocations(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function addUserLocation(payload) {
  return {
    type: ADD_USER_LOCATION,
    payload
  }
}

export const addLocation = (locationId) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request.post(`${baseUrl}/userLocations`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send({ locationId })
    .then(response => {
      const action = addUserLocation(response.body)
      dispatch(action)
    })
}

function removeUserLocation(payload) {
  return {
    type: REMOVE_USER_LOCATION,
    payload
  }
}

export const removeLocation = (locationId) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request.delete(`${baseUrl}/userLocations`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send({ locationId })
    .then(response => {
      const action = removeUserLocation(response.body)
      dispatch(action)
    })
}

function newLocation(payload) {
  return {
    type: CREATE_LOCATION,
    payload
  }
}

export const createLocation = (data) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/location`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newLocation(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function userGeo(payload) {
  return {
    type: USER_GEO,
    payload
  }
}

export const currentGeo = (lat, lng, id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .put(`${baseUrl}/user/${id}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(lat, lng)
    .then(response => {
      const action = userGeo(response.body)
      dispatch(action)
    })
    .catch(console.error)
}
