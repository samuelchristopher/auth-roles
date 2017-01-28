import React, { Component } from 'react'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import { browserHistory } from 'react-router'
import auth from 'firebase/auth'

export default class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleChange(e, value) {
    let { name } = e.target
    this.setState({
      [name]: value
    })
  }

  signIn() {
    let { email, password } = this.state
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        browserHistory.push('/')
        return this.props.showSnack('Signed in successfully!')
      }, (err) => this.props.showSnack(err.message))
  }

  render() {
    let disabled = (this.state.email && this.state.password) ? false : true
    return (
      <div className="page-content sign-in">
        <div className="page-content__center">
          <TextField
            floatingLabelText="Email"
            type="email"
            underlineFocusStyle={{ borderColor: grey400 }}
            floatingLabelFocusStyle={{ color: grey400 }}
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            underlineFocusStyle={{ borderColor: grey400 }}
            floatingLabelFocusStyle={{ color: grey400 }}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div onTouchTap={this.signIn} className={disabled ? "button button-primary sign-in__btn disabled" : "button button-primary sign-in__btn"}>Sign In</div>
        </div>
      </div>
    )
  }
}
