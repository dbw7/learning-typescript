import React, {useState} from "react";
import Todo from "../models/todo";

const TodosContext = React.createContext<{
    items: Todo[],
    addTodo: (text:string) => void;
}>({
    items: [],
    addTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodoHander = (text:string) => {
        const newTodo = new Todo(text);
    
        setTodos((prevState)=> {
            return prevState.concat(newTodo);
        })
    }
    
    const contextValue = {
        items: todos,
        addTodo: addTodoHander
    }
    
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}