import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

const navItems = [
  { id: 1, link: '/', text: 'About' },
  { id: 2, link: '/resume', text: 'Resume' },
  { id: 3, link: '/portfolio', text: 'Portfolio' },
  { id: 4, link: '/contacts', text: 'Contacts' },
]

function Nav() {
  return (
    <div className={styles.nav}>
      {
        navItems.map(item => (
          <NavLink 
            key={item.id}
            exact
            to={item.link} 
            className={styles.navItem} 
            activeClassName={styles.active}
          >
            {item.text}
          </NavLink>
        ))
      }
    </div>
  )
}

export default Nav
