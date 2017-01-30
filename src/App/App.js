import React, { Component } from 'react'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './Footer'
import Snackbar from 'material-ui/Snackbar'
import firebaseApp from 'firebase/app'

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

  componentDidMount() {
    let config = {
       apiKey: "AIzaSyCdeimPW9X1tnupiDI00HIZzubLhrnmkUk",
       authDomain: "auth-roles.firebaseapp.com",
       databaseURL: "https://auth-roles.firebaseio.com",
       storageBucket: "auth-roles.appspot.com",
       messagingSenderId: "545622531560"
     }
    this._secondaryApp = firebaseApp.initializeApp(config, 'Secondary')
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
              showSnack: this.showSnack,
              secondaryApp: this._secondaryApp
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
