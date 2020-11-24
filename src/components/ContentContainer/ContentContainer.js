import React, { Children, useContext, useState } from 'react'
import './ContentContainer.scss'
import macbook from '../../assets/macbook.png'
import TodoContext from '../../context/TodoContext';
import Form from '../Form/Form';

function ContentContainer({children}) {
    const {task, setTask, todos, dispatch} = useContext(TodoContext);
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => setOpenModal(!openModal);

    return (
        <div className="todos-container">
            <img className="todos-container-img" src={macbook}/>
            <button className="todos-container-btn" onClick={handleModal}>
                New Task
            </button>
           {children} 
           {
            openModal ? 
            <Form task={task} setTask={setTask} todos={todos} dispatch={dispatch} handleModal={handleModal}/> // le paso por props para luego poder cerrar el form.
            : 
            null
            }
        </div>

    )
}

export default ContentContainer;
