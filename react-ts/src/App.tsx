import {useState} from 'react';
import NewTodo from './component/NewTodo/NewTodo';
import Todos from './component/Todos/Todos';
import Todo from './models/todo';

function App() {
  
  
  return (
    <div >
      <NewTodo onAddTodo={addTodoHander} />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
