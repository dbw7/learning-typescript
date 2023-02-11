import React from 'react';
import Todos from './component/Todos/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('New Object'),
  ]
  
  return (
    <div >
      <Todos items={todos}/>
    </div>
  );
}

export default App;
