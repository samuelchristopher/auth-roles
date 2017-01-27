import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page-content dash">
        <div className="dash__content">
          <div className="dash__greeting-container">
            <p>Welcome,</p>
            <div className="badge--greeting">Samuel</div>
          </div>
          <div className="dash__role-display-container">
            <div className="role-display">
              <div className="role-display__role-label">
                <p className="badge--greeting--label">Role</p>
              </div>
              <div className="role-display__role-value">Administrator</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
