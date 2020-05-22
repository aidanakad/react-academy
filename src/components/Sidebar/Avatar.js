import React from 'react'
import PropTypes from 'prop-types'
import styles from './sidebar.module.css'
import placeholder from '../../images/placeholder-portfolio.png'

function Avatar({ avatar }) {
  return (
    <img src={avatar || placeholder} alt="portrait" className={styles.avatar}/>
  )
}

Avatar.propTypes = {
  avatar: PropTypes.string
}

export default Avatar
