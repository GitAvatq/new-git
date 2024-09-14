import React, { useState } from 'react';

const EditTodo = ({todo, editTodo, handleShow}) => {
    const [ value, setValue ] = useState(todo.task);

    const handleEdit = () => {
        const editTodoObj = {
            id: todo.task,
            task: value,
            completed: false
        };
        editTodo(editTodoObj, todo.id);
        handleShow()
    };
    
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleEdit}>Save</button>
        </div>
    );
};

export default EditTodo;