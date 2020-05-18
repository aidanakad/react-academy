import React from 'react'
import Nav from './Nav'
import projects from './projects'
import NotFound from './NotFound'

function PortfolioItem(props) {
  const { portfolioId } = props.match.params
  const activeProject = projects.find((p) => p.id === portfolioId)
  if (!activeProject) return <NotFound />
  return (
    <div>
      <Nav />
      {activeProject.name}
    </div>
  )
}

export default PortfolioItem
