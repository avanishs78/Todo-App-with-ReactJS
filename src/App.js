import React,{useState} from "react";
import './App.css';
import Todos from "./Todos";



const App = ()=>{
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('');
  const [tracker,setTracker] = useState('');

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }

  const trackTodoValue=(e)=>{
     setTodo(e.target.value);
  }
  const addTodoList=()=>{
    if(tracker!==''){
      const filteredTodos = todos.map((element,index)=>{
        if(index===tracker){
           element.title=todo;
        }
        return element;
      })
      setTodos(filteredTodos);
      setTracker('');
      setTodo('');

    }
    else if(todo){setTodos([...todos,{'id':Math.ceil(Math.random()*100),'title':todo,'status': false}]);
      setTodo('');
      console.log(todos);
    }
  }
  const deleteAll = ()=>{
    setTodos([]);
  }
  const addOnEnter=(e)=>{
    if(e.key==='Enter')
    addTodoList();
  }

  const editTodo=(id)=>{
    console.log(id);
     setTracker(id);
     setTodo(todos[id].title);
  }
  return(
      <div className="main_div">
        <div className="app_container">
          <div className="heading"><br/>
            
             <h1> To-do List </h1>
          </div>
          <div>
            <input className="input" type="text" placeholder="Enter Todo" value={todo} onChange={trackTodoValue}  onKeyPress={addOnEnter}/>
            <button className="add"  onClick={addTodoList}>{tracker!=='' ? "Edit" : "Add"}</button>
          </div>
          <Todos todo={todo} todos={todos} onDelete={onDelete} editTodo={editTodo}  />
          <div>
          {todos.length>0?<button onClick={deleteAll} className="deleteAll">Delete All</button>:<h3 style={{marginTop:'40px'}}>No records to display</h3>}
          </div>
        </div>
        <h3 className="developer">developed by- Avanish Singh</h3>
      </div>
  )
}
export default App;