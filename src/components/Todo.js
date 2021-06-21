import React from 'react'

function Todo ({ todo, toggleButton, deleteTodo }) {
	function handleOnClick (){
		toggleButton(todo.id)
	}
	function handleDelete (){
		deleteTodo(todo.id)
	}
	return (
		<div style={{ display: "flex"}}>
			<input type="checkbox" onClick={handleOnClick}/>
			<li style={{textDecoration: todo.completed ? 'line-through': null}}
			>{todo.title}</li>
			<button onClick={handleDelete}>X</button>
		</div>
	)
}

export default Todo
