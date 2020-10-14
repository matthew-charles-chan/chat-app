/* eslint-disable react/prop-types */
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function Chatroom({ firestore }) {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })
  // console.log(messagesRef)
  return (
    <main>
      {messages &&
        messages.map((msg) => {
          return (
            <>
              <h1>{msg.text}</h1>
            </>
          )
        })}
    </main>
  )
}
