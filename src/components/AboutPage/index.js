import React from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import styles from './about.module.css'

function About() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>
        <Nav />
        About
      </div>
    </div>
  )
}

export default About
