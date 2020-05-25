import React from 'react'
import PageWrapper from '../PageWrapper'
import Card from './Card'
import styles from './portfolio.module.css'


function Portfolio() {
  return (
    <PageWrapper>
      <div className={`${styles.portfolioList} col-12`}>
        <Card 
          link="/portfolio/contact-list"
          title={4567}
          desc={456}
        />
        <Card 
          link="/portfolio/todo-list"
          title="Todo List"
          desc="hello world"
        />
      </div>
    </PageWrapper>
  )
}

export default Portfolio
