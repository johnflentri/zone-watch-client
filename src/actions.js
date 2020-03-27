import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const ALL_LOCATIONS = "ALL_LOCATIONS"

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
      const action = loggedIn(response.text)
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