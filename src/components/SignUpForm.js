import React from 'react'
import superagent from 'superagent'
import AuthFormContainer from './AuthFormContainer'

const baseUrl = 'http://localhost:4000'

export default class SignupForm extends React.Component {
  submit = async (username, email, password) => {
    try {
      const entity = { username, email, password }
      await superagent
        .post(`${baseUrl}/user`)
        .send(entity)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return <AuthFormContainer
      submit={this.submit}
      description='signed up'
      title='Sign up'
    />
  }
}