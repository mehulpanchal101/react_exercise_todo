import React, { useState } from 'react'

const EditToDo = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }
    return (
        <form id="taskForm" onSubmit={handleSubmit}>
            <div class="input-group">
                <input type="text" class="form-control" id="taskInput" value={value}
                    onChange={(e) => setValue(e.target.value)} placeholder="Update" required />
                <div class="input-group-append" >
                    <button class="btn btn-primary" type="submit">Update</button>
                </div>
            </div>
        </form >
    )
}

export default EditToDo