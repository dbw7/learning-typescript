import React, { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";


const NewTodo: React.FC = () => {
    const todoTextRef = useRef<HTMLInputElement>(null);
    
    const todosCtx = useContext(TodosContext);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextRef.current!.value;
        
        if(enteredText.trim().length === 0){
            return
        }
        todosCtx.addTodo(enteredText);
    }
    
    return <form onSubmit={submitHandler}>
        <label htmlFor="text" >Todo Text</label>
        <input type="text" id="text" ref={todoTextRef}></input>
        <button>Add Todo</button>
    </form>
}

export  default NewTodo;