import React from "react"
import firebase from "firebase/app"
import PropTypes from "prop-types"

export default function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    props.auth.signInWithPopup(provider)
  }
  return (
    <>
      <button className="sign-in" type="button" onClick={signInWithGoogle}>
        Sign In
      </button>
    </>
  )
}

SignIn.propTypes = {
  auth: PropTypes.func.isRequired,
}
