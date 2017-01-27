import React, { Component } from 'react'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'

export default class SignIn extends Component {
  render() {
    return (
      <div className="page-content sign-in">
        <div className="page-content__center">
          <TextField
            floatingLabelText="Email"
            type="email"
            underlineFocusStyle={{ borderColor: grey400 }}
            floatingLabelFocusStyle={{ color: grey400 }}
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            underlineFocusStyle={{ borderColor: grey400 }}
            floatingLabelFocusStyle={{ color: grey400 }}
          />
          <div className="button button-primary sign-in__btn">Sign In</div>
        </div>
      </div>
    )
  }
}
