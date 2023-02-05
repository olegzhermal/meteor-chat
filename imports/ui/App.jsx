import React, { useState } from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import * as S from './styles'
import { AuthImitation } from './AuthImitation'
import { ChatFooter } from './ChatFooter'
import { Message } from './Message'
import { MessagesCollection } from '../api/messages'

export function App() {
  const [authImitation, setAuthImitation] = useState({})
  const messages = useTracker(() => MessagesCollection.find().fetch())

  return (
    <div>
      <S.MessagesContainer>
        { messages.map(message => {
            return (
              <Message
                key={message._id}
                {...message}
                currentUserName={authImitation.name}
              />
            )
          })
        }
      </S.MessagesContainer>
      <S.FooterContainer>
        { authImitation.name
          ? <ChatFooter userName={authImitation.name} />
          : <AuthImitation setAuthImitation={setAuthImitation} />
        }
      </S.FooterContainer>
    </div>
  )
}
