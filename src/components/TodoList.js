import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({items}) {
  const [tasks, setTasks] = useState(items);
  const [isDone, setIsDone] = useState(false);

  const updateIsDone = () => {
    setIsDone(tasks.filter(item => !item.complete).length === 0);
  }

  const updateTaskCompleteState = (id, newState) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = newState;
      }
      return task;
    });

    updateIsDone();

    setTasks(newTasks);
  }

  return (
    <div className='TodoList'>
      {isDone ? <h4>Nothing to do! :)</h4> : null}
      {tasks.map(({id, text, complete}) => {
        return (
          <TodoItem 
            key={id}
            id={id}
            text={text} 
            complete={complete} 
            updateTaskCompleteState={updateTaskCompleteState}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
