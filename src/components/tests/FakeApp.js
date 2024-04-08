import { useRef, useState } from "react";
import FirstComp from "./components/FirstComp";
export default function FakeApp() {
  const [x,setx]=useState(0);
  const [data,setdata]=useState([]);
  const inputRef=useRef(null);
  const increment=()=>{
   setx(x+1)
  }
  const decrement=()=>{
    setx(x-1)
   }
  return (
    <div className="App">
    <button onClick={()=>increment()}>increment</button>
    <button onClick={()=>decrement()}>decrement</button>
    <FirstComp data={x} fn={setx}/><br/>
    <input ref={inputRef} type="text"/>
    <button onClick={()=>setdata([...data,inputRef.current.value])}>click</button>
    {data.map((item,index)=>{ return <h2 key={index}>{item}</h2>})}
    </div>
  );
}