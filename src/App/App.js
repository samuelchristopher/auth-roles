import React, { Component } from 'react'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './Footer'
import Snackbar from 'material-ui/Snackbar'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
      message: ''
    }

    this.showSnack = this.showSnack.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    
  }

  showSnack(message) {
    this.setState({
      open: true,
      message
    })
  }

  handleRequestClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
            {this.props.children && React.cloneElement(this.props.children, {
              showSnack: this.showSnack
            })}
          <Footer />
          <Snackbar
            open={this.state.open}
            message={this.state.message}
            onRequestClose={this.handleRequestClose}
            onActionTouchTap={this.handleRequestClose}
            action="ok"
            autoHideDuration={4000}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
