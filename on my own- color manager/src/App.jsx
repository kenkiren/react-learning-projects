import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  const[list,setList]= useState([]);

function clicked(){

  if(! count.trim()) return
//forgot then got it
  if(list.includes(count.trim())) return 
  setList([...list,count.trim()])
  // forgot but then rememeberd
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

{/* mistake here */}
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
