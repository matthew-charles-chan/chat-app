import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chatroom from './Chatroom'
import SignIn from './SignIn'
import SignOut from './SignOut'

firebase.initializeApp({
  apiKey: 'AIzaSyAsteg5I7paUliqn8lRpdTRwSSy5jxjEws',
  authDomain: 'chat-app-bfa3d.firebaseapp.com',
  databaseURL: 'https://chat-app-bfa3d.firebaseio.com',
  projectId: 'chat-app-bfa3d',
  storageBucket: 'chat-app-bfa3d.appspot.com',
  messagingSenderId: '805720717103',
  appId: '1:805720717103:web:dce79931484d08229993da',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <SignOut auth={auth} />
      </header>
      <section>
        {user ? (
          <Chatroom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  )
}

export default App
