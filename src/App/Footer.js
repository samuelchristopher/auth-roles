import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__bg"></div>
        <div className="footer__content-container">
          <h3 className="footer__logo">AuthRoles</h3>
          <p>BY</p>
          <div className="footer__sc-brand">
            <div className="badge">
              <div className="badge__text">
                <h2><Link to="https://github.com/samuelchristopher" target="_blank">samuelchristopher</Link></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
