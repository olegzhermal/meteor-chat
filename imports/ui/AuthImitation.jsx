import React, { useState } from 'react'

export function AuthImitation(props) {
  const {
    setAuthImitation
  } = props

  const [name, setName] = useState('')

  const imitatieAuth = (e) => {
    e.preventDefault()
    if (name) {
      setAuthImitation({ name })
      // Meteor.call('createUser', { name })
    }
  }


  return (
    <form onSubmit={imitatieAuth}>
      <input
        type='text'
        placeholder='Enter your name here'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type='submit' disabled={!name}>Set my name</button>
    </form>
  )
}
