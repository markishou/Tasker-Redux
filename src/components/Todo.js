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
            <div className="ui green fluid card">
                <div className="content">
                <i className="right floated close icon remove" onClick={onRemoveClick}></i>
                    <div className={`description ${todo.completed ? 'completed' : ''}`}>
                        {todo.task}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div 
                            className={`ui basic green button ${todo.completed ? 'disabled' : ''}`} 
                            onClick={onCompletedClick}
                        >
                            Complete
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { completeTodo, removeTodo })(Todo);