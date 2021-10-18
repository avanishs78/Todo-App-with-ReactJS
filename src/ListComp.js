import React from 'react';
import './ListComp.css';

const ListComp =({todo,onDelete})=>{
    return (
        <div className="listItem">
            <span className="todo">{todo}</span>
            <button className="delete" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}

export default ListComp;