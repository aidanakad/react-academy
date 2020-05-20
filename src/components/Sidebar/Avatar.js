import React from 'react'
import styles from './sidebar.module.css'
import placeholder from '../../images/placeholder-portfolio.png'

function Avatar({ avatar }) {
  return (
    <img src={avatar || placeholder} alt="portrait" className={styles.avatar}/>
  )
}

export default Avatar
