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
        <React.Fragment>
        <div className="container">
            <div className="todos-container">
                <h2>You have {`${todos.length}`} todos! </h2>
                <img className="todos-container-img" src={macbook}/>
                <button className="todos-container-btn" onClick={handleModal}>
                    New Task
                </button>
            </div>
            {children} 
        </div>
        {
            openModal ? 
            <Form task={task} setTask={setTask} todos={todos} dispatch={dispatch} handleModal={handleModal}/> 
            : 
            null
        }
    </React.Fragment>
    )
}

export default ContentContainer;
