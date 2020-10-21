/* eslint-disable react/prop-types */
import React from 'react'

export default function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button className="sign-out" type="button" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  )
}
