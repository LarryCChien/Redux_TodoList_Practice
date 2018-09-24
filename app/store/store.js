import { createStore } from 'redux';
import { todoApp } from '../reducers/reducer';
import { defaultState } from '../reducers/state';

// 預設值是 從 state.js 傳來的 defaultState 。
let store = createStore(todoApp, defaultState);
