import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className="page-content not-found">
        <h1 className="not-found__error-code">404</h1>
        <p className="not-found__message">
          Sorry, we could not
          <br/> find the page you were
          <br/>looking for
        </p>
      </div>
    )
  }
}
