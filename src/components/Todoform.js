import React, {useState} from 'react';

import { v4 as uuidv4 } from 'uuid';

import './todoform.css';


function Todoform ( { addTask }) {
	const [ todo, setTodo ] = useState({
		id: "",
		title: "",
		completed: false
	})

	const handleSubmit = e => {
		e.preventDefault();

		if (todo.title.trim()){
			addTask({...todo, id: uuidv4() });
			setTodo({...todo, task:"" })
		}
	}

	return (
		<form className="form" onSubmit={handleSubmit}>

			<input
			className="form__input"
			name='task'
			type="text"
			placeholder="Add Task"
			value={todo.title}
			onChange={ e => setTodo({...todo, title: e.target.value})}
			/>

			<button className="form__button" type="submit">Add</button>
		</form>
	)
}


export default Todoform
