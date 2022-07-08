import React, {useState} from "react"
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () =>{
    const[todos,setTodos] = useState([]);

    const create = newTodo =>{
        setTodos(todos =>[...todos,newTodo]);
    }

    const update = (id,updatedTodo) =>{
        setTodos(todos => todos.map(todo =>
            todo.id === id ? {...todo, task : updatedTodo}: todo));
    };

    const remove = id =>{
        setTodos(todos => todos.filter(todo => todo.id !==id));
    };

    const todoComponents = todos.map(todo =>(
        <Todo
        remove={remove}
        key={todo.id}
        id={todo.id}
        task={todo.task}
        update ={update}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={create}/>
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList
