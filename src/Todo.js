import React, {useState} from "react";

function Todo ({
    task = "",
    id = "1",
    remove,
    update
}){
const [editTask, setEditTask] = useState(task);
const [editing, setEditing] = useState(false);

const toggleEdit =() =>{
    setEditing(editing => !editing);
}

const handleChange = e =>{
    setEditTask(e.target.value);
}

const handleDelete = () =>{
    remove(id)
};

const handleUpdate = e =>{
    e.preventDefault();
    update(id,editTask)
    setEditing(false);
};

let defaultView = (
    <div>
        <li>{task}</li>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleDelete}>X</button>
    </div>
);

if(editing){
    defaultView = (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" value={editTask} onChange={handleChange} />
                <button>Update</button>
            </form>
        </div>
    );
}
    return defaultView;
}

export default Todo;
