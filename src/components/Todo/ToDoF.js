import React, { useState } from 'react'

const ToDoF = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
    return (
        <form id="taskForm" onSubmit={handleSubmit}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="taskInput" value={value}
                    onChange={(e) => setValue(e.target.value)} placeholder="Add a new task" required />
                <div class="input-group-append" >
                    <button class="btn btn-primary" type="submit">Add Task</button>
                </div>
            </div>
        </form >
    )
}

export default ToDoF;