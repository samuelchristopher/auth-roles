import React, { Component } from 'react'
import auth from 'firebase/auth'
import { browserHistory } from 'react-router'

export default class SignOut extends Component {
  componentDidMount() {
    auth().signOut()
      .then(() => {
        browserHistory.push('/sign-in')
        return this.props.showSnack('Hope to see you soon!')
      }, err => this.props.showSnack(err.message))
  }
  render() {
    return (
      <h1>See you soon!</h1>
    )
  }
}
