import React from 'react'
import './todo.css'

function Todo( { todo, toggleComplete, removeTodo }) { 

	function handleCheckBoxClick (){
		toggleComplete(todo.id)
	}
	function handleRemoveTodo () {
		removeTodo(todo.id)
	}
	return (
		<div className="todo">
			<input type="checkbox" onClick={handleCheckBoxClick}/>
			<li style={{textDecoration: todo.completed ? "line-through" : "" }}
			>{todo.title}</li>
			<button onClick={handleRemoveTodo}>X</button>
		</div>
	)
}

export default Todo
