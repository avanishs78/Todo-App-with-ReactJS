import React from 'react';

import ListComp from './ListComp';

const Todos = (props)=>{
  return (
    <div>
      {props.todos.map((element,index)=>{
        return <ListComp todo={element} index={index} key={index} onDelete={props.onDelete} editTodo={props.editTodo}/>
      })}
    </div>
  )
}

export default Todos;