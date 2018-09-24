import React from 'react';
import Footer from './footer.jsx';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
