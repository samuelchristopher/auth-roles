import auth from 'firebase/auth'

const IsNotSignedIn = (nextState, replace, callback) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      replace('/')
      return callback()
    }
    return callback()
  })
}

export default IsNotSignedIn
