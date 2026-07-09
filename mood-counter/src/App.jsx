import {useState} from "react";

function App(){
  const[mood,setMood  ]  = useState(" ☺️ happpy");

  return (

    <div>
      <h1>MOOD Counter</h1>
      {/* <p>HHI REACTT</p > */}
      <h2>current mood </h2>

      <p>{mood}</p>

      <button onClick={   ()=> setMood("happpy")  } >  HAPPY </button>
      <button onClick={   ()=> setMood("sadd")  } >  SAD </button>


    </div>


  );

}
export default App;

