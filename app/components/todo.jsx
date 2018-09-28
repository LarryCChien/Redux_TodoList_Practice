import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, checked, text }) => (
    <li
      className="todoList__li"
    >
        <button
          type="button"
          className="todoList__li--btn"
          onClick={onClick}
          style={{ textDecoration: checked ? 'line-through' : 'none' }}
        >
            {text}
        </button>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;
