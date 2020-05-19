import React from 'react'
import Nav from '../Nav'
import Card from './Card'
import styles from './portfolio.module.css'


function Portfolio() {
  return (
    <div>
      <Nav />
      <div className={styles.portfolioList}>
        <Card 
          link="/portfolio/contact-list"
          title="Contact List"
          desc="Краткое описание проекта, тут рассказывает о том, что он из себя представляет"
        />
        <Card 
          link="/portfolio/todo-list"
          title="Todo List"
          desc="Краткое описание проекта, тут рассказывает о том, что он из себя представляет"
        />
      </div>
    </div>
  )
}

export default Portfolio
