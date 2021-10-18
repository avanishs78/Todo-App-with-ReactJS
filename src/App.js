import React,{useState} from "react";
import './App.css';
import Todos from "./Todos";


const App = ()=>{
  let [todos,setTodos] = useState([])
  let [todo,setTodo] = useState('');

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!=todo
    }))
  }

  const trackTodoValue=(e)=>{
     setTodo(e.target.value);
  }
  const updateTodoList=()=>{
    if(todo){setTodos([...todos,todo]);
      setTodo('');
    }
  }
  const deleteAll = ()=>{
    setTodos([]);
  }
  return(
      <div className="main_div">
        <div className="app_container">
          <div className="heading">
             <h1><ins> To-do List</ins> </h1>
          </div>
          <input className="input" type="text" placeholder="Enter Todo" value={todo} onChange={trackTodoValue} value={todo}/>
          <button className="add" onClick={updateTodoList}>Add</button>
          {todos.length>0?<button className='deleteAll' onClick={deleteAll}>Delete All</button>:null}
          <Todos todo={todo} todos={todos} onDelete={onDelete} />
          
        </div>
      </div>
  )
}
export default App;