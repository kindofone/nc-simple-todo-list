import React, { useState } from 'react';

function TodoItem({id, text, complete, updateTaskCompleteState}) {
  const onCheckedChange = () => {
    updateTaskCompleteState(id, !complete);
  }

  return (
    <div className='TodoItem'>
      <label>{text}</label>
      <input onChange={onCheckedChange} type="checkbox" checked={complete}></input>
    </div>
  );
}

export default TodoItem;
