import React from 'react'
import ContactItem from './Item'


function ContactList(props) {
  return (
    <div className="contant-list">
      {
        props.contacts.map((contact, index) => (
          <ContactItem
            name={contact.name}
            imgSrc={contact.imgSrc}
            phone={contact.phone}
            address={contact.address}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default ContactList
