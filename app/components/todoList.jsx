import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo.jsx';

const TodoList = ({ todos, onTodoClick }) => (
    <ul className='todoList__ul'>
        {todos.map(todo =>
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        checked: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;