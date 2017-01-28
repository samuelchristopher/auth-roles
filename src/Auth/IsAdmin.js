import auth from 'firebase/auth'
import database from 'firebase/database'

const IsAdmin = (nextState, replace, callback) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      let userKey = user.uid
      let userRef =  database().ref(`users/${userKey}`)
      userRef.on('value', (snap) => {
        let userData = snap.val()
        if (userData.isAdmin) {
          return callback()
        }
        replace('/')
        return callback()
      })
    }
    replace('/')
    return callback()
  })
}

export default IsAdmin
