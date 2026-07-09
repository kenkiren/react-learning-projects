import './App.css';
import {useState, useEffect} from 'react';
import './App.css';
//now css

function App(){
  const [time,setTime] =useState(0);
  const [running, setRunning]= useState(false);

  useEffect( ()=> {
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prevTime)=> prevTime + 10);
      },10);  
    } else if(!running){
      clearInterval(interval);
    }
    
    return ()=> clearInterval(interval);

  },[running]);


  return (
    <> 

    
    <h1>hello this is our project</h1>
    {/* <h2>time is {time}</h2> */}
    {/* <button onClick={()=>setTime(time+1)}>update time</button> */}
    
    <div>
      <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/10)%100)).slice(-2)}</span>
    </div>
    <div>

    {running ?  <button onClick={()=> setRunning(false)}>stop</button> : <button onClick={()=> setRunning(true)}>start</button>}

      
      <button onClick={()=> {setTime(0) }}>reset</button>
    </div>

    </>
  );
}

export default App;