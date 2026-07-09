import {useState} from "react";
import Mood  from "./Mood";

import Title from "./Title"
function App(){
  const[mood,setMood  ]  = useState(" ☺️ happpy");

  return (

    <div>
      {/* <h1>MOOD Counter</h1> */}
      <Title></Title>
      {/* <p>HHI REACTT</p > */}
      {/* <h2>current mood </h2> */}

    <Mood  mood={mood} >  </Mood>



      <button onClick={   ()=> setMood("happpy")  } >  HAPPY </button>
      <button onClick={   ()=> setMood("sadd")  } >  SAD </button>
      <button  onClick={  ()=> setMood( "sleepyy")  }     >  sleep</button>


    </div>


  );

}
export default App;

