import React, { Component } from 'react'
import auth from 'firebase/auth'
import database from 'firebase/database'
import Loader from '../Loader/Loader'

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      role: '',
      loading: true
    }
  }

  componentDidMount() {
    // let userKey = auth().currentUser.uid
    // let userRef = database().ref(`users/${userKey}`)
    // userRef.on('value', (snap) => {
    //   userRef.set({
    //     ...snap.val(),
    //     firstName: 'Test',
    //     lastName: 'Email'
    //   })
    // })
    let userKey = auth().currentUser.uid
    let userRef = database().ref(`users/${userKey}`)
    userRef.on('value', (snap) => {
      let user = snap.val()
      let { firstName, isAdmin } = user
      let role
      if (isAdmin) {
        role = 'Administrator'
      }
      this.setState({
        firstName,
        role,
        loading: false
      })
    })
  }

  render() {
    let content = (
      <div className="dash__content">
        <div className="dash__greeting-container">
          <p>Welcome,</p>
          <div className="badge--greeting">{this.state.firstName}</div>
        </div>
        <div className="dash__role-display-container">
          <div className="role-display">
            <div className="role-display__role-label">
              <p className="badge--greeting--label">Role</p>
            </div>
            <div className="role-display__role-value">{this.state.role}</div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="page-content dash">
        {this.state.loading ? <Loader /> : content}
      </div>
    )
  }
}
