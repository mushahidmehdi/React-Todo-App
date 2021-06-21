import React from 'react'
import Todo from './Todo'

function Todolist( { todos, toggleButton, deleteTodo}) {
	return (
		<ul>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} toggleButton={toggleButton} deleteTodo={deleteTodo}/>
			))}
		</ul>
	)
}

export default Todolist
