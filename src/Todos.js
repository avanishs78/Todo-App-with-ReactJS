import React from 'react';

import ListComp from './ListComp';

const Todos = (props)=>{
  return (
    <div>
      {props.todos.map((todo)=>{
        return <ListComp todo={todo} key={todo} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos;