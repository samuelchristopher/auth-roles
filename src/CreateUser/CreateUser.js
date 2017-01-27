import React, { Component } from 'react'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'

export default class CreateUser extends Component {
  render() {
    return (
      <div className="page-content--long">
        <div className="create-user">
          <div className="page__title">create user</div>
          <div className="create-user__form">
            <TextField
              fullWidth={true}
              floatingLabelText="Email"
              type="email"
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Password"
              type="password"
              underlineFocusStyle={{ borderColor: grey400 }}
              floatingLabelFocusStyle={{ color: grey400 }}
            />
            <TextField
              fullWidth={true}
              floatingLabelText="Confirm Password"
              type="password"
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
          <div className="button button-primary create-user__button">Create User</div>
        </div>
      </div>
    )
  }
}
