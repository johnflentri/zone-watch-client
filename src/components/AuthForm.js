import React from 'react'

export default class AuthForm extends React.Component {
  render() {
    const { title: label, onSubmit, onChange, user } = this.props
    return <form onSubmit={onSubmit}>
      <h4>{label}</h4>
      <h5>Username</h5>
      <input
        onChange={event => {
          console.log('event.target test:', event.target)
          onChange('username', event)
        }}
        type='text'
        value={user.username}
      />
      <h5>Email</h5>
      <input
        onChange={event => {
          console.log('event.target test:', event.target)
          onChange('email', event)
        }}
        type='text'
        value={user.email}
      />
      <h5>Password</h5>
      <input
        onChange={event => onChange('password', event)}
        type='text'
        value={user.password}
      />
      <button>{label}</button>
    </form>
  }
}