export const TODO_DELETE = 'TODOS_DELETE';
export const TODO_ADD = 'TODO_ADD';
export const TODO_EDIT = 'TODO_EDIT';


export default (state, action) => {
    switch(action.type) {
        case TODO_ADD:
            return [...state, action.payload]
        case TODO_DELETE:
            return state.filter(todo => todo.id != action.payload.id);
        default:
            return state;
    }
}