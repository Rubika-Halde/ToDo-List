import React, { useState } from 'react'
import style from './App.css'
import Form from './components/Form'
import Todo from './components/Todo'

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todo, setTodo] = useState([])
  return (
    <div className='App'>
      <header>
      <h1>Todo List</h1>
    </header>
    <Form inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo} />
    <Todo  todo={todo} setTodo={setTodo}/>
    
    </div>
  )
}

export default App