import React from 'react'
import { NavLink } from 'react-router-dom'
//import PageWrapper from '../PageWrapper'


const contacts = [
  {id: 1, name: 'Samat', phone: 1223 },
  {id: 2, name: 'Adyl', phone: 574389 },
  {id: 3, name: 'Lily', phone: 574389 },
  {id: 4, name: 'Aidana', phone: 236784 },
]

function ContactList() {
  return (
    <div>
      {
        contacts.map(c => {
          return (
            <NavLink 
              style={{display: 'block'}} 
              to={{
                pathname: `/portfolio/contact-list/${c.id}`,
                state: { conatct: c }
              }}
              key={c.id}
            >
              {c.name}
              &nbsp;
              {c.phone}
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default ContactList
