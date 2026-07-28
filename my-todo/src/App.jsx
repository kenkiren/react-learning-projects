import { useState } from 'react'
import TodoList from './TodoList'

function App() {
  // const [count, setCount] = useState(0)
  const [todo,setTodo]= useState("");
  const[todos,setTodos] =useState([]);

    function addtodo(){

      if(!todo.trim()) return

      const newtodo={
        text: todo.trim(),
        completed: false
      }
      setTodos([...todos, newtodo]);
      setTodo("");
    }
    function deleteTodo(indexDelete){
    
      const newarray=todos.filter((item,index) => index !== indexDelete);

      setTodos(newarray);
      
    }

    
  return (
    
  <>
        <h1>MY TODO APPLICATION ..</h1>
        <input
        type="text"
        placeholder= "type smth"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        
        <button onClick={addtodo}> ADD</button>
        
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        {/* for deleting the todo. */}
        
        <button></button>

    </>
  )
}

export default App
