import React, { Component } from 'react'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import auth from 'firebase/auth'
import database from 'firebase/database'

export default class CreateUser extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      role: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.createUser = this.createUser.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this._roles = ['Normal', 'Administrator']
  }

  createUser() {
    let { email, password, firstName, lastName, role: roleIndex } = this.state
    let actualRole = this._roles[roleIndex]
    let isAdmin = false
    if (actualRole === 'Administrator') {
      isAdmin = true
    }
    this.props.secondaryApp.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.uid)
        let userRef = database().ref(`users/${user.uid}`)
        userRef.on('value', (snap) => {
          userRef.set({
            ...snap.val(),
            firstName,
            lastName,
            role: actualRole,
            isAdmin
          })
        })
        return this.props.secondaryApp.auth().signOut()
      }, (err) => this.props.showSnack(err.message))
  }

  changeRole() {
    let { role: currentRole } = this.state
    if (currentRole < (this._roles.length - 1)) {
      currentRole = currentRole + 1
    } else {
      currentRole = 0
    }
    return this.setState({
      role: currentRole
    })
  }

  handleChange(e, value) {
    let { name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let disabled = ((this.state.email && this.state.password && this.state.firstName && this.state.lastName) && (this.state.password === this.state.passwordConfirm)) ? false : true
    return (
      <div className="page-content--long">
        <div className="create-user">
          <div className="page__title">create user</div>
          <div className="create-user__form">
            <TextField
              fullWidth={true}
              floatingLabelText="Email"
              type="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="First name"
              type="text"
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Last name"
              type="text"
              onChange={this.handleChange}
              name="lastName"
              value={this.state.lastName}
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Password"
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Confirm Password"
              type="password"
              onChange={this.handleChange}
              name="passwordConfirm"
              value={this.state.passwordConfirm}
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
          </div>
          <div onTouchTap={this.changeRole} className="create-user__role-display-container">
            <div className="role-display">
              <div className="role-display__role-label">
                <p className="badge--greeting--label">Role</p>
              </div>
              <div className="role-display__role-value">{this._roles[this.state.role]}</div>
            </div>
          </div>
          <div onTouchTap={this.createUser} className={disabled ? "button button-primary create-user__button disabled" : "button button-primary create-user__button"}>Create User</div>
        </div>
      </div>
    )
  }
}
