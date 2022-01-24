import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      {/* TodoList gets an 'items' prop which is an array of task objects */}
      <TodoList items={
        [
          {
            id: 0,
            text: "Task A",
            complete: false,
          },
          {
            id: 1,
            text: "Task B",
            complete: false,
          },
          {
            id: 2,
            text: "Task C",
            complete: true,
          },
          {
            id: 3,
            text: "Task D",
            complete: false,
          },
        ]
      } />
    </div>
  );
}

export default App;
