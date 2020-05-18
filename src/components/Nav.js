import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

function Nav() {
  return (
    <div className={styles.nav}>
      <NavLink activeClassName={styles.active} to="/">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  )
}

export default Nav
