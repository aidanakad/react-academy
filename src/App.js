import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ResumePage from './components/ResumePage'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'
import ContactList from './components/ContactList'
import ContactItem from './components/ContactList/ContactItem'
import ContactsPage from './components/ContactsPage'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AboutPage} exact/>
        <Route path="/resume" component={ResumePage} exact/>
        <Route path="/contacts" component={ContactsPage} exact/>
        <Route path="/portfolio" component={PortfolioPage} exact/>
        <Route path="/portfolio/contact-list" component={ContactList} exact/>
        <Route path="/portfolio/contact-list/:contactId" component={ContactItem} exact/>


        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
