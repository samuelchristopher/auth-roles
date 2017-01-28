import React, { Component } from 'react'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'

export default class CreateUser extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, value) {
    let { name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let disabled = ((this.state.email && this.state.password) && (this.state.password === this.state.passwordConfirm)) ? false : true
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
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Password"
              type="password"
              onChange={this.handleChange}
              name="password"
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Confirm Password"
              type="password"
              onChange={this.handleChange}
              name="passwordConfirm"
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
          </div>
          <div className="create-user__role-display-container">
            <div className="role-display">
              <div className="role-display__role-label">
                <p className="badge--greeting--label">Role</p>
              </div>
              <div className="role-display__role-value">Administrator</div>
            </div>
          </div>
          <div className={disabled ? "button button-primary create-user__button disabled" : "button button-primary create-user__button"}>Create User</div>
        </div>
      </div>
    )
  }
}
