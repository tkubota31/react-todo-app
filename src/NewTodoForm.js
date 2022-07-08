import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({createTodo}) =>{
    const [task,setTask] = useState("");

    const handleChange = (e) =>{
        setTask(e.target.value)
    };

    const getInput = e =>{
        e.preventDefault();
        createTodo({task, id:uuid()});
        setTask("");
    };

    return(
        <div>
            <form onSubmit ={getInput}>
                <label htmlFor="task">Todo:</label>
                <input
                id="task"
                name="task"
                type="text"
                onChange={handleChange}
                value = {task}
                />
                <button>Add task!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;
