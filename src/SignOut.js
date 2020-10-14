/* eslint-disable react/prop-types */
import React from 'react'

export default function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button type="button" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  )
}
