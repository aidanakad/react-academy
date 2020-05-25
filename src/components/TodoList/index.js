import React from 'react'
import shortid from 'shortid'
import Todo from './Todo'
import style from './todo.module.css'
import Priorities from './Priority'

function TodoList() {
  const [todos, setTodos] = React.useState([])
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [priority, setPriority] = React.useState('normal')

  const handleAdd = (e) => {
    e.preventDefault()
    const newTodo = {
      id: shortid.generate(),
      title, desc, priority
    }
    setTitle('')
    setDesc('')
    setPriority('normal')
    setTodos([ ...todos, newTodo ])
  }

  return (
    <div className={style.page}>
      <form className={style.form}>
        <h3>Новая задача</h3>
        <input 
          type="text" 
          placeholder="Название" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Описание" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Priorities 
          priority={priority}
          setPriority={setPriority}
        />
        <button onClick={handleAdd} >
          Добавить
        </button>
      </form>
      <div className={style.list}>
      { todos.map(c => <Todo key={c.id} todo={c}/>) }
      </div>
    </div>
  )
}

export default TodoList
