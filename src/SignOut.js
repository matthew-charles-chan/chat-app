import React from "react"
import PropTypes from "prop-types"

export default function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button type="button" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  )
}

SignOut.propTypes = {
  auth: PropTypes.func.isRequired,
}
