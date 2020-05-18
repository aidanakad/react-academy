import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Resume from './components/Resume'
import About from './components/About'
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={About} exact/>
        <Route path="/resume" component={Resume} exact/>
        <Route path="/contacts" component={Contacts} exact/>
        <Route path="/portfolio" component={Portfolio} exact/>
        <Route path="/portfolio/:portfolioId" component={PortfolioItem} exact/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
