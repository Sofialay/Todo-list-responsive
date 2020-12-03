import React, {useContext} from 'react'
import Todosreducer, {TODO_EDIT} from '../../reducers/Todosreducer';
import TodoContext from '../../context/TodoContext';

export default function ModalEdit({setNewTask, newTask, handleDisplayModal}) {



    return (
        <div>
            <input type="text" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleDisplayModal}>save</button>
            <p>{newTask}</p>
        </div>
    )
}
