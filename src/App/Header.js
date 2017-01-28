import React, { Component } from 'react'
import { Link } from 'react-router'
import auth from 'firebase/auth'
import database from 'firebase/database'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      authenticated: false,
      isAdmin: false
    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        let userKey = user.uid
        let userRef = database().ref(`users/${userKey}`)
        userRef.on('value', (snap) => {
          let userData = snap.val()
          if (userData.isAdmin) {
            return this.setState({
              authenticated: true,
              isAdmin: true
            })
          }
        })
        return this.setState({
          authenticated: true,
          isAdmin: false
        })
      }

      return this.setState({
        authenticated: false
      })
    })
  }

  openNav() {
    this.setState({
      open: true
    })
  }

  closeNav() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="header__logo">AuthRoles</h1>
          <div onTouchTap={this.openNav} className="circle-btn header__menu-btn"><i className="material-icons">keyboard_arrow_down</i></div>
        </div>
        <div className={this.state.open ? 'header__nav open' : 'header__nav'}>
          <div onTouchTap={this.closeNav} className="circle-btn header__close-btn"><i className="material-icons close-icon">close</i></div>
          <div className="header__nav-links">
            {(this.state.authenticated && this.state.isAdmin) ? <Link onTouchTap={this.closeNav} to="/create-user" className="header__nav-link">Create User</Link> : ''}
            <a href="#" className="header__nav-link">Quote</a>
            {this.state.authenticated ? <Link onTouchTap={this.closeNav} to="/sign-out" className="header__nav-link">Sign out</Link> : ''}
          </div>
        </div>
      </div>
    )
  }
}
