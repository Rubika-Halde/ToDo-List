import React from 'react'
import TodoList from './TodoList'

const Todo = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((todos) => (
          <TodoList
          todos={todos}
            text={todos.text}
            key={todos.id}
            todo={todo}
            setTodo={setTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todo
