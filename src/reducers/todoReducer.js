const todoReducer = (state = { id: '', task: '', completed: false}, action) => {
    switch (action.type) {
        case 'TODO_TEXT':
            return {...state, task: action.payload};
        default:
            return state;
    }
}

export default todoReducer;