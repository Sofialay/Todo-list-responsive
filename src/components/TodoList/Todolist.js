import React, {useContext} from 'react'
import './Todolist.scss';
import TodoContext from '../../context/TodoContext';

function Todolist() {
    const {task, setTask, todos, dispatch} = useContext(TodoContext);

    if(task === "") {
        return(
            <h2 className="empty-todos">Let's add some new tasks!</h2>
        )
    }else{
        return(
                todos.map((todo)=> {
                    return(
                    <h1>{todo.task}</h1>
                    )
                })
        )
    }
}

export default Todolist;
