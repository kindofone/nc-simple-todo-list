import React, { useState } from 'react';

function TodoItem({id, text, complete, updateTaskCompleteState}) {
  // the TodoItem component doesn't have a state of its own, it is stateless
  // instead it gets all the data it needs by props

  // this is the checkbox change event handler callback
  const onCheckedChange = () => {
    // when ever a checkbox checked state is changed
    // we update the TodoList 'tasks' state by calling the callback function
    // we got by props
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
