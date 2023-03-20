import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text:string) => void;
};
type Props = {
    children?:React.ReactNode
}; 
  
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodoHander = (text:string) => {
        const newTodo = new Todo(text);
    
        setTodos((prevState)=> {
            return prevState.concat(newTodo);
        })
    }
    
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHander
    }
    
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;