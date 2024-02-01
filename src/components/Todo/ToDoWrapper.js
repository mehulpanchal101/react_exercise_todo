import React, { useState } from 'react'
import ToDoF from './ToDoF';
import ToDo from './ToDo';
import EditToDo from './EditToDo';
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = task => {
        setTodos([...todos, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
        console.log(todos);
    }

    const toogleComplete = (id) => {
        setTodos(todos.map(item =>
            item.id === id ? {
                ...item, completed: !item.completed
            } : item
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (todo, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo))
    };
    return (
        <>
            <div class="container mt-5">
                <h1 class="mb-4">To-Do List</h1>
                <ToDoF addTodo={addTodo} />
                <ol class="list-group list-group-numbered">
                    {todos.map((todo, index) => (
                        todo.isEditing ? (
                            <EditToDo editTodo={editTask} task={todo} />
                        ) : (
                            <ToDo todo={todo} index={index} toogleComplete={toogleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                        )
                    ))}
                </ol>
            </div >
        </>
    )
}

export default ToDoWrapper;