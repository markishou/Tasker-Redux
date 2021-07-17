import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div className="ui very padded container">
            <Form/>
            <TodoList/>
        </div>
    )
}

export default App;
