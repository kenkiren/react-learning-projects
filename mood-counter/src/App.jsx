import {useState} from "react";
import Mood  from "./Mood";
import Colors from "./Color"
import Title from "./Title"
function App(){
  const[mood,setMood  ]  = useState(" ☺️ happpy");

  const moods=[
    "happy",
    "sad",
    "excited",
    "overjoy",
    "sleepy"
  ];




  return (

    <div>
      {/* <h1>MOOD Counter</h1> */}
      <Title></Title>
      {/* <p>HHI REACTT</p > */}
      {/* <h2>current mood </h2> */}

    <Mood  mood={mood} >  </Mood>
    {mood==="happy" && <p>  you are happy </p>}
    {mood==="sadd" && <p>  you are sad </p>}  
    {mood==="sleepyy" ? <p>GO sleep</p> : <p>no</p>} 
    {/* using ternary heree */}




      <button onClick={   ()=> setMood("happy")  } >  HAPPY </button>
      <button onClick={   ()=> setMood("sadd")  } >  SAD </button>
      <button  onClick={  ()=> setMood( "sleepyy")  }     >  sleep</button>

    
    <h2>all moods</h2>

    <ul>
      {moods.map((item)=>(
                <li>{item}</li>
      ))}
    </ul>

    <Colors />

    </div>


  );

}
export default App;

