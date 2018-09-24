import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import App from './components/app.jsx';
import '../style/todoItems.scss';

main();

function main() {
    let store = createStore(todoApp);
	ReactDOM.render(
        <Provider store={store}>
		    <App />
        </Provider>, document.getElementById('content'));
}