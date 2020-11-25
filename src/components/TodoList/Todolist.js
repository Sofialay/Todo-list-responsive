import React, {useContext} from 'react'
import './Todolist.scss';
import TodoContext from '../../context/TodoContext';

function Todolist() {
    const {task, todos} = useContext(TodoContext);

    if(task === "") {
        return(
            <h2 className="empty-todos">Let's add some new tasks!</h2>
        )
    }else{
        return(
                todos.map((todo)=> {
                    return(
                    <div>
                        <input type="checkbox" defaultChecked={todo.check} onChange={todo.check ? todo.completed === true : todo.completed}/> 
                        <h1>{todo.task}</h1>
                    </div>
                    )
                })
        )
    }
}

export default Todolist;
