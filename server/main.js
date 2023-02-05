import { Meteor } from 'meteor/meteor'

import { MessagesCollection } from '../imports/api/messages'
import { UsersCollection } from '../imports/api/users'

Meteor.startup(() => {})

Meteor.methods({
  createUser: (userData) => {
    UsersCollection.insert(userData)
  },
  removeAll: () => {
    MessagesCollection.remove({})
  }, 
  sendMessage: (messageData) => {
    MessagesCollection.insertAsync(messageData)
  }
})
