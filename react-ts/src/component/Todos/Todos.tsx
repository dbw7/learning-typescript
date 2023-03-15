import React, { ReactNode } from "react";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem/TodoItem";
type TodoProps = {
    items: Todo[];
    children?: ReactNode;
}
const Todos = ({items, children}: TodoProps) => {
    
    console.log(children);
    console.log(items);
    return <ul>
        {items.map(item => 
            <TodoItem key={item.id} text={item.text}></TodoItem>
        )}
        {children}
    </ul>
}

export default Todos;