import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [todo,setTodo]= useState("");
  const[todos,setTodos] =useState([]);

    function addtodo(){
      const newtodo={
        text: todo,
        completed: false
      }
      setTodos([...todos, newtodo]);
      setTodo("");
    }
  return (
    
  <>
        <h1>MY TODO APPLICATION</h1>
        <input
        type="text"
        placeholder= "type smth"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        
        <button onClick={addtodo}> ADD</button>

        <ul>
          { todos.map((item,index)=>(
            <li key={index} > {item.text}    </li>
          ))  }
        </ul>

    </>
  )
}

export default App
