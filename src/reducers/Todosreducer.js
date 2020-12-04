export const TODO_DELETE = 'TODOS_DELETE';
export const TODO_ADD = 'TODO_ADD';
export const UPDATE_CHECKED = 'UPDATE_CHECKED';


export default (state, action) => {
    switch(action.type) {
        case TODO_ADD:
            return [...state, action.payload]
        case TODO_DELETE:
            return state.filter(todo => todo.id != action.payload.id);
        case UPDATE_CHECKED: 
            return state.map(todo => {
                if(todo.id == action.id) todo.check = action.check;
                return todo;
            });
        default:
            return state;
    }
}