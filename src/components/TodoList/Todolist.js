import React, {useContext, useState} from 'react'
import './Todolist.scss';
import TodoContext from '../../context/TodoContext';
import Todosreducer, {TODO_EDIT, TODO_DELETE} from '../../reducers/Todosreducer';
import ModalEdit from '../ModalEdit/ModalEdit';

function Todolist() {
    const {task, setTask, todos, dispatch} = useContext(TodoContext);
    const [displayModalEdit, setDisplayModalEdit] = useState(false);
    const [newTask, setNewTask] = useState("")

    const handleDisplayModal = () => setDisplayModalEdit(!displayModalEdit)

    const handleEditTask = (e) => {
        handleDisplayModal()
        dispatch({type: TODO_EDIT, payload:{todos, newTask, editedId: parseInt(e.target.id)}})
    }

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
                                <button id={todo.id} onClick={handleEditTask}>edit</button>
                                <button id={todo.id} onClick={deleteTask}>delete</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            
            {
                displayModalEdit ?
                <ModalEdit setNewTask={setNewTask} newTask={newTask} handleDisplayModal={handleDisplayModal}/>
                :
                null
            }

            </React.Fragment>
        )
    }
}

export default Todolist;
