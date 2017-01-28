import auth from 'firebase/auth'

const IsSignedIn = (nextState, replace, callback) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      return callback()
    }
    replace('/sign-in')
    return callback()
  })
}

export default IsSignedIn
