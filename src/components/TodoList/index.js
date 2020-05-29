import React from 'react'
import shortid from 'shortid'
import Todo from './Todo'
import style from './todo.module.css'
import Priorities from './Priority'

function TodoList() {
  // const [todos, setTodos] = React.useState([])
  // const [title, setTitle] = React.useState('')
  // const [desc, setDesc] = React.useState('')
  const [priority, setPriority] = React.useState('normal')

const initialState = {
  todos: [],
  title: '',
  desc: ''

}

const reducer = (state, action) =>{
  switch(action.type){
    case 'CHANGE_TITLE':
      return{...state, title: action.title};
    case 'CHANGE_DESC':
      return{...state, desc: action.desc}
      // case 'CHANGE_PRIORITY':
      //   return{...state, priority: action.priority}
    case 'ADD_NEW_TASK':
      return {...state, contacts:[...state.todos, action.todos]}
    case 'RESET_FIELDS':
      return{...state, title: '', desc:'', priotity: 'normal'}
    default:
      throw new Error()

  }
}
const [state, dispatch] = React.useReducer(reducer, initialState)
const {title, desc,  todos} = state

  const handleAdd = (e) => {
    e.preventDefault()
    const newTodo = {
      id: shortid.generate(),
      title, desc, priority, todos
    }
    dispatch({type: 'RESET_FIELDS'})
    dispatch({type: 'ADD_NEW_TASK'})
    setPriority('normal')
  }

  return (
    <div className={style.page}>
      <form className={style.form}>
        <h3>Новая задача</h3>
        <input 
          type="text" 
          placeholder="Название" 
          value={title}
          onChange={(e) => dispatch({type:'CHANGE_TITLE', title: e.target.value})}
        />
        <textarea 
          placeholder="Описание" 
          value={desc}
          onChange={(e) => dispatch({type:'CHANGE_DESC', desc: e.target.value})}
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
