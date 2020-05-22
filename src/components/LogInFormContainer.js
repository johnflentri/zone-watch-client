import React from 'react'
import LogInAuth from './LogInAuth'

export default class LogInFormContainer extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  onChange = (key, event) => {
    const update = { [key]: event.target.value }
    this.setState(update)
  }

  onSubmit = async (event) => {
    event.preventDefault()
    try {
      const { username, email, password } = this.state
      await this.props.submit(username, email, password)
      this.setState({ username: '', email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { title } = this.props
    const { username, email, password } = this.state
    const user = { username, email, password }

    return <LogInAuth
      onSubmit={this.onSubmit}
      title={title}
      onChange={this.onChange}
      user={user}
    />
  }
}