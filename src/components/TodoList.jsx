import React from 'react'

const TodoList = ({ text, todo, setTodo, todos }) => {
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== todos.id))
  }
  const completeHandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
      }),
    )
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todos.completed ? "completed" : ""}`}>{text} text</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TodoList
