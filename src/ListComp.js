import React from 'react';
import './ListComp.css';

const ListComp =({todo,onDelete,editTodo,index})=>{
    return (
        <div className="listItem">
          <span className='title'>
            <span className='sl_no'>{index+1}.</span>
            <span className="todo">{todo.title}</span>
         </span>
            <span className='editDelete' >
               <button className='edit' onClick={()=>editTodo(index)}> Edit </button>
               <button  className="delete" onClick={()=>onDelete(todo)}>Delete</button>
            </span>
        </div>
    )
}

export default ListComp;