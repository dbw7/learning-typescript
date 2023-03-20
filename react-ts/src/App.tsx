import NewTodo2 from './component/NewTodo/NewTodo2';
import Todos from './component/Todos/Todos';
import TodosContextProvider from './store/todos-context';


function App() {
  
  
  return (
    <TodosContextProvider>
      <NewTodo2 />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
