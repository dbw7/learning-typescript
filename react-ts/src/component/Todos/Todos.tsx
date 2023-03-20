import React, { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "../TodoItem/TodoItem";

const Todos = () => {
    const todosCtx = useContext(TodosContext);
    
    return <ul>
        {todosCtx.items.map(item => 
            <TodoItem key={item.id} text={item.text}></TodoItem>
        )}
    </ul>
}

export default Todos;