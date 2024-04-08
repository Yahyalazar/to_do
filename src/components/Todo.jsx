import { useEffect, useRef, useState } from 'react';
import './Css/Todo.css';
import TodoItems from './TodoItems';

let counter = 0;
export const Todo = () => {

  const[todos,setTodo]=useState([]);
  const inputRef=useRef(null);

  const add=()=>{
    setTodo([...todos,{no:counter++,text:inputRef.current.value,display:""}]);
    inputRef.current.value ="";
    localStorage.setItem("todos_count",counter)
  }

  useEffect(()=>{
     setTodo(JSON.parse(localStorage.getItem("todos")));
     counter=localStorage.getItem("todos_count")
  },[])

  useEffect(()=>{
     setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos))
     },100)
  },[todos])

  return (
    <div className='todo'>
       <div className="todo-header">To-Do List</div>
         <div className="todo-add">
           <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
           <div className='todo-add-btn' onClick={()=>add()}>ADD</div>
         </div>
         <div className="todo-list">
              {todos.map((item,index)=>{
                return <TodoItems key={index} setTodo={setTodo} no={item.no} text={item.text} display={item.display}/>
                })}
           </div>
    </div>

  )
}
export default Todo;