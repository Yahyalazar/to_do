import'./Css/TodoItems.css'
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';

export const TodoItems = ({no,text,display,setTodo}) => {
  let data =JSON.parse(localStorage.getItem("todos"));
  const deleteTodo = (no)=>{
    let data =JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo)=>todo.no!==no);
    setTodo(data)
  }
  const toogle=()=>{
   let data =JSON.parse(localStorage.getItem("todos"));
   for(let i=0; i<data.length; i++){
  if (data[i].no===no){
   if(data[i].display===""){
   data[i].display ="line-through";
  }
  else
  {
  data[i].display ="";
  }
  break;
  }
  }
  setTodo(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toogle(no)}}>
        {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoItems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt="" />
    </div>
  )
}
export default TodoItems;
  