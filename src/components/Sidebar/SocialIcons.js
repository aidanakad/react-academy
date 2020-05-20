import React from 'react'
import styles from './sidebar.module.css'
import InstagramIcon from '../Icons/Instagram'
import FacebookIcon from '../Icons/Facebook'
import GithubIcon from '../Icons/Github'



function SocialIcons() {
  return (
    <div className={styles.social}>
      <a 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className={styles['svg-icon']}/>
      </a>
      <FacebookIcon className={styles.icon}/>
      <GithubIcon className={styles.icon}/>
    </div>
  )
}

export default SocialIcons
