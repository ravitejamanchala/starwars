import React from 'react'

export default function TodoLIst({ todo, onDelete,font ,onComplete,color}) {
    return (
        <div className='p-3 d-flex justify-content-between mb-3 shadow' style={{background:`${color}`,width:300,opacity:todo.completed}}>
           <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onComplete(todo.id)}
            />
          <span  style={{ fontSize: `${font}px` }} className={todo.completed==false?"text-primary":"text-light"}>{todo.text}</span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      );
}