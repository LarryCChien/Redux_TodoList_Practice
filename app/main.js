import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import App from './components/app.jsx';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        Hello
    </Provider>,
    document.getElementById('content')
)
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('content')
// )
