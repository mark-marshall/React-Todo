import React from 'react';
import './Todo.css';

export default function TodoForm({ 
    typeValue, onTaskTypeChange, onAddClick, onEnter, onClearClick
}) 
{
  return (
    <div>
      <input
        type="text"
        value={typeValue}
        onChange={event => onTaskTypeChange(event)}
        onKeyPress={event => onEnter(event)}
        placeholder='slacking... 👀'
        className="input-box"
      />
      <button onClick={() => onAddClick()} className="add-button">+</button>
      <button onClick={() => onClearClick()} className="clear-button">-</button>
    </div>
  );
}
