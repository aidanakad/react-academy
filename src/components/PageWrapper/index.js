import React from 'react'
import Nav from '../Nav'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'
import styles from './page.module.css'

function PageWrapper({ children }) {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>
        <Nav />
        {children}
      </div>
    </div>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageWrapper
