import React from 'react'

const ToDoItem = ({ todo, onToggleToDo }) => {
    const { id, text, completed } = todo;

    return (
      <div className={`todo-item ${completed ? 'completed' : ''}`}>
          <input 
          type='checkbox'
          checked={completed}
          onChange={() => onToggleToDo(id)}
          />
          <span>{text}</span>
      </div>
    );
    };
export default ToDoItem;


