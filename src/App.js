import './App.css';
import { useState, useEffect } from 'react'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist';

function App() {
  const SET_LOCAL_STORAGE = 'SET-LOCAL-STORAGE'
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem(SET_LOCAL_STORAGE))
    if (localTodos){
      setTodos(localTodos) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SET_LOCAL_STORAGE, JSON.stringify(todos))
  },[todos])


  const addTask = (todo) => {
    setTodos([...todos, todo])
  }

 function toggleButton (id){
   setTodos( 
     todos.map(todo => {
    if ( todo.id === id ){
      return {
        ...todo, completed: !todo.completed
      }
    }
    return todo
   }))
 }

 function deleteTodo (id){
   setTodos(todos.filter(todo => todo.id !== id ));
 }

  return (
    <div className="App">
      <Todoform addTask={addTask}/>
      <Todolist todos={todos}
      toggleButton={toggleButton} 
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
