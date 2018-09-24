import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actionTypes';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

// 在精簡後便不用特地另外宣告預設值
// const initailState = {
//     visibilityFilter: SHOW_ALL,
//     todos: []
// };
const initailTodos = [{
    text: '這個預設已完成',
    checked: true,
}, {
    text: '這個預設還沒完成',
    checked: false,
}];

const todos = (state = initailTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    checked: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        checked: !todo.checked
                    })
                }
                return todo;
            });
        default:
            return state;
    }
};
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
// const todoApp = (state = initailState, action) => {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             // 將state跟改過的visibilityFilter傳入{}裡，而不是直接把後者傳進state中。
//             // 此外後者會將前者複寫，見LearningNote.md
//             return Object.assign({}, state, {
//                 visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//             });
//         // 把會改到todos的跟改到visibility的分開寫（他們彼此不影響，所以分開也不會有相依性的問題）
//         case ADD_TODO:
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                     todos: todos(state.todos, action)
//                 });
//         default:
//             return state;
//     }
// }
// 上面這段可以精簡寫成下面
// 原本預設值是寫 initailState ，但看 visibilityFilter 及 todos 兩個function可知，
// 二者皆各自在預設值設定了與 initailState 相同的預設值 SHOW_ALL 以及 []，
// 故在 todoApp 的 state 預設值就只要設定為 {} 就好，不用在設定為 initailState。
// 而 initailState 也因此可以不用另外在宣告。但仍保留其痕跡，以利之後回來檢視時的理解。
// const todoApp = (state = {}, action) => {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     };
// }
// export default todoApp;
// 同時因為 Redux 有提供 utility 叫 combineReducers()，因此又可以改寫成：
const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;
// combineReducers的用法參考如下：
// const reducer = combineReducers({
//     a: doSomethingWithA,
//     b: processB,
//     c: c
// })
// 上述寫法等同於下列：
// function reducer(state = {}, action) {
//     return {
//         a: doSomethingWithA(state.a, action),
//         b: processB(state.b, action),
//         c: c(state.c, action)
//     }
// }
