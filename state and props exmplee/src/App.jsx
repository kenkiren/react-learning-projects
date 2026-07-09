import { useState, useEffect } from 'react';
import changename from "./changename";




function App() {
  const [username,setusername]=useState("")
  const handleinput=e=>{
    setusername(e.target.value)
  }


  return (
    <>



    <h1>State and Props here  </h1>
    <label htmlFor="username"> enter here: </label>
    <input  id="username" type="text"
      placeholder="my name hehe"
      onChange={handleinput}
    />

    <p>Hi hello , {username } </p>
    <p>{username}, you are hot </p>

    <changename username={username} />
    

    



    </>
  )
}

export default App