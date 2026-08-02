import { useState } from 'react'
import Listhere from './Todolist'
// import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const[todolists, setTodolists] = useState([]);

  function btn(){
    if(!todo.trim()) return

    const newtodo={
      text: todo.trim(),
      completed: false
    }
    setTodolists([...todolists, newtodo]);
    // console.log("yess");
    setTodo("");
  }
  return (
    <>
      <input type="text"
      placeholder="typeee"
      value={todo} 
      onChange={(e) => setTodo(e.target.value)} />

      <button onClick={btn}>    ADD  </button>

     <Listhere todolists={todolists} />

    </>
  )
};

export default App
