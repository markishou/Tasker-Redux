import React from 'react';
import { uploadTodo } from '../actions';
import { setTodoText } from '../actions';
import { connect } from 'react-redux';
import todoList from '../css/todoList.css';

const Form = ({ todo, uploadTodo, setTodoText }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        uploadTodo(todo);
        setTodoText('');
    }
    
    return (
        <div className="ui segment top-margin">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Add Todo</label>
                    <input required type="text" value={todo.task} onChange={e => setTodoText(e.target.value)}/>
                </div>               
            </form>
        </div> 
    )

    
}

const mapStateToProps = (state) => {
    return { todo: state.todo }
}

export default connect(mapStateToProps, { uploadTodo, setTodoText })(Form); 

