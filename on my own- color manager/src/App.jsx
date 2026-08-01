import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  const[list,setList]= useState([]);

function clicked(){

  if(! count.trim()) return

  if(list.includes(count.trim())) return 
  setList([...list,count.trim()])
  setCount("")


}
  return (
    <>
    <h1> COLOR MANAGER</h1>


    <input type="text"
    placeholder="type smth"
    value={count}
    onChange={(e)=> setCount(e.target.value)  }
    />
    <button onClick={clicked}  >  ADD  </button>


    <ul >   
      {list.map( (count)=>(
        <li>  
            {count}
        </li>
      ) )}
      
    </ul>
    </>
  )
}

export default App
