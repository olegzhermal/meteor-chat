import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { Meteor } from 'meteor/meteor'

// import * as S from './styles'

export function ChatFooter(props) {
  const {
    userName
  } = props

  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!message) return

    try {
      await Meteor.call('sendMessage', {
        userName,
        message,
        createdAt: new Date()
      })
      setMessage('')
    } catch (e) {
      console.log(e)
    }
  }

  // const clearChat = (e) => {
  //   e.preventDefault()
  //   Meteor.call('removeAll')
  // }

  return (
    <form onSubmit={sendMessage}>
      <input
        type='text'
        placeholder='Here goes the message...'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button
        type='submit'
        disabled={!message}
      >
        Send message
      </button>
      {/* <button onClick={clearChat}>Clear chat</button> */}
    </form>
  )
}
