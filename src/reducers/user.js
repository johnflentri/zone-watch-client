const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.payload;
    default:
      return state;
  }
}