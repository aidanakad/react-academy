import React from 'react';
import { title, contactsArray } from './constants'
import Title from './components/Title'
import CreateContactForm from './components/CreateContactForm'
import ContactList from './components/ContactList'
import './App.css';


function App() {
  const [newContact, setNewContact] = React.useState({})
  console.log('newContact', newContact)

  const handeSave = (data) => {
    setNewContact(data)
  }
  return (
    <div className="app">
      <Title text={title}/>
      <CreateContactForm onSave={handeSave} />
      <ContactList contacts={[...contactsArray, newContact]}/> 
    </div>
  )
}

export default App;
