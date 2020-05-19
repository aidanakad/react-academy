import React from 'react'
import styles from './sidebar.module.css'
import avatar from '../../images/avatar.png'
import SocialIcons from './SocialIcons'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={avatar} alt="portrait" className={styles.avatar}/>
      <div className={styles.name}>
        Lazy Dev
      </div>

      <SocialIcons />
    </div>
  )
}

export default Sidebar
