import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ contact }) {
  return (
    <NavLink 
      style={{display: 'block'}} 
      to={{
        pathname: `/portfolio/contact-list/${contact.id}`,
        state: { contact }
      }}
      key={contact.id}
    >
      {contact.name}
      &nbsp;
      {contact.phone}
    </NavLink>
  )
}

export default Card
