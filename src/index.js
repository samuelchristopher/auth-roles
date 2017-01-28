import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App/App'
import NotFound from './NotFound/NotFound'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import IsSignedIn from './Auth/IsSignedIn'
import IsNotSignedIn from './Auth/IsNotSignedIn'
import IsAdmin from './Auth/IsAdmin'
import Dashboard from './Dash/Dash'
import CreateUser from './CreateUser/CreateUser'
import injectTapEventPlugin from 'react-tap-event-plugin'
import firebaseApp from 'firebase/app'
import './index.css'

injectTapEventPlugin()

let config = {
   apiKey: "AIzaSyCdeimPW9X1tnupiDI00HIZzubLhrnmkUk",
   authDomain: "auth-roles.firebaseapp.com",
   databaseURL: "https://auth-roles.firebaseio.com",
   storageBucket: "auth-roles.appspot.com",
   messagingSenderId: "545622531560"
 }

 firebaseApp.initializeApp(config)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="sign-in" component={SignIn} onEnter={IsNotSignedIn}/>
      <Route path="sign-out" component={SignOut} onEnter={IsSignedIn}/>
      <IndexRoute component={Dashboard} onEnter={IsSignedIn}/>
      <Route path="create-user" component={CreateUser} onEnter={IsAdmin}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
