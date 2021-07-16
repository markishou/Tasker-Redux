import uniqid from 'uniqid';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPLOAD_TODO':
            return [{...action.payload, id: uniqid()}, ...state];
        case 'COMPLETE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true
                    }
                };
                return todo;
            });
        case 'REMOVE_TODO':
            return state.filter(todo => {
                return todo.id !== action.payload;
            });
        default:
            return state;
    }
}

export default todosReducer;