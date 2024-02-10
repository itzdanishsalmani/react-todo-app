import { useEffect, useState } from 'react'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
        fetch("http://localhost:3300/todos")
            .then(response => response.json())
            .then(data => setTodos(data.todos))
            .catch(error => console.error("Error while fetching:", error));
    }, 5000); // Interval set to 10 seconds (10000 milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, []);

  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    
    </div>
  )
  }
export default App
