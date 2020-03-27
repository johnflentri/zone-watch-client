import superagent from 'superagent'

export const LOGGED_IN = "LOGGED_IN"

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