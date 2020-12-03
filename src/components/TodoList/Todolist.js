import React, {useContext} from 'react'
import './Todolist.scss';
import TodoContext from '../../context/TodoContext';
import Todosreducer, {TODO_DELETE} from '../../reducers/Todosreducer';

function Todolist() {
    const {task, setTask, todos, dispatch} = useContext(TodoContext);
    const deleteTask = (e) => {
        dispatch({type: TODO_DELETE, payload:{id: e.target.id}})
    }

    if(task === "") {
        return(
            <h2 className="empty-todos">Let's add some new tasks!</h2>
        )
    }else{
        return(
            <React.Fragment>
            <div>
                {
                    todos.map((todo)=> {
                        return(
                        <div className="task" key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.check} /> 
                            <h1>{todo.task}</h1>
                            <div className="task-buttons">
                                <button id={todo.id} onClick={deleteTask}>delete</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            </React.Fragment>
        )
    }
}

export default Todolist;
