import React from 'react'
import styles from './sidebar.module.css'
import avatar from '../../images/avatar.png'
import SocialIcons from './SocialIcons'
import Avatar from './Avatar'

function Sidebar(props) {
  console.log('sidebar', props)
  return (
    <div className={styles.sidebar}>
      <Avatar avatar={avatar} />
      <div className={styles.name}>
        Lazy Dev
      </div>

      <SocialIcons />
    </div>
  )
}

export default Sidebar
