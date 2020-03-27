import request from 'superagent'

export const NEW_USER = "NEW_USER";

const baseUrl = 'http://localhost:4000'

function newUser(payload) {
  return {
    type: NEW_USER,
    payload: payload
  };
}

export const createUser = data => (dispatch) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};