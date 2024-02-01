import React from 'react'
const ToDo = ({ todo, index, toogleComplete, deleteTodo, editTodo }) => {
    return (
        <>
            <li id={index} class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto" >
                    <div class="fw-bold" onClick={() => toogleComplete(todo.id)}>
                        {todo.completed == 1 ? <del>{todo.task}</del> : todo.task}
                    </div>

                </div>
                <span class="badge bg-primary rounded-pill mr-5" onClick={() => editTodo(todo, todo.id)}>Edit</span>
                <span class="badge bg-primary rounded-pill" onClick={() => deleteTodo(todo.id)}>Detele</span>
            </li>
        </>
    )
}

export default ToDo