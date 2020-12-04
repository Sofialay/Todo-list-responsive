import React, {useContext} from 'react'
import './Todolist.scss';
import TodoContext from '../../context/TodoContext';
import Todosreducer, {TODO_DELETE, UPDATE_CHECKED} from '../../reducers/Todosreducer';

function Todolist() {
    const {task, setTask, todos, dispatch} = useContext(TodoContext);

    const deleteTask = (e) => {
        dispatch({type: TODO_DELETE, payload:{id: e.target.id}})
    }

    const updateChecked = (todo, check) => {
        dispatch({type: UPDATE_CHECKED, check: !todo.check, id: todo.id})
    }

    if(task === "") {
        return(
            <h2 className="empty-todos">Let's add some new tasks!</h2>
        )
    }else{
        return(
            <div>
                {
                    todos.map((todo)=> {
                        return(
                        <div className="task" key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.check} onClick={(e) => updateChecked(todo, e.target.check)} /> 
                            <h1 className={todo.check ? 'task-checked' : 'task-unchecked'}>{todo.task}</h1>
                            <div className="task-buttons">
                                <button id={todo.id} onClick={deleteTask}>delete</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Todolist;
