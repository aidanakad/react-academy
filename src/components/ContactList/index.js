import React from 'react'
import shortid from 'shortid'
import Card from './Card'
import style from './page.module.css'

function ContactList() {
  const [contacts, setContacts] = React.useState([])
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!name || !phone) {
      alert('заполните все поля')
      return
    }
    const newContact = {
      id: shortid.generate(),
      name, 
      phone
    }
    setName('')
    setPhone('')
    setContacts([ ...contacts, newContact ])
  }

  return (
    <div className={style.page}>
      <form className={style.form}>
        <h3>Новый контакт</h3>
        <input 
          type="text" 
          placeholder="Имя" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Телефон" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={handleAdd}
        >
          Добавить
        </button>
      </form>
      <div className={style.list}>
      { contacts.map(c => <Card key={c.id} contact={c}/>) }
      </div>
    </div>
  )
}

export default ContactList
