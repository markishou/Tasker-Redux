import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';
import { removeTodo } from '../actions';
import todo from '../css/todo.css';

const Todo = ({ todo, completeTodo, removeTodo }) => {

    const onCompletedClick = () => {
        completeTodo(todo.id);
    }

    const onRemoveClick = () => {
        removeTodo(todo.id)
    }

    return (
        <div className="column">
            <div className="ui purple fluid card">
                <div className="content">
                    <i className="close icon remove" onClick={onRemoveClick}></i>
                    <i className={`check icon complete ${todo.completed? 'completedArrow' : ''}`} onClick={onCompletedClick}></i>
                    <div className={`description ${todo.completed ? 'completed' : ''}`}>
                        {todo.task}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { completeTodo, removeTodo })(Todo);