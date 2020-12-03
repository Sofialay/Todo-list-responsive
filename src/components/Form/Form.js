import React from 'react'
import './Form.scss'
import TodosReducer, {TODO_ADD} from '../../reducers/Todosreducer';

function Form({task, setTask, todos, dispatch, handleModal}) {


    const handleSubmit = (e) => {
        dispatch({type: TODO_ADD, payload: {id: Date.now(), check: false, task, completed: false}}) 
        handleModal()
      }

    return (
        <div className="form-todo">
            <button className="form-todo-close" onClick={handleModal}>x</button>
            <label className="form-todo-label">Add a new task</label>
            <input className="form-todo-input" placeholder="New task" onChange={e => setTask(e.target.value)}/>
            <div className="form-todo-category">
                <h3 className="form-todo-category-title">Choose task type</h3>
                <button className="form-todo-category-btn work">Work</button>
                <button className="form-todo-category-btn personal">Personal</button>
                <button className="form-todo-category-btn health">Health</button>
                <button className="form-todo-category-btn shopping">Shopping</button>
                <button className="form-todo-category-btn other">Other</button>
            </div>
            <button className="form-todo-category-btn-add" onClick={handleSubmit}>Add task</button>
        </div>
    )
}


export default Form;
