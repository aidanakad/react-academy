import React from 'react'
import ContactItem from './Item'


function ContactList({ contacts }) {
  return (
    <div className="contant-list">
      {
        contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
          />
        ))
      }
    </div>
  )
}

export default ContactList
