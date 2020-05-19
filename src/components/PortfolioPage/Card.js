import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import placeholder from '../../images/placeholder-portfolio.png'
import styles from './portfolio.module.css'


function Card({ link, image = placeholder, alt = '', title, desc }) {
  return (
    <NavLink to={link} className={styles.card}>
      <img src={image} alt={alt}/>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <div>{desc}</div>
      </div>
    </NavLink>
  )
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  desc: PropTypes.string,
}

export default Card
