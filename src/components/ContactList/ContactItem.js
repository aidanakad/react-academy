import React from 'react'

function ContactItem(props) {
  const { contactId } = props.match.params
  const { contact } = props.location.state
  return (
    <div>
      {contactId}
      name
      phone
    </div>
  )
}

export default ContactItem
