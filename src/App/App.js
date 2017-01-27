import React, { Component } from 'react'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <MuiThemeProvider>
         {this.props.children}
       </MuiThemeProvider>
       <Footer />
      </div>
    )
  }
}
