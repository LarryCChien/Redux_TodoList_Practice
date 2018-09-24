import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/todoList.jsx';

// todos.filter() 是指回傳後方為 true 的物件。
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL': // 回傳全部的todos
            return todos;
        case 'SHOW_CHECKED': // 逐項檢查並回傳 t.checked 為 true 者。
            return todos.filter(t => t.checked);
        case 'SHOW_ACTIVE': // 逐項檢查並回傳 t.checked 為 false 者。
            return todos.filter(t => !t.checked);
    };
};

// 回傳需要顯示的 todos 。
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

// 部署 actions ，建立 onTodoClick 的 function ，作用是 dispatch 一個 TOGGLE_TODO 的 action 。
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
