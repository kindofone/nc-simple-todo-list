import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({items}) {
  // we manage two states in TodoList: tasks and isDone
  const [tasks, setTasks] = useState(items);
  const [isDone, setIsDone] = useState(false);

  // a function that calculates if all tasks are completed
  // and updates the isDone state accordingly
  const updateIsDone = () => {
    setIsDone(tasks.filter(item => !item.complete).length === 0);
  }

  // a function that updates a task status in the tasks state array
  // we send this function down to the TodoItem component
  // this way we can update the tasks state here
  // from an event that happens in a lower-level component
  const updateTaskCompleteState = (id, newState) => {
    // to update the tasks state, we use 'setTasks' below
    // the 'setTasks' function expects an array with all the tasks
    // so to update that state we have to prepare the whole array
    // because we just want to update one task, we map the current tasks array
    // to a new tasks array that contains the update that we want
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = newState;
      }
      return task;
    });

    // we make sure to update the isDone state
    // everytime any task complete status is updated
    updateIsDone();

    // update the 'tasks' state with the new tasks array created above
    setTasks(newTasks);
  }

  return (
    <div className='TodoList'>
      {/* 'null' value in JSX is valid, it just ignores it */}
      {isDone ? <h4>Nothing to do! :)</h4> : null}

      {/* 
        the 'tasks' state contains all the tasks in an object form
        in order to use it in JSX we map the task objects into react components
        in this case we render each task using a TodoItem component
      */}
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
