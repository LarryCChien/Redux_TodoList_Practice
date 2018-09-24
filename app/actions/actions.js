import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

// let nextTodoId = 0;
let nextTodoId = 2; // 預設有兩個todo

export const addTodo = (text) => {
    return { type: ADD_TODO, id: nextTodoId++, text }
}
export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index }
}
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter }
}
