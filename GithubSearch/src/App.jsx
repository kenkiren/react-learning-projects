import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const[user,setUser]= useState(null);

  useEffect(() => {
      fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => setUser(data))
}, [username]);


  return (
    <>
    <h1>Another Learning Project- Github Search</h1>
    <input type="text"
    placeholder="type hereee"
    value={username}
    onChange={(e) => setUsername(e.target.value)} />
  
   {user && (
     <div>
       <img src={user.avatar_url} alt={user.name} />
       <h2>{user.name}</h2>
       <p>{user.bio}</p>
     </div>
   )}

    </>
  )
}

export default App