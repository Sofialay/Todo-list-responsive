import './MainPage.scss'
import React, {useState, useReducer} from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import Todolist from '../TodoList/Todolist'
import Todosreducer from '../../reducers/Todosreducer';
import TodoContext from '../../context/TodoContext';

function MainPage() {
    const [todos, dispatch] = useReducer(Todosreducer, []) // le paso el nombre de la funcion que va a modificar 
    // 'todos', luego le paso el valor inicial de todos(en este caso un array vacio)
    const [task, setTask] = useState("");

    return (
            <div className="bg-todo-content">
                <TodoContext.Provider value={ {task, setTask, todos, dispatch}}>
                    <ContentContainer>
                        <Todolist/>
                    </ContentContainer>
                </TodoContext.Provider>
            </div>
    )
}


export default MainPage;