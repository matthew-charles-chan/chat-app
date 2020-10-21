import { auth } from 'firebase'
import React from 'react'

const sent = 'sent'
const current = 'current'

export default function ChatMessage({ message }) {
  const { text, uid, photoUrl } = message

  const messageClass = uid === auth.current ? sent : current

  return (
    <div className={messageClass}>
      <img
        src={
          photoUrl ||
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg'
        }
        alt="avatar"
      />
      <p>{text}</p>
    </div>
  )
}
