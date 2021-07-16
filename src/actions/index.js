// Action creator for uploading todos
export const uploadTodo = (todo) => {
    return {
        type: 'UPLOAD_TODO',
        payload: todo
    }
};

// for marking a todo as complete
export const completeTodo = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload: id
    }
};

// for removing a uncompleted or completed todo
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
};

// handles todo text when submitting and resetting form
export const setTodoText = (str) => {
    return {
        type: 'TODO_TEXT',
        payload: str
    }
};