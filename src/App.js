import React from 'react';
import { title, contactsArray } from './constants'
import Title from './components/Title'
import ContactList from './components/ContactList'
import './App.css';


function App() {
  return (
    <div className="app">
      <Title text={title}/>
      <ContactList contacts={contactsArray}/>
    </div>
  )
}

export default App;
