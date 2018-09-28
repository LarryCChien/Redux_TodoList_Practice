import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import App from './components/app';
import '../style/todoItems.scss';

function main() {
    const store = createStore(todoApp);
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content'));
}
main();
