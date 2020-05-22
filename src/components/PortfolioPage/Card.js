import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import placeholder from '../../images/placeholder-portfolio.png'
import styles from './portfolio.module.css'


function Card({ link, image = placeholder, alt = '', title, desc, onImageClick }) {
  return (
    <NavLink to={link} className={styles.card}>
      <img src={image} alt={alt} onClick={onImageClick}/>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <div>{desc}</div>
      </div>
    </NavLink>
  )
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  //title: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  desc: PropTypes.oneOf(['description', 'hello world', 456]),
  // desc: PropTypes.string,
  onImageClick: PropTypes.func,
}

export default Card
