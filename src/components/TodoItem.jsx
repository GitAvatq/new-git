import React, { useState } from 'react';
import EditTodo from './EditTodo';

const TodoItem = (props) => {
    const { eachTodo: todo, removeTodo, editTodo} = props;
    const [show, setShow] = useState(false);

    const handleDelete = () => {
        removeTodo(todo.id)
    };


    const handleShow = () => {
        setShow(!show);
    };

    return (
        <li>
            <span>{todo.task}</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleShow}>Edit</button>
            {show ? <EditTodo handleShow={handleShow} todo={todo} editTodo={editTodo}/> : null}
        </li>
    );
};

export default TodoItem;