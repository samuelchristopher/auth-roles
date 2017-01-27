import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
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
          <div className="header__nav-links"><a href="#" className="header__nav-link">Create User</a><a href="#" className="header__nav-link">Quote</a></div>
        </div>
      </div>
    )
  }
}
