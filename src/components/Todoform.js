import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Todoform ({ addTask }) {
	const [todo, setTodo] = useState({
		id:"",
		title: "",
		completed: false
	})
	const handleOnSubmit= e => {
		e.preventDefault();
		if (todo.title.trim()){
			addTask({ ...todo, id: uuidv4() })
			setTodo({
				...todo, title: ""})
		}
	}
	return (
		<form onSubmit={handleOnSubmit}>
			<input
			className="form"
			type="text"
			name="title"
			value={todo.title}
			onChange={e => setTodo({...todo, title: e.target.value})}
			/>
			<button>Add Task</button>
		</form>
	)
}

export default Todoform
