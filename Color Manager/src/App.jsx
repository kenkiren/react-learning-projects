import { useState } from 'react'
function App() {
  // const [count, setCount] = useState(0);
  const [color, setColor]= useState("");
  const[colors, setColors]= useState([]);
  function AddColor(){
    if(!color) return
    //this if is to prevent adding empty string to the list cuz its not a valid color
    //!color is the opposite of color, simply means if color is empty string, then return and do nothing
    //or color.trim() === "" to check if the color is empty string or only spaces here trim() is to remove the spaces from the string

    if(colors.includes(color.trim())){
      return
    }
    setColors([...colors, color.trim()])
    setColor("");
  }
  return (
<>
    <h1>Color Manager</h1>
    <input type="text"
    
      placeholder="type here"
      value={color}
      onChange={(e)=>setColor(e.target.value)}//
      

       />

       <button onClick={AddColor}>   ADD    </button>


      <ul>
      {colors.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
        </ul>
    {/* <p>YOU TYPED {color}</p> */}
</>
)}
export default App