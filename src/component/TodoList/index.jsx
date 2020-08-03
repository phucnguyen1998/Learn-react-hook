import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todo: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todo: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todo, onTodoClick } = props;

    function handleTodoClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todo.map(todo => (
                <li onClick={() => handleTodoClick(todo)} key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;