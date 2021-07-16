import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
    const renderedTodos = props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.id}/>
    });

    return (
        <div className="ui three column grid">
            {renderedTodos}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todos: state.todos };
}

export default connect(mapStateToProps)(TodoList);