import React, { ReactNode } from "react";

type TodoItemProps = {
    text: string;
    children?: ReactNode;
}

const TodoItem = ({text, children}: TodoItemProps) =>{
    return (
        <li>{text}</li>
    )
}

export default TodoItem;