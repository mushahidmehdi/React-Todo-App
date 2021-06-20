import './App.css';
import { useState, useEffect } from 'react'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist';

function App() {

  const  SET_LOCAL_STOREAGE = 'SET_LOCAL_STOREAGE';
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem(SET_LOCAL_STOREAGE))
    if (getTodos){
      setTodos(getTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SET_LOCAL_STOREAGE, JSON.stringify(todos))
  },[todos])

  function addTask (todo){
    setTodos([...todos, todo])
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }}
        return todo;
      }))
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  return (
    <div className="App">
      <Todoform addTask={addTask}/>
      <Todolist todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
